#!/bin/bash

# Firebase Token Setup Script
# This script helps you set up the Firebase CI token for GitHub Actions

set -e

echo "🔥 Firebase Hosting Deployment Setup"
echo "====================================="
echo ""

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI is not installed."
    echo ""
    echo "To install Firebase CLI, run:"
    echo "  npm install -g firebase-tools"
    echo ""
    exit 1
fi

echo "✅ Firebase CLI detected"
echo ""

# Check if user is logged in
if ! firebase projects:list &> /dev/null; then
    echo "📝 You need to log in to Firebase first"
    echo ""
    firebase login
fi

echo "🔑 Generating Firebase CI token..."
echo ""
echo "This will open your browser for authentication."
echo "After authentication, copy the token that appears in your terminal."
echo ""
read -p "Press Enter to continue..."

# Generate token
firebase login:ci

echo ""
echo "✅ Token generated successfully!"
echo ""
echo "📋 Next steps:"
echo "  1. Copy the token shown above"
echo "  2. Go to your GitHub repository"
echo "  3. Navigate to Settings → Secrets and variables → Actions"
echo "  4. Click 'New repository secret'"
echo "  5. Name: FIREBASE_TOKEN"
echo "  6. Value: Paste the token"
echo "  7. Click 'Add secret'"
echo ""
echo "🚀 Once the token is added, push to main branch to trigger deployment!"
echo ""

