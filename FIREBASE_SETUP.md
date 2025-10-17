# Firebase Setup Guide

## Migration Complete! 🎉

Your application has been successfully migrated from Supabase to Firebase Firestore. Follow the steps below to complete the setup.

---

## Step 1: Configure Firebase Credentials

Open `src/integrations/firebase/client.ts` and replace the placeholder values with your Firebase project configuration:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### How to Get Your Firebase Configuration:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click the gear icon (⚙️) next to "Project Overview"
4. Select "Project settings"
5. Scroll down to "Your apps" section
6. Click on the web app (</>) or create one if needed
7. Copy the configuration object

---

## Step 2: Set Up Firestore Database

### Create Firestore Database:

1. In Firebase Console, go to **Firestore Database**
2. Click "Create database"
3. Choose **Production mode** or **Test mode** (recommended for development)
4. Select a region close to your users
5. Click "Enable"

### Set Up Firestore Security Rules:

Since you opted for **no authentication**, you'll need to configure security rules. 

**For development/testing** (allows all reads/writes):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

**For production** (restrict access as needed):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to everyone
    match /deck_variations/{document} {
      allow read: if true;
      allow write: if request.auth != null; // Only authenticated users can write
    }
    
    match /deck_variation_sections/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /deck_variation_slide_orders/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

---

## Step 3: Initialize Firestore Collections

### 🎉 Good News: Collections Auto-Create!

**Unlike SQL databases, Firestore collections are created automatically** when you first write a document to them. You don't need to create them manually or run migrations!

### Auto-Initialization Built-In ✨

The app includes **automatic initialization** that runs when you start it:

1. Checks if any deck variations exist
2. If none found, creates a "Default Deck" variation
3. Collections are created automatically on first write

This is handled by `src/integrations/firebase/init.ts` and runs in `main.tsx`.

### Collections in Your App

Your app uses three Firestore collections:

#### 1. `deck_variations`
Stores deck variation metadata.

**Fields:**
- `name` (string) - Name of the deck variation
- `is_default` (boolean) - Whether this is the default variation
- `created_at` (string) - ISO timestamp
- `updated_at` (string) - ISO timestamp

#### 2. `deck_variation_sections`
Junction table linking variations to sections.

**Fields:**
- `deck_variation_id` (string) - Reference to deck variation document ID
- `section_id` (string) - ID of the section
- `created_at` (string) - ISO timestamp

#### 3. `deck_variation_slide_orders`
Stores custom slide ordering per variation.

**Fields:**
- `deck_variation_id` (string) - Reference to deck variation document ID
- `slide_id` (number) - Slide ID
- `section_id` (string) - Section ID
- `order_index` (number) - Order position
- `created_at` (string) - ISO timestamp
- `updated_at` (string) - ISO timestamp

### Manual Setup (Optional)

If you prefer to manually create initial data through Firebase Console:

1. Go to Firestore Database
2. Click "Start collection"
3. Collection ID: `deck_variations`
4. Add a document with these fields:
   - name: "Default Deck"
   - is_default: true
   - created_at: (current timestamp as string)
   - updated_at: (current timestamp as string)

**Note:** This is optional - the app will do this automatically on first run!

---

## Step 4: Set Up Firestore Indexes (If Needed)

Firestore may require composite indexes for complex queries. The app uses:

- Query on `deck_variation_slide_orders` with:
  - where `deck_variation_id == X`
  - orderBy `order_index`

If you see an error in the console about missing indexes, Firebase will provide a direct link to create the required index automatically.

---

## Step 5: Test the Application

```bash
npm run dev
```

1. Open your application
2. Try creating a new deck variation
3. Add/remove sections
4. Reorder slides
5. Verify that data persists in Firestore Console

---

## Key Changes Made During Migration

### Files Created:
- `src/integrations/firebase/client.ts` - Firebase configuration
- `src/integrations/firebase/types.ts` - TypeScript types

### Files Updated:
- `package.json` - Replaced `@supabase/supabase-js` with `firebase`
- `src/hooks/useDeckVariations.ts` - Migrated to Firestore API
- `src/hooks/useSlideOrdering.ts` - Migrated to Firestore API
- `src/components/DraggableSlideGrid.tsx` - Migrated to Firestore API
- `src/components/DragDropSlideReorderer.tsx` - Migrated to Firestore API
- `src/pages/SlideViewer.tsx` - Removed unused Supabase import

### Files Deleted:
- `src/integrations/supabase/` - Entire directory
- `supabase/` - Migrations directory (no longer needed)

---

## Differences from Supabase

| Feature | Supabase (PostgreSQL) | Firestore |
|---------|----------------------|-----------|
| ID Generation | `gen_random_uuid()` (server) | Auto-generated by client/server |
| Foreign Keys | Database enforced | Application enforced |
| Triggers | Database triggers | Application logic |
| RLS Policies | Database level | Security rules |
| Transactions | Full ACID | Limited transactions |
| Timestamps | Auto-updated via triggers | Set in application code |

---

## Troubleshooting

### Error: "Firebase: Error (auth/operation-not-allowed)"
- Make sure you've enabled Firestore in your Firebase project

### Error: "Missing or insufficient permissions"
- Check your Firestore Security Rules
- Ensure rules allow the operations you're trying to perform

### Error: "The query requires an index"
- Click the link in the error message to create the index automatically
- Or manually create composite indexes in Firebase Console

### Data not persisting
- Verify Firebase credentials in `client.ts`
- Check browser console for errors
- Verify Firestore rules allow writes

---

## Need Authentication Later?

If you decide to add authentication in the future:

1. Enable Firebase Authentication in your project
2. Add authentication logic to your app
3. Update `src/integrations/firebase/client.ts` to initialize Auth
4. Update Firestore Security Rules to check `request.auth`
5. Store user-specific data with user IDs

---

## Support

For Firebase-specific issues:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
- [Firebase Support](https://firebase.google.com/support)

---

**Next Steps:**
1. ✅ Update Firebase credentials in `src/integrations/firebase/client.ts`
2. ✅ Create Firestore database in Firebase Console
3. ✅ Configure security rules
4. ✅ Test the application
5. ✅ Deploy to production when ready

