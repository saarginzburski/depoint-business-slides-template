import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, FileText, Printer, Eye } from 'lucide-react';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={depointLogo} alt="Depoint" className="h-8" />
              <div className="h-6 w-px bg-border" />
              <span className="slide-label uppercase tracking-wide text-muted-foreground">
                Investor Materials
              </span>
            </div>
            <div className="slide-label text-muted-foreground">
              Q3 2025 • CONFIDENTIAL
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="slide-h1 mb-4">
            Enterprise Operations Intelligence
          </h1>
          <p className="slide-h3 text-muted-foreground mb-8 max-w-2xl mx-auto">
            Built with McDonald's. Scaled with Jollibee. 
            AI-first operations platform for global retail chains.
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6">
              <div className="slide-data text-depoint-blue mb-2">$12M</div>
              <div className="slide-body text-muted-foreground">ARR Run Rate</div>
            </Card>
            <Card className="p-6">
              <div className="slide-data text-depoint-orange mb-2">1,324</div>
              <div className="slide-body text-muted-foreground">Active Stores</div>
            </Card>
            <Card className="p-6">
              <div className="slide-data text-pillar-margin mb-2">4x</div>
              <div className="slide-body text-muted-foreground">Projected ROI</div>
            </Card>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Investor Deck */}
          <Card className="p-8 hover:shadow-clean-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="slide-h3 mb-2">Investor Deck</h3>
                <p className="slide-body text-muted-foreground mb-4">
                  Complete 15-slide presentation covering market opportunity, 
                  product platform, financial projections, and strategic roadmap.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    onClick={() => navigate('/investor-deck')}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Slides
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/print-deck')}
                  >
                    <Printer className="w-4 h-4 mr-2" />
                    Print Version
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Documentation */}
          <Card className="p-8 hover:shadow-clean-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <FileText className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="slide-h3 mb-2">Technical Details</h3>
                <p className="slide-body text-muted-foreground mb-4">
                  Professional presentation system built for Legal paper printing 
                  (1344×816px). Optimized for both digital viewing and physical distribution.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="slide-label text-muted-foreground mb-1">Format</div>
                    <div className="slide-body">Legal Landscape</div>
                  </div>
                  <div>
                    <div className="slide-label text-muted-foreground mb-1">Resolution</div>
                    <div className="slide-body">1344 × 816px</div>
                  </div>
                  <div>
                    <div className="slide-label text-muted-foreground mb-1">Aspect Ratio</div>
                    <div className="slide-body">1.65:1</div>
                  </div>
                  <div>
                    <div className="slide-label text-muted-foreground mb-1">Print Method</div>
                    <div className="slide-body">1:1 Scaling</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Strategic Pillars */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="slide-h2 text-center mb-8">Strategic Value Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-lg border border-pillar-margin/20 bg-pillar-margin/5">
              <div className="w-8 h-8 bg-pillar-margin rounded mb-3"></div>
              <div className="slide-h3 text-pillar-margin mb-2">Protect Margin</div>
              <div className="slide-body text-muted-foreground text-sm">
                Reduce waste, optimize inventory, maximize profitability per transaction.
              </div>
            </div>
            <div className="p-6 rounded-lg border border-pillar-risk/20 bg-pillar-risk/5">
              <div className="w-8 h-8 bg-pillar-risk rounded mb-3"></div>
              <div className="slide-h3 text-pillar-risk mb-2">Reduce Risk</div>
              <div className="slide-body text-muted-foreground text-sm">
                Compliance monitoring, audit preparation, regulatory adherence.
              </div>
            </div>
            <div className="p-6 rounded-lg border border-pillar-revenue/20 bg-pillar-revenue/5">
              <div className="w-8 h-8 bg-pillar-revenue rounded mb-3"></div>
              <div className="slide-h3 text-pillar-revenue mb-2">Protect Revenue</div>
              <div className="slide-body text-muted-foreground text-sm">
                Prevent losses, maintain quality standards, ensure consistency.
              </div>
            </div>
            <div className="p-6 rounded-lg border border-pillar-growth/20 bg-pillar-growth/5">
              <div className="w-8 h-8 bg-pillar-growth rounded mb-3"></div>
              <div className="slide-h3 text-pillar-growth mb-2">Accelerate Growth</div>
              <div className="slide-body text-muted-foreground text-sm">
                Scale operations, improve efficiency, enable rapid expansion.
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={depointLogo} alt="Depoint" className="h-6" />
              <div className="slide-label text-muted-foreground">
                © 2024 Depoint - Enterprise Operations Intelligence
              </div>
            </div>
            <div className="slide-label text-muted-foreground uppercase tracking-wide">
              Confidential & Proprietary
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;