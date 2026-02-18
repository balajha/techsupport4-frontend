#!/bin/bash


echo "🚀 Starting staging deployment: $(date)"

cd /home/ubuntu/frontend

echo "Cleaning old build..."
rm -rf .next

echo "📦 Installing dependencies..."
npm install

echo "🏗 Building project..."
npm run build

echo "🔄 Reloading PM2 process..."
pm2 reload frontend

echo "✅ Staging deployed successfully 🚀"

