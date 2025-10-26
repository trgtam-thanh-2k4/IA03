import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * User registration request data
 */
export interface RegisterUserRequest {
  email: string;
  password: string;
}

/**
 * User registration response data
 */
export interface RegisterUserResponse {
  success: boolean;
  message: string;
  data?: {
    id: number;
    email: string;
    createdAt: string;
  };
}

/**
 * User login request data
 */
export interface LoginUserRequest {
  email: string;
  password: string;
}

/**
 * API service for user operations
 */
export class UserApiService {
  /**
   * Register a new user
   * @param userData - User registration data
   * @returns Promise<RegisterUserResponse>
   */
  static async registerUser(userData: RegisterUserRequest): Promise<RegisterUserResponse> {
    try {
      const response = await apiClient.post<RegisterUserResponse>('/user/register', userData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || 'Registration failed');
      }
      throw new Error('Network error occurred');
    }
  }

  /**
   * Login user (mock implementation)
   * @param userData - User login data
   * @returns Promise<{ success: boolean; message: string }>
   */
  static async loginUser(userData: LoginUserRequest): Promise<{ success: boolean; message: string }> {
    // Mock implementation - simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Login successful! (This is a mock response)',
        });
      }, 1000);
    });
  }
}
