import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsNotEmpty({ message: "It can't be empty" })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: "It can't be empty" })
  @IsString()
  password: string;
}
