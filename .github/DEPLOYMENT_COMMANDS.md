# Quick Deployment Commands Reference

## 🚀 Automatic Deployment (GitHub Actions)

### Trigger Deployment
```bash
# Deploy to production
git push origin main

# Create preview deployment (via Pull Request)
git checkout -b feature/my-feature
git push origin feature/my-feature
# Then create PR on GitHub
```

## 🔧 Setup Commands

### One-time Setup
```bash
# Generate Firebase token
firebase login:ci

# Or use the helper script
.github/scripts/setup-firebase-token.sh
```

## 📦 Manual Deployment

### Production Deployment
```bash
# Build and deploy in one command
npm run deploy

# Or step by step
npm run build
firebase deploy --only hosting:deck-editor
```

### Preview Deployment
```bash
# Deploy to preview channel
npm run deploy:preview

# Deploy to specific channel
firebase hosting:channel:deploy my-channel --only deck-editor
```

## 🛠️ Development Commands

### Local Development
```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔍 Firebase Commands

### Check Deployment Status
```bash
# List hosting sites
firebase hosting:sites:list

# View deployment history
firebase hosting:channel:list --only deck-editor
```

### Manage Channels
```bash
# List all preview channels
firebase hosting:channel:list

# Delete a preview channel
firebase hosting:channel:delete CHANNEL_ID --only deck-editor
```

### Project Info
```bash
# List projects
firebase projects:list

# Get current project
firebase use
```

## 🐛 Debugging

### Test Build Locally
```bash
# Build and preview
npm run build
npm run preview

# Test Firebase hosting locally
firebase serve --only hosting:deck-editor
```

### Check Deployment Logs
```bash
# View recent deployments
firebase hosting:channel:list --only deck-editor

# View hosting info
firebase hosting:channel:open CHANNEL_ID --only deck-editor
```

## 📊 URLs

### Production
- Site: https://depoint-deck-editor.web.app
- Firebase Console: https://console.firebase.google.com/project/depoint-project-2024

### GitHub Actions
- Workflows: https://github.com/YOUR_USERNAME/YOUR_REPO/actions
- Secrets: https://github.com/YOUR_USERNAME/YOUR_REPO/settings/secrets/actions

## ⚡ Quick Actions

### Rollback to Previous Version
```bash
# List deployments
firebase hosting:channel:list --only deck-editor

# Deploy specific version (from Firebase Console)
# Go to Hosting → Release History → Restore
```

### Emergency Rollback via GitHub
1. Go to Actions tab
2. Find successful deployment
3. Click "Re-run all jobs"

### Clean Build
```bash
# Remove build artifacts
rm -rf dist node_modules/.vite

# Reinstall and rebuild
npm ci
npm run build
```

## 🔐 Security

### Rotate Token
```bash
# Generate new token
firebase login:ci

# Update GitHub secret
# Go to Settings → Secrets → Edit FIREBASE_TOKEN
```

### Revoke Token
```bash
# Login interactively
firebase login

# Revoke all tokens
firebase logout --token YOUR_OLD_TOKEN
```

## 📝 Notes

- Production deployments are automatic on push to `main`
- PR deployments create temporary preview URLs
- Preview channels expire after 7 days by default
- Build artifacts are in the `dist/` directory
- Cache is stored in `.firebase/` (git-ignored)

