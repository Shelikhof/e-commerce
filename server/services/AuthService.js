import bcrypt from 'bcryptjs';
import UserDto from '../dto/UserDto.js';
import ApiError from '../errors/ApiError.js';
import { User } from '../models/models.js';
import TokensService from './TokensService.js';

class UserService {
	async registration(email, password, firstName, lastName) {
		const candidate = await User.findOne({ where: { email: email }, raw: true });
		if (candidate) {
			throw ApiError.BadRequest('User already exist');
		}
		const hashPassword = bcrypt.hashSync(password, 12);
		const user = await (
			await User.create({
				email: email,
				first_name: firstName,
				last_name: lastName,
				password: hashPassword,
			})
		).get({ plain: true });
		const userDto = new UserDto(user);
		const tokens = TokensService.generateTokens({ ...userDto });
		await TokensService.saveToken(user.id, tokens.refreshToken);
		return { user: userDto, tokens };
	}

	async login(email, password) {
		const user = await User.findOne({ where: { email: email }, raw: true });
		if (!user) {
			throw ApiError.BadRequest('User not found');
		}
		const isPasswordValid = bcrypt.compareSync(password, user.password);
		if (!isPasswordValid) {
			throw ApiError.BadRequest('Incorrect password');
		}
		const userDto = new UserDto(user);
		const tokens = TokensService.generateTokens({ ...userDto });
		await TokensService.saveToken(user.id, tokens.refreshToken);
		return { user: userDto, tokens };
	}

	async logout(refreshToken) {
		const result = TokensService.removeToken(refreshToken);
		return result;
	}

	async refresh(refreshToken) {
		if (!refreshToken) {
			throw ApiError.BadRequest('Invalid token');
		}
		const userData = TokensService.validationRefreshToken(refreshToken);
		const tokenFromDB = await TokensService.findRefreshToken(refreshToken);
		if (!userData || !tokenFromDB) {
			throw ApiError.UnauthorizationError();
		}
		const user = await User.findByPk(userData.id);
		const userDto = new UserDto(user);
		const tokens = TokensService.generateTokens({ ...userDto });
		await TokensService.saveToken(userDto.id, tokens.refreshToken);
		return {
			tokens,
			user: userDto,
		};
	}
}

export default new UserService();
