#!/bin/bash

# Simple deployment script for Falcon Creatives
echo "🚀 Starting deployment process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ -d "build" ]; then
    echo "✅ Build successful!"
    echo "📁 Build files are ready in the 'build' directory"
    echo "🌐 You can now deploy the 'build' folder to any static hosting service"
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Deployment preparation complete!"
