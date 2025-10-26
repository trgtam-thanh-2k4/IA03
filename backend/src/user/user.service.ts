import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { RegisterUserDto, RegisterResponseDto } from './dto/user.dto';

/**
 * Service for handling user-related operations
 */
@Injectable()
export class UserService {
  private readonly SALT_ROUNDS = 10;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Register a new user
   * @param registerUserDto - User registration data
   * @returns Promise<RegisterResponseDto>
   */
  async register(registerUserDto: RegisterUserDto): Promise<RegisterResponseDto> {
    const { email, password } = registerUserDto;

    try {
      // Check if user already exists
      const existingUser = await this.userRepository.findOne({ where: { email } });
      if (existingUser) {
        throw new ConflictException('User with this email already exists');
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, this.SALT_ROUNDS);

      // Create new user
      const newUser = this.userRepository.create({
        email,
        password: hashedPassword,
      });

      const savedUser = await this.userRepository.save(newUser);

      return {
        success: true,
        message: 'User registered successfully',
        data: {
          id: savedUser.id,
          email: savedUser.email,
          createdAt: savedUser.createdAt,
        },
      };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to register user');
    }
  }

  /**
   * Find user by email
   * @param email - User email
   * @returns Promise<User | null>
   */
  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }
}
