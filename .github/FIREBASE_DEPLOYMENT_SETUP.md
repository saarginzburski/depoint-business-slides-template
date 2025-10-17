# Firebase Automatic Deployment Setup

This repository is configured for automatic deployment to Firebase Hosting using GitHub Actions.

## 🚀 How It Works

### Automatic Deployments
- **Production**: Automatically deploys to `depoint-deck-editor.web.app` when you push to the `main` branch
- **Preview**: Creates a preview channel for Pull Requests (accessible at temporary URLs)
- **Manual**: Can be triggered manually from the GitHub Actions tab

### Deployment Targets
- **Firebase Project**: `depoint-project-2024`
- **Hosting Target**: `deck-editor`
- **Site**: `depoint-deck-editor.web.app`

## ⚙️ Initial Setup

### 1. Generate Firebase CI Token

Run this command in your terminal:

```bash
firebase login:ci
```

This will:
1. Open your browser for authentication
2. Generate a CI token
3. Display the token in your terminal

**Copy the token** - you'll need it in the next step.

### 2. Add Token to GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `FIREBASE_TOKEN`
5. Value: Paste the token from step 1
6. Click **Add secret**

### 3. Test the Deployment

The workflow will automatically run when you:
- Push to the `main` branch
- Create a Pull Request
- Manually trigger it from the Actions tab

## 📋 Workflow Details

### Triggers
- Push to `main` branch → Production deployment
- Pull Request → Preview deployment
- Manual dispatch → Can be triggered anytime

### Build Process
1. Checkout code
2. Setup Node.js 20
3. Install dependencies (`npm ci`)
4. Build project (`npm run build`)
5. Deploy to Firebase Hosting

### Environment
- **Node Version**: 20.x
- **Cache**: npm cache for faster builds
- **Build Output**: `dist/` directory

## 🔧 Customization

### Change Deployment Branch

Edit `.github/workflows/firebase-hosting-deploy.yml`:

```yaml
on:
  push:
    branches:
      - main  # Change this to your branch
```

### Add Environment Variables

Add build-time environment variables:

```yaml
- name: Build project
  run: npm run build
  env:
    NODE_ENV: production
    VITE_CUSTOM_VAR: ${{ secrets.YOUR_SECRET }}
```

### Deploy to Different Site

Update the `target` parameter:

```yaml
run: firebase deploy --only hosting:your-target-name --token "$FIREBASE_TOKEN"
```

## 🐛 Troubleshooting

### Deployment Fails with "Invalid Token"

1. Regenerate token: `firebase login:ci`
2. Update the `FIREBASE_TOKEN` secret in GitHub
3. Re-run the workflow

### Build Fails

Check the workflow logs:
1. Go to **Actions** tab
2. Click on the failed workflow
3. Check the "Build project" step for errors

### Permission Issues

Ensure the Firebase token has the necessary permissions:
- Hosting Admin role on the Firebase project
- Token not expired

## 📊 Monitoring Deployments

### View Deployment Status

1. Go to **Actions** tab in GitHub
2. Click on any workflow run to see details
3. Check the logs for each step

### Firebase Console

1. Open [Firebase Console](https://console.firebase.google.com)
2. Select `depoint-project-2024`
3. Go to **Hosting** → **depoint-deck-editor**
4. View deployment history and rollback if needed

## 🔄 Manual Deployment

If you need to deploy manually:

```bash
# Build the project
npm run build

# Deploy to production
firebase deploy --only hosting:deck-editor

# Deploy to preview channel
firebase hosting:channel:deploy preview --only deck-editor
```

## 📝 Notes

- **No Service Account**: This setup uses Firebase CI tokens instead of service accounts
- **Security**: The token is stored securely in GitHub Secrets
- **Cost**: Firebase Hosting has a generous free tier
- **Cache**: npm dependencies are cached to speed up builds
- **Preview URLs**: Preview deployments expire after 7 days by default

## 🎯 Best Practices

1. **Always test in preview** before merging to main
2. **Monitor build times** and optimize if needed
3. **Keep token secure** - never commit it to the repository
4. **Review deployment logs** regularly
5. **Use Pull Requests** to get automatic preview deployments

## 🔗 Useful Links

- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Firebase CLI Reference](https://firebase.google.com/docs/cli)

