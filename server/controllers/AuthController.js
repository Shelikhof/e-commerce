import ApiError from '../errors/ApiError.js';
import AuthService from '../services/AuthService.js';
import validateEmail from '../utils/validateEmail.js';

class UserController {
	async registration(req, res, next) {
		try {
			console.log(req.body);
			const { email, password, firstName, lastName } = req.body;
			if (!email || !password || !firstName || !lastName) {
				throw ApiError.BadRequest();
			}
			if (!validateEmail(email)) {
				throw ApiError.BadRequest('Incorrect email format');
			}
			const user = await AuthService.registration(email, password, firstName, lastName);
			res.cookie('refreshToken', user.tokens.refreshToken, {
				httpOnly: true,
				maxAge: 30 * 24 * 3600 * 1000,
			});
			return res.json(user);
		} catch (error) {
			next(error);
		}
	}

	async login(req, res, next) {
		try {
			const { email, password } = req.body;
			if (!email || !password) {
				throw ApiError.BadRequest();
			}
			const user = await AuthService.login(email, password);
			res.cookie('refreshToken', user.tokens.refreshToken, {
				httpOnly: true,
				maxAge: 30 * 24 * 3600 * 1000,
			});
			return res.json(user);
		} catch (error) {
			next(error);
		}
	}

	async logout(req, res, next) {
		try {
			const { refreshToken } = req.cookies;
			const result = await AuthService.logout(refreshToken);
			res.clearCookie('refreshToken');
			return res.sendStatus(200);
		} catch (error) {
			next(error);
		}
	}

	async refresh(req, res, next) {
		try {
			const { refreshToken } = req.cookies;
			const user = await AuthService.refresh(refreshToken);
			res.cookie('refreshToken', user.tokens.refreshToken, {
				httpOnly: true,
				maxAge: 30 * 24 * 3600 * 1000,
			});
			return res.json(user);
		} catch (error) {
			next(error);
		}
	}
}

export default new UserController();
