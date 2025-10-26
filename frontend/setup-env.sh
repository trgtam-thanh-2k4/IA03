#!/bin/bash

# Frontend Environment Setup Script
echo "🔧 Setting up frontend environment..."

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "Creating .env file from config.env..."
    cp config.env .env
    echo "✅ Environment file created"
else
    echo "✅ Environment file already exists"
fi

echo ""
echo "Environment variables:"
echo "REACT_APP_API_URL: ${REACT_APP_API_URL:-http://localhost:3001}"
echo "REACT_APP_APP_NAME: ${REACT_APP_APP_NAME:-User Registration System}"
echo "REACT_APP_VERSION: ${REACT_APP_VERSION:-1.0.0}"
echo ""
echo "🚀 Frontend environment setup complete!"
echo "You can now run: npm start"
