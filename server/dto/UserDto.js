class UserDto {
	id;
	firstName;
	lastName;
	email;
	image;

	constructor(model) {
		this.id = model.id;
		this.firstName = model.first_name;
		this.lastName = model.last_name;
		this.email = model.email;
		this.image = model.image;
	}
}

export default UserDto;
