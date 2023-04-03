import jwt from 'jsonwebtoken';
import { RefreshToken } from '../models/models.js';

class TokenService {
	validationAccessToken(accessToken) {
		try {
			const userData = jwt.verify(accessToken, process.env.JWT_ACCESS_KEY);
			return userData;
		} catch (e) {
			return null;
		}
	}

	validationRefreshToken(refreshToken) {
		try {
			const userData = jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY);
			return userData;
		} catch (e) {
			return null;
		}
	}

	generateTokens(payload) {
		const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {
			expiresIn: process.env.JWT_ACCESS_LIVETIME,
		});
		const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, {
			expiresIn: process.env.JWT_REFRESH_LIVETIME,
		});
		return {
			accessToken,
			refreshToken,
		};
	}

	async saveToken(userId, refreshToken) {
		const tokenData = await RefreshToken.findOne({ where: { userId }, raw: true });
		if (tokenData) {
			tokenData.refreshToken = refreshToken;
			return await RefreshToken.update(
				{ refresh_token: refreshToken },
				{ where: { id: tokenData.id } },
			);
		}
		const token = await RefreshToken.create({ userId, refresh_token: refreshToken });
		return token;
	}

	async removeToken(refreshToken) {
		const result = await RefreshToken.destroy({ where: { refresh_token: refreshToken } });
		return result;
	}

	async findRefreshToken(refreshToken) {
		const tokenData = await RefreshToken.findOne({
			where: { refresh_token: refreshToken },
			raw: true,
		});
		return tokenData;
	}
}

export default new TokenService();
