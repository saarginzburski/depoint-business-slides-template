# 🚀 Firebase Automatic Deployment - Setup Complete!

## ✅ What's Been Configured

Your repository is now configured for **automatic deployment to Firebase Hosting** without using service accounts. The deployment uses Firebase CI tokens for authentication.

### Files Created/Modified

#### ✅ GitHub Actions Workflow
- **`.github/workflows/firebase-hosting-deploy.yml`**
  - Deploys to production on push to `main`
  - Creates preview deployments for Pull Requests
  - Supports manual trigger from GitHub Actions tab

#### 📖 Documentation Files
- **`.github/FIREBASE_DEPLOYMENT_SETUP.md`** - Complete setup guide
- **`.github/DEPLOYMENT_COMMANDS.md`** - Quick command reference
- **`.github/BADGES.md`** - Status badges for your README
- **`README.md`** - Updated with deployment instructions

#### 🛠️ Helper Scripts
- **`.github/scripts/setup-firebase-token.sh`** - Interactive setup script

## 🎯 Deployment Configuration

### Target Information
- **Firebase Project**: `depoint-project-2024`
- **Hosting Target**: `deck-editor`
- **Live Site**: https://depoint-deck-editor.web.app

### Workflow Triggers
1. **Production Deployment**
   - Trigger: Push to `main` branch
   - Command: `git push origin main`
   - Deploys to: https://depoint-deck-editor.web.app

2. **Preview Deployment**
   - Trigger: Create Pull Request
   - Creates: Temporary preview URL
   - Expires: After 7 days

3. **Manual Deployment**
   - Trigger: GitHub Actions → Run workflow
   - Location: Actions tab → Deploy to Firebase Hosting → Run workflow

## 🔑 Required Setup (One-Time)

### Step 1: Generate Firebase Token

Run this command in your terminal:

```bash
firebase login:ci
```

Or use the helper script:

```bash
.github/scripts/setup-firebase-token.sh
```

This will:
1. Open your browser for authentication
2. Generate a CI token
3. Display the token in your terminal

**🔐 Copy the token** - you'll need it in the next step.

### Step 2: Add Token to GitHub

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Set values:
   - **Name**: `FIREBASE_TOKEN`
   - **Value**: Paste the token from Step 1
5. Click **Add secret**

### Step 3: Test the Deployment

Push to main branch:

```bash
git add .
git commit -m "Enable automatic Firebase deployment"
git push origin main
```

Watch the deployment:
1. Go to **Actions** tab in GitHub
2. Click on the running workflow
3. Monitor the deployment progress

## 📋 How It Works

### Workflow Steps
1. **Checkout** - Downloads your code
2. **Setup Node.js** - Installs Node.js 20 with npm cache
3. **Install Dependencies** - Runs `npm ci` for clean install
4. **Build Project** - Runs `npm run build` (Vite build)
5. **Install Firebase CLI** - Installs firebase-tools globally
6. **Deploy** - Deploys to Firebase Hosting using CI token

### Build Configuration
- **Builder**: Vite 5.4
- **Node Version**: 20.x
- **Output Directory**: `dist/`
- **Build Command**: `npm run build`
- **Cache**: npm dependencies cached for faster builds

## 🎨 Features

### ✅ Automatic Production Deployment
- Push to `main` → Automatic deployment
- Zero manual intervention
- Build + Deploy in ~2-3 minutes

### ✅ Preview Deployments
- Every Pull Request gets a preview URL
- Test changes before merging
- Automatic cleanup after 7 days

### ✅ Manual Trigger
- Deploy anytime from Actions tab
- Useful for hotfixes or rollbacks

### ✅ Build Optimization
- npm cache for faster installs
- Parallel job execution
- Optimized build artifacts

### ✅ No Service Account Required
- Uses Firebase CI token
- Simpler security model
- Easy to rotate if needed

## 🔧 Customization

### Change Deployment Branch

Edit `.github/workflows/firebase-hosting-deploy.yml`:

```yaml
on:
  push:
    branches:
      - main  # Change to your preferred branch
```

### Add Build Environment Variables

Add secrets or environment variables:

```yaml
- name: Build project
  run: npm run build
  env:
    NODE_ENV: production
    VITE_API_KEY: ${{ secrets.VITE_API_KEY }}
```

### Customize Preview Channel Names

Modify the preview deployment step:

```yaml
- name: Deploy to Firebase Hosting (Preview)
  run: firebase hosting:channel:deploy preview-${{ github.event.pull_request.number }}
```

## 📊 Monitoring

### View Deployment Status

**GitHub Actions Dashboard:**
- URL: https://github.com/YOUR_USERNAME/YOUR_REPO/actions
- Shows: All workflow runs, status, logs

**Firebase Console:**
- URL: https://console.firebase.google.com/project/depoint-project-2024/hosting
- Shows: Deployment history, rollback options

### Add Status Badge

Add to your README.md:

```markdown
![Deploy to Firebase](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/firebase-hosting-deploy.yml/badge.svg)
```

## 🐛 Troubleshooting

### "Invalid Token" Error

**Solution:**
1. Generate new token: `firebase login:ci`
2. Update GitHub secret `FIREBASE_TOKEN`
3. Re-run the workflow

### Build Fails

**Check:**
1. View workflow logs in Actions tab
2. Verify `npm run build` works locally
3. Check for missing environment variables

### Deployment Succeeds but Site Not Updated

**Try:**
1. Clear browser cache
2. Check Firebase Console for deployment status
3. Verify correct hosting target in firebase.json

## 🔗 Quick Links

### Documentation
- [Setup Guide](.github/FIREBASE_DEPLOYMENT_SETUP.md)
- [Command Reference](.github/DEPLOYMENT_COMMANDS.md)
- [Badge Examples](.github/BADGES.md)

### External Resources
- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Firebase CLI Reference](https://firebase.google.com/docs/cli)

### Your Sites
- **Production**: https://depoint-deck-editor.web.app
- **Console**: https://console.firebase.google.com/project/depoint-project-2024
- **Actions**: https://github.com/YOUR_USERNAME/YOUR_REPO/actions

## 📝 Next Steps

1. ✅ Generate Firebase token: `firebase login:ci`
2. ✅ Add token to GitHub Secrets
3. ✅ Push to main branch
4. ✅ Watch deployment in Actions tab
5. ✅ Visit https://depoint-deck-editor.web.app

## 🎉 Benefits

✅ **No manual deployments** - Push and forget  
✅ **Preview environments** - Test before production  
✅ **Fast builds** - Cached dependencies  
✅ **Easy rollbacks** - One-click in Firebase Console  
✅ **Secure** - Token-based authentication  
✅ **Free** - Firebase & GitHub Actions free tiers  

---

## 🚀 Ready to Deploy!

Everything is configured. Just add your `FIREBASE_TOKEN` to GitHub Secrets and push to main!

```bash
# Generate token
firebase login:ci

# Add to GitHub Secrets, then push
git add .
git commit -m "Deploy to Firebase"
git push origin main
```

Your site will be live at **https://depoint-deck-editor.web.app** in 2-3 minutes! 🎉

