# Authentication System

This application uses Firebase Authentication with Google Sign-In, restricted to **@depoint.ai** domain only.

## 🔐 Security Features

- **Domain Restriction**: Only users with `@depoint.ai` email addresses can access the application
- **Google OAuth**: Secure authentication through Google
- **Auto Sign-Out**: Users from unauthorized domains are automatically signed out
- **Protected Routes**: All application routes require authentication
- **Persistent Sessions**: Authentication state persists across browser sessions

## 📁 Architecture

### Files Created

1. **`src/integrations/firebase/client.ts`**
   - Firebase Authentication initialization
   - Google Auth Provider with domain restriction (`hd: 'depoint.ai'`)

2. **`src/contexts/AuthContext.tsx`**
   - React Context for authentication state
   - Domain validation logic
   - Sign-in/Sign-out functions
   - `useAuth()` hook for accessing auth state

3. **`src/pages/Login.tsx`**
   - Login page UI
   - Google Sign-In button
   - Domain restriction notice

4. **`src/components/ProtectedRoute.tsx`**
   - Route wrapper for protected pages
   - Redirects unauthorized users to `/login`
   - Shows loading state while checking auth

5. **`src/components/AuthHeader.tsx`**
   - User avatar and email display
   - Sign-out dropdown menu
   - Fixed position in top-right corner

### Updated Files

1. **`src/App.tsx`**
   - Wrapped in `AuthProvider`
   - Added `/login` route
   - All routes wrapped in `ProtectedRoute`

2. **`src/pages/DeckOverview.tsx`**
   - Added `AuthHeader` component

3. **`src/pages/SlideViewer.tsx`**
   - Added `AuthHeader` component

## 🚀 How It Works

### 1. User visits the site
- If not authenticated → Redirect to `/login`
- If authenticated but wrong domain → Sign out + show error
- If authenticated with `@depoint.ai` → Access granted

### 2. Login Process
```
User clicks "Sign in with Google"
  ↓
Google OAuth popup opens
  ↓
User selects/logs in with Google account
  ↓
Domain validation:
  - If @depoint.ai → Success! User signed in
  - If other domain → Error + Auto sign-out
```

### 3. Domain Validation
Two layers of protection:
1. **OAuth Parameter**: `hd: 'depoint.ai'` suggests using depoint.ai account
2. **Post-Login Check**: JavaScript validates email domain and signs out unauthorized users

### 4. Protected Routes
Every route in the app checks:
```tsx
<ProtectedRoute>
  <YourPage />
</ProtectedRoute>
```

If user is not authorized:
- Redirect to `/login`
- User must authenticate with `@depoint.ai` account

## 🔧 Usage

### Using the `useAuth` Hook

```tsx
import { useAuth } from '@/contexts/AuthContext';

function MyComponent() {
  const { user, loading, signInWithGoogle, signOut, isAuthorized } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!isAuthorized) return <div>Not authorized</div>;

  return (
    <div>
      <p>Welcome, {user.email}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
```

### Auth State Properties

- **`user`**: Firebase User object (or null)
- **`loading`**: Boolean - true while checking auth state
- **`isAuthorized`**: Boolean - true if user has @depoint.ai email
- **`signInWithGoogle()`**: Function to trigger Google sign-in
- **`signOut()`**: Function to sign out current user

## 🛡️ Firebase Console Setup

### 1. Enable Google Authentication

1. Go to [Firebase Console](https://console.firebase.google.com/project/depoint-project-2024/authentication)
2. Click "Sign-in method" tab
3. Click "Google" provider
4. Toggle "Enable"
5. Add your support email
6. Save

### 2. Configure Authorized Domains

1. In Authentication → Settings → Authorized domains
2. Add your domains:
   - `localhost` (for development)
   - `depoint-deck-editor.web.app` (for production)
   - `depoint-deck-editor.firebaseapp.com` (alternative)
   - Any custom domains you plan to use

### 3. Optional: Restrict to Workspace (G Suite)

For additional security:
1. In Google Cloud Console
2. Go to APIs & Services → Credentials
3. Find your OAuth client ID
4. Under "Authorized domains", add `depoint.ai`

## 📱 User Experience

### Login Page
- Clean, professional UI
- Depoint logo and branding
- Clear domain restriction notice
- One-click Google sign-in
- Error messages for unauthorized domains

### Authenticated State
- User avatar in top-right corner
- Dropdown shows user name and email
- Sign-out option
- Persistent across page navigation

### Security Messages
- ✅ Success: "Welcome! Signed in as user@depoint.ai"
- ❌ Access Denied: "Only @depoint.ai accounts are allowed"
- ℹ️ Sign Out: "You have been signed out successfully"

## 🔄 Session Management

- **Persistent**: Sessions persist across browser sessions
- **Automatic Refresh**: Firebase handles token refresh
- **Sign Out**: Clears all local session data
- **Unauthorized Detection**: Immediate sign-out for wrong domains

## 🧪 Testing

### Test with authorized domain:
1. Go to `/login`
2. Sign in with `yourname@depoint.ai`
3. Should redirect to `/` with full access

### Test with unauthorized domain:
1. Go to `/login`
2. Try to sign in with `test@gmail.com`
3. Should show error and remain on login page

### Test protected routes:
1. Sign out
2. Try to access `/` or `/overview`
3. Should redirect to `/login`

## 🚨 Troubleshooting

### "Unauthorized domain" error
- Check Firebase Console → Authentication → Settings → Authorized domains
- Add your deployment domain

### Sign-in popup blocked
- Check browser popup blocker
- Allow popups for your domain

### Sign-in successful but access denied
- Verify email ends with `@depoint.ai`
- Check browser console for error messages
- Ensure Firebase Authentication is enabled

### Session not persisting
- Check browser cookies are enabled
- Check for browser extensions blocking Firebase
- Try clearing browser cache

## 🔐 Security Best Practices

✅ **Implemented:**
- Domain restriction at OAuth level
- Post-login domain validation
- Protected routes
- Automatic unauthorized user sign-out
- Secure Firebase configuration

⚠️ **Additional Recommendations:**
- Set up Firestore Security Rules to validate `@depoint.ai` domains
- Implement audit logging for sign-in attempts
- Add rate limiting for authentication attempts
- Set up alerting for failed authentication attempts

## 📊 Firestore Security Rules

Add these rules to restrict database access to authorized users:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Helper function to check if user is from depoint.ai domain
    function isDepointUser() {
      return request.auth != null && 
             request.auth.token.email.matches('.*@depoint\\.ai$');
    }
    
    // Apply to all collections
    match /{document=**} {
      allow read, write: if isDepointUser();
    }
  }
}
```

To apply:
1. Go to Firebase Console → Firestore Database
2. Click "Rules" tab
3. Paste the rules above
4. Click "Publish"

## 🎯 Summary

This authentication system provides:
- ✅ Secure, domain-restricted access
- ✅ Professional user experience
- ✅ Easy integration with existing app
- ✅ Persistent sessions
- ✅ Clear security messaging
- ✅ No configuration needed by end users

Only users with `@depoint.ai` email addresses can access the Deck Editor application.

