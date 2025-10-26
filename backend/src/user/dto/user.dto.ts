import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

/**
 * DTO for user registration request
 */
export class RegisterUserDto {
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}

/**
 * DTO for user registration response
 */
export class RegisterResponseDto {
  success: boolean;
  message: string;
  data?: {
    id: number;
    email: string;
    createdAt: Date;
  };
}

/**
 * DTO for login request
 */
export class LoginUserDto {
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
