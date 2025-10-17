# Firebase Hosting Deployment Guide

This project is configured to deploy to Firebase Hosting.

## ⚠️ IMPORTANT: Hosting Site Configuration

**This project ALWAYS deploys to the specific hosting site: `depoint-deck-editor`**

- Firebase Project: `depoint-project-2024`
- Hosting Site: `depoint-deck-editor` (NOT the default site)
- This is configured in `.firebaserc` and `firebase.json`

## Prerequisites

1. **Firebase CLI** installed globally (already done)
   ```bash
   npm install -g firebase-tools
   ```

2. **Firebase Project** created
   - Project ID: `depoint-project-2024`
   - Hosting Site: `depoint-deck-editor`
   - Already configured in `.firebaserc` and `firebase.json`

## First Time Setup

### 1. Authenticate with Firebase

Run this command and follow the browser login:

```bash
firebase login
```

When prompted:
- **Enable Gemini in Firebase features?** → Answer `n` (No)
- **Allow Firebase to collect CLI usage?** → Answer as you prefer
- Browser will open for Google authentication

### 2. Verify Authentication

Check if you're logged in and can see your project:

```bash
firebase projects:list
```

You should see `depoint-project-2024` in the list.

## Deployment Commands

### Production Deployment

Deploy to your main Firebase Hosting site:

```bash
npm run deploy
```

This will:
1. Build the production version (`vite build`)
2. Deploy to Firebase Hosting (site: `depoint-deck-editor`)
3. Your site will be live at: `https://depoint-deck-editor.web.app`

### Preview Deployment

Deploy to a preview channel for testing:

```bash
npm run deploy:preview
```

This creates a temporary preview URL that you can share for testing without affecting production.

## Manual Deployment Steps

If you prefer to run commands separately:

```bash
# 1. Build the project
npm run build

# 2. Deploy to Firebase Hosting (depoint-deck-editor site)
firebase deploy --only hosting:deck-editor

# 3. Or deploy to a preview channel
firebase hosting:channel:deploy preview --only deck-editor
```

## Configuration Files

- **`firebase.json`**: Hosting configuration
  - Public directory: `dist` (Vite build output)
  - SPA rewrites for React Router
  - Cache headers for static assets

- **`.firebaserc`**: Project configuration
  - Default project: `depoint-project-2024`

## Hosting Features Configured

✅ **Single Page Application (SPA)**: All routes redirect to `index.html`

✅ **Cache Optimization**:
- Images: 1 year cache (31536000 seconds)
- JS/CSS: 1 year cache (31536000 seconds)

✅ **Automatic HTTPS**: Firebase provides free SSL certificates

## Useful Firebase Commands

```bash
# View deployment history
firebase hosting:sites:list

# Open hosting dashboard
firebase open hosting

# View live logs
firebase functions:log

# Rollback to previous version (via console)
# Go to: https://console.firebase.google.com/project/depoint-project-2024/hosting
```

## 🌐 Expected URLs

After deployment to `depoint-deck-editor` site:
- **Production**: `https://depoint-deck-editor.web.app`
- **Alternative**: `https://depoint-deck-editor.firebaseapp.com`

**⚠️ Note**: This is NOT the default site URL. We're using a specific hosting site called `depoint-deck-editor`.

## Custom Domain Setup

To add a custom domain (e.g., `deck.depoint.com`):

1. Go to Firebase Console: https://console.firebase.google.com/project/depoint-project-2024/hosting
2. Click "Add custom domain"
3. Follow the DNS setup instructions
4. Wait for SSL certificate provisioning (15 mins - 24 hours)

## Continuous Deployment

For automatic deployments on git push, you can set up GitHub Actions:

1. Generate a Firebase token:
   ```bash
   firebase login:ci
   ```

2. Add the token to GitHub Secrets as `FIREBASE_TOKEN`

3. Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to Firebase
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '20'
         - run: npm ci
         - run: npm run build
         - uses: FirebaseExtended/action-hosting-deploy@v0
           with:
             repoToken: '${{ secrets.GITHUB_TOKEN }}'
             firebaseServiceAccount: '${{ secrets.FIREBASE_TOKEN }}'
             channelId: live
             projectId: depoint-project-2024
   ```

## Troubleshooting

### "Failed to authenticate"
```bash
firebase logout
firebase login
```

### "Project not found"
Check that `.firebaserc` has the correct project ID: `depoint-project-2024`

### Build errors
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Deployment takes too long
Firebase Hosting usually deploys in 30-60 seconds. If it's taking longer:
- Check your internet connection
- Try deploying only the deck-editor site: `firebase deploy --only hosting:deck-editor`

## Support

- Firebase Docs: https://firebase.google.com/docs/hosting
- Firebase Console: https://console.firebase.google.com/project/depoint-project-2024
- Firebase Status: https://status.firebase.google.com

