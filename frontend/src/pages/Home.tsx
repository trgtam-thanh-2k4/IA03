import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

/**
 * Home page component
 */
const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-900">
            Welcome to User Registration
          </CardTitle>
          <CardDescription className="text-gray-600">
            Get started by creating an account or signing in
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Link to="/signup" className="w-full">
              <Button className="w-full" size="lg">
                Sign Up
              </Button>
            </Link>
            <Link to="/login" className="w-full">
              <Button variant="outline" className="w-full" size="lg">
                Login
              </Button>
            </Link>
          </div>
          <div className="text-center text-sm text-gray-500">
            <p>Built with NestJS, React, and TypeScript</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
