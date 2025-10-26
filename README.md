# User Registration System

A complete User Registration System built with NestJS backend and React frontend, featuring user registration, login forms, and modern UI components.

## 🚀 Features

### Backend (NestJS)
- **User Registration API** - POST `/user/register` endpoint
- **Password Hashing** - Secure password storage using bcrypt
- **Input Validation** - Email and password validation using class-validator
- **SQLite Database** - Lightweight database for easy setup
- **CORS Configuration** - Cross-origin requests enabled for frontend
- **Error Handling** - Comprehensive error messages and validation

### Frontend (React + TypeScript)
- **Modern UI** - Built with Tailwind CSS and shadcn/ui components
- **Form Validation** - React Hook Form with Yup validation
- **API Integration** - React Query for efficient API calls and caching
- **Responsive Design** - Mobile-friendly interface
- **Toast Notifications** - User feedback for success/error states
- **Routing** - React Router for navigation between pages

## 📁 Project Structure

```
IA03/
├── backend/                 # NestJS Backend
│   ├── src/
│   │   ├── user/           # User module
│   │   │   ├── user.entity.ts
│   │   │   ├── user.service.ts
│   │   │   ├── user.controller.ts
│   │   │   ├── user.module.ts
│   │   │   └── dto/
│   │   │       └── user.dto.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── config.env
└── frontend/               # React Frontend
    ├── src/
    │   ├── components/ui/   # UI Components
    │   ├── pages/          # Page Components
    │   ├── services/       # API Services
    │   ├── hooks/          # Custom Hooks
    │   ├── lib/            # Utilities
    │   └── App.tsx
    ├── package.json
    ├── tsconfig.json
    └── tailwind.config.js
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp config.env .env
```

4. Start the development server:
```bash
npm run start:dev
```

The backend will be available at `http://localhost:3001`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will be available at `http://localhost:3000`

## 🔧 API Endpoints

### User Registration
- **POST** `/user/register`
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:**
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

## 🎨 UI Components

The frontend uses a modern design system with:
- **Cards** - Clean container components
- **Forms** - Validated input fields with error states
- **Buttons** - Multiple variants (primary, outline, etc.)
- **Toast Notifications** - Success and error feedback
- **Responsive Layout** - Mobile-first design

## 🔒 Security Features

- **Password Hashing** - bcrypt with salt rounds
- **Input Validation** - Server-side validation with class-validator
- **CORS Protection** - Configured for specific origins
- **SQL Injection Prevention** - TypeORM ORM usage
- **Environment Variables** - Sensitive data in config files

## 🚀 Deployment

### Backend Deployment
1. Build the application:
```bash
npm run build
```

2. Start production server:
```bash
npm run start:prod
```

### Frontend Deployment
1. Build the application:
```bash
npm run build
```

2. Serve the `build` folder with any static file server

## 📝 Development Notes

- **Database**: SQLite file (`database.sqlite`) is created automatically
- **Validation**: Both client-side (Yup) and server-side (class-validator) validation
- **Error Handling**: Comprehensive error messages for better UX
- **TypeScript**: Full type safety across the application
- **Code Quality**: ESLint and Prettier configured

## 🧪 Testing

The application includes:
- Form validation testing
- API endpoint testing
- Error handling verification
- UI component testing

## 📄 License

This project is created for educational purposes as part of the IA03 assignment.

## 👨‍💻 Author

Created for Advanced Web Application Development course.
