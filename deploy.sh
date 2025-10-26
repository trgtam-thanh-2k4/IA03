#!/bin/bash

# User Registration System - Deployment Script
echo "🚀 Starting User Registration System deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Backend setup
echo "📦 Setting up backend..."
cd backend

if [ ! -d "node_modules" ]; then
    echo "Installing backend dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install backend dependencies"
        exit 1
    fi
fi

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    echo "Creating .env file..."
    cp config.env .env
fi

echo "✅ Backend setup complete"

# Frontend setup
echo "📦 Setting up frontend..."
cd ../frontend

if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install frontend dependencies"
        exit 1
    fi
fi

echo "✅ Frontend setup complete"

# Build frontend
echo "🔨 Building frontend..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Frontend build failed"
    exit 1
fi

echo "✅ Frontend build complete"

# Build backend
echo "🔨 Building backend..."
cd ../backend
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Backend build failed"
    exit 1
fi

echo "✅ Backend build complete"

echo ""
echo "🎉 Deployment setup complete!"
echo ""
echo "To start the application:"
echo "1. Backend: cd backend && npm run start:prod"
echo "2. Frontend: cd frontend && npm start"
echo ""
echo "Or for development:"
echo "1. Backend: cd backend && npm run start:dev"
echo "2. Frontend: cd frontend && npm start"
echo ""
echo "Backend will be available at: http://localhost:3001"
echo "Frontend will be available at: http://localhost:3000"
