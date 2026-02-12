#!/bin/bash

cd /home/ubuntu/frontend/frontend-staging

echo "Pulling staging code..."
git pull origin staging

npm install
npm run build

pm2 reload frontend-staging

echo "Staging deployed 🚀"

