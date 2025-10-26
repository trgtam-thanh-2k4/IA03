# Frontend README

## React User Registration Frontend

This is the frontend application for the User Registration System built with React, TypeScript, and modern UI components.

## 🚀 Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

3. The application will be available at `http://localhost:3000`

## 📋 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🎨 UI Components

Built with shadcn/ui and Tailwind CSS:

- **Button** - Multiple variants (default, outline, secondary, etc.)
- **Input** - Form input fields with validation states
- **Card** - Container components for content
- **Label** - Form labels
- **Toast** - Notification system
- **Toaster** - Toast notification container

## 🔧 Configuration

The frontend connects to the backend API. Configure the API URL in your environment:

```env
REACT_APP_API_URL=http://localhost:3001
```

## 📱 Pages

### Home Page (`/`)
- Welcome screen with navigation buttons
- Links to Sign Up and Login pages

### Sign Up Page (`/signup`)
- User registration form
- Email and password validation
- API integration with React Query
- Success/error feedback

### Login Page (`/login`)
- User login form (mock implementation)
- Form validation
- Simulated login feedback

## 🔄 State Management

- **React Query** - API calls and caching
- **React Hook Form** - Form state management
- **Toast System** - User feedback notifications

## 📝 Form Validation

Using Yup schema validation:

```typescript
const registerSchema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
});
```

## 🎯 API Integration

The frontend uses React Query for API calls:

```typescript
const registerMutation = useMutation({
  mutationFn: UserApiService.registerUser,
  onSuccess: (data) => {
    toast({
      title: 'Success!',
      description: data.message,
    });
  },
  onError: (error: Error) => {
    toast({
      title: 'Registration Failed',
      description: error.message,
      variant: 'destructive',
    });
  },
});
```

## 🎨 Styling

- **Tailwind CSS** - Utility-first CSS framework
- **CSS Variables** - Custom design system
- **Responsive Design** - Mobile-first approach
- **Dark Mode Support** - Built-in dark theme variables

## 🧪 Testing

Run tests:
```bash
npm test
```

## 📦 Dependencies

### Core
- `react` - React library
- `react-dom` - React DOM
- `react-router-dom` - Routing
- `typescript` - TypeScript

### UI & Styling
- `tailwindcss` - CSS framework
- `@radix-ui/react-*` - UI primitives
- `lucide-react` - Icons
- `class-variance-authority` - Component variants
- `clsx` - Class name utility
- `tailwind-merge` - Tailwind class merging

### Forms & Validation
- `react-hook-form` - Form management
- `@hookform/resolvers` - Form validation resolvers
- `yup` - Schema validation

### API & State
- `@tanstack/react-query` - Data fetching
- `axios` - HTTP client

### Development
- `react-scripts` - Create React App scripts
- `@types/*` - TypeScript type definitions
