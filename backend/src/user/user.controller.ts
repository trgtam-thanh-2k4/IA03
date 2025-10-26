import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto, RegisterResponseDto } from './dto/user.dto';

/**
 * Controller for handling user-related HTTP requests
 */
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Register a new user
   * @param registerUserDto - User registration data
   * @returns Promise<RegisterResponseDto>
   */
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerUserDto: RegisterUserDto): Promise<RegisterResponseDto> {
    return this.userService.register(registerUserDto);
  }
}
