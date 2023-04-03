import ApiError from '../errors/ApiError.js';
import TokensService from '../services/TokensService.js';

export default function (req, res, next) {
	try {
		const authorizationHeader = req.headers.authorization;
		if (!authorizationHeader) {
			throw ApiError.UnauthorizationError();
		}
		const accessToken = authorizationHeader.split(' ')[1];
		if (!accessToken) {
			throw ApiError.UnauthorizationError();
		}
		const userData = TokensService.validationAccessToken(accessToken);
		if (!userData) {
			throw ApiError.UnauthorizationError();
		}
		res.user = userData;
		next();
	} catch (error) {
		return next(error);
	}
}
