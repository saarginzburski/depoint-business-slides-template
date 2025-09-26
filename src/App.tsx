import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import InvestorDeck from "./pages/InvestorDeck";
import ResellersDeck from "./pages/ResellersDeck";
import SlideViewer from "./pages/SlideViewer";
import ResellersSlideViewer from "./pages/ResellersSlideViewer";
import PrintableDeck from "./pages/PrintableDeck";
import InvestorOnePager from "./pages/InvestorOnePager";
import QuoteYarazinSela09092025 from "./pages/QuoteYarazinSela09092025";
import DataRoom from "./pages/DataRoom";
import SalesDeck from "./pages/SalesDeck";
import SalesSlideViewer from "./pages/SalesSlideViewer";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DataRoom />} />
          <Route path="/investor-deck" element={<InvestorDeck />} />
          <Route path="/investor-deck/slide/:slideId" element={<SlideViewer />} />
          <Route path="/resellers-deck" element={<ResellersDeck />} />
          <Route path="/resellers-deck/slide/:slideId" element={<ResellersSlideViewer />} />
          <Route path="/print-deck" element={<PrintableDeck />} />
          <Route path="/one-pager" element={<InvestorOnePager />} />
          <Route path="/quote-yarazin-sela-09092025" element={<QuoteYarazinSela09092025 />} />
          <Route path="/sales-deck" element={<SalesDeck />} />
          <Route path="/sales-deck/slide/:slideId" element={<SalesSlideViewer />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
