# Backend README

## NestJS User Registration API

This is the backend API for the User Registration System built with NestJS, TypeScript, and SQLite.

## 🚀 Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run start:dev
```

3. The API will be available at `http://localhost:3001`

## 📋 Available Scripts

- `npm run start` - Start the application
- `npm run start:dev` - Start in development mode with hot reload
- `npm run start:prod` - Start in production mode
- `npm run build` - Build the application
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## 🔧 Configuration

The application uses environment variables for configuration. Copy `config.env` to `.env` and modify as needed:

```env
PORT=3001
FRONTEND_URL=http://localhost:3000
```

## 📊 Database

- **Type**: SQLite
- **File**: `database.sqlite` (created automatically)
- **ORM**: TypeORM
- **Synchronization**: Enabled for development

## 🔒 Security Features

- Password hashing with bcrypt (10 salt rounds)
- Input validation with class-validator
- CORS configuration for frontend
- SQL injection prevention with TypeORM

## 📡 API Endpoints

### POST /user/register
Register a new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": 1,
    "email": "user@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Error Responses:**
- `400` - Validation errors
- `409` - User already exists
- `500` - Server errors

## 🏗️ Architecture

- **Controller**: Handles HTTP requests
- **Service**: Business logic and database operations
- **Entity**: Database model definition
- **DTO**: Data transfer objects for validation
- **Module**: Dependency injection container

## 🧪 Testing

Run the test suite:
```bash
npm run test
```

## 📦 Dependencies

### Production
- `@nestjs/common` - NestJS core
- `@nestjs/core` - NestJS framework
- `@nestjs/platform-express` - Express adapter
- `@nestjs/typeorm` - TypeORM integration
- `@nestjs/config` - Configuration management
- `typeorm` - ORM
- `sqlite3` - SQLite driver
- `bcrypt` - Password hashing
- `class-validator` - Validation decorators
- `class-transformer` - Object transformation

### Development
- `@nestjs/cli` - NestJS CLI
- `typescript` - TypeScript compiler
- `jest` - Testing framework
- `eslint` - Code linting
- `prettier` - Code formatting
