import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  signInWithPopup, 
  signOut as firebaseSignOut,
  onAuthStateChanged 
} from 'firebase/auth';
import { auth, googleProvider } from '@/integrations/firebase/client';
import { toast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  isAuthorized: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ALLOWED_DOMAIN = 'depoint.ai';

// Check if user email is from allowed domain
const isAllowedDomain = (email: string | null): boolean => {
  if (!email) return false;
  return email.endsWith(`@${ALLOWED_DOMAIN}`);
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser && isAllowedDomain(firebaseUser.email)) {
        setUser(firebaseUser);
        setIsAuthorized(true);
      } else {
        setUser(null);
        setIsAuthorized(false);
        // If user is signed in but not from allowed domain, sign them out
        if (firebaseUser && !isAllowedDomain(firebaseUser.email)) {
          firebaseSignOut(auth);
          toast({
            title: "Access Denied",
            description: `Only @${ALLOWED_DOMAIN} accounts are allowed.`,
            variant: "destructive",
          });
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      
      // Double-check domain after sign-in
      if (!isAllowedDomain(result.user.email)) {
        await firebaseSignOut(auth);
        toast({
          title: "Access Denied",
          description: `Only @${ALLOWED_DOMAIN} accounts are allowed.`,
          variant: "destructive",
        });
        throw new Error('Unauthorized domain');
      }

      toast({
        title: "Welcome!",
        description: `Signed in as ${result.user.email}`,
      });
    } catch (error: any) {
      console.error('Sign-in error:', error);
      if (error.code === 'auth/popup-closed-by-user') {
        return; // User closed popup, no need to show error
      }
      toast({
        title: "Sign-in Failed",
        description: error.message || "Failed to sign in with Google",
        variant: "destructive",
      });
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      toast({
        title: "Signed Out",
        description: "You have been signed out successfully",
      });
    } catch (error: any) {
      console.error('Sign-out error:', error);
      toast({
        title: "Sign-out Failed",
        description: error.message || "Failed to sign out",
        variant: "destructive",
      });
    }
  };

  const value = {
    user,
    loading,
    signInWithGoogle,
    signOut,
    isAuthorized,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

