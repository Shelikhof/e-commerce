class ApiError extends Error {
	status;
	errors;

	constructor(status, message, errors = []) {
		super(message);
		this.status = status;
		this.errors = errors;
	}

	static BadRequest(message = 'Bad request', errors = []) {
		return new ApiError(400, message, errors);
	}

	static UnauthorizationError(message = 'Unauthorization Error') {
		return new ApiError(401, message);
	}
}

export default ApiError;
