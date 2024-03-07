import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Wrong email' })
	email: string;

	@IsString({ message: 'Need input password' })
	password: string;

	@IsString({ message: 'Need input name' })
	name: string;
}
