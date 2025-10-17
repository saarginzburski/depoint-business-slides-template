import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import { Shield, Chrome } from 'lucide-react';

const Login: React.FC = () => {
  const { signInWithGoogle, loading, isAuthorized } = useAuth();
  const navigate = useNavigate();

  // Redirect to overview if already authenticated
  useEffect(() => {
    if (isAuthorized) {
      navigate('/overview', { replace: true });
    }
  }, [isAuthorized, navigate]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <Card className="w-full max-w-md mx-4 shadow-xl">
        <CardHeader className="space-y-6 text-center pb-8">
          <div className="flex justify-center">
            <img 
              src={depointLogo} 
              alt="Depoint Logo" 
              className="h-12 w-auto"
            />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-3xl font-bold text-gray-900">
              Deck Editor
            </CardTitle>
            <CardDescription className="text-base text-gray-600">
              Business Slides Template Manager
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 pb-8">
          {/* Sign In Button */}
          <Button
            onClick={signInWithGoogle}
            disabled={loading}
            className="w-full h-12 text-base bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            <Chrome className="mr-2 h-5 w-5" />
            {loading ? 'Signing in...' : 'Sign in with Google'}
          </Button>

          {/* Domain Restriction Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
            <Shield className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-900">
              <p className="font-semibold mb-1">Restricted Access</p>
              <p className="text-amber-800">
                Only <span className="font-mono font-semibold">@depoint.ai</span> accounts are authorized to access this application.
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center text-sm text-gray-500">
            <p>Secure authentication powered by Firebase</p>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="absolute bottom-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Depoint. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;

