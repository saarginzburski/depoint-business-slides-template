import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";

import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import DeckOverviewNew from "./pages/DeckOverviewNew";
import SlideViewer from "./pages/SlideViewer";
import PrintableDeck from "./pages/PrintableDeck";
import SharedDeckView from "./pages/SharedDeckView";


const queryClient = new QueryClient();

const App = () => {
  const [isDeckPublished, setIsDeckPublished] = useState(false);

  useEffect(() => {
    const published = localStorage.getItem('isDeckPublished') === 'true';
    setIsDeckPublished(published);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              {/* Public routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/share/:variantId" element={<SharedDeckView />} />
              
              {/* Protected routes - require @depoint.ai authentication */}
              <Route 
                path="/" 
                element={
                  <ProtectedRoute>
                    {isDeckPublished ? <Navigate to="/deck/slide/1" replace /> : <DeckOverviewNew />}
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/overview" 
                element={
                  <ProtectedRoute>
                    <DeckOverviewNew />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/deck/slide/:slideId" 
                element={
                  <ProtectedRoute>
                    <SlideViewer />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/print-deck" 
                element={
                  <ProtectedRoute>
                    <PrintableDeck />
                  </ProtectedRoute>
                } 
              />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
