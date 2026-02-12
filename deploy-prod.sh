#!/bin/bash

cd /home/ubuntu/frontend/frontend-production

echo "Pulling latest code..."
git pull origin main

echo "Installing dependencies..."
npm install

echo "Building project..."
npm run build

echo "Reloading PM2..."
pm2 reload frontend-prod

echo "Production deployed successfully 🚀"

