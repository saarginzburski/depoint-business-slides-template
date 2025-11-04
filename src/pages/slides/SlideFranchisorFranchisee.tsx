import React from 'react';
import { Eye, RefreshCw, Shield, Coins, Trophy, CheckSquare, DollarSign, Clock, Lock, GraduationCap } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideFranchisorFranchisee = () => {
  return (
    <SlideLayout
      title="One Platform. Two Perspectives. Shared Growth."
      slideNumber="5"
      totalSlides="15"
      logoSrc={depointLogo}
      componentName="SlideFranchisorFranchisee"
    >
      <div className="content-viewport h-full flex flex-col justify-start pb-6">
          
          {/* Main Split Layout */}
          <div className="flex-1 grid grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Franchisor Side */}
            <div className="bg-background rounded-xl p-6 border border-border">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">For the Franchisor</h3>
                <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Eye className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground text-base mb-1">Total Visibility</h4>
                    <p className="text-sm text-muted-foreground">Monitor every store's compliance in real time — no waiting for audits.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <RefreshCw className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground text-base mb-1">Instant Standards Updates</h4>
                    <p className="text-sm text-muted-foreground">Push new ops changes across 1,000+ stores overnight.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground text-base mb-1">Audit Replacement</h4>
                    <p className="text-sm text-muted-foreground">Continuous execution data replaces costly, inconsistent compliance audits.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Coins className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground text-base mb-1">Royalty & Ad Fund Compliance</h4>
                    <p className="text-sm text-muted-foreground">Track financial obligations alongside ops performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Trophy className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground text-base mb-1">Brand Consistency</h4>
                    <p className="text-sm text-muted-foreground">Protect reputation by enforcing Golden Standards across all franchisees.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Franchisee Side */}
            <div className="bg-background rounded-xl p-6 border border-border">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">For the Franchisee</h3>
                <div className="w-16 h-1 bg-secondary mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <CheckSquare className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground text-base mb-1">Simplified Daily Execution</h4>
                    <p className="text-sm text-muted-foreground">A mobile app that guides staff, no training required.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground text-base mb-1">Margin Protection</h4>
                    <p className="text-sm text-muted-foreground">Reduce fines, waste, and shrinkage with automated compliance.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground text-base mb-1">Labor Efficiency</h4>
                    <p className="text-sm text-muted-foreground">Compare staffing costs to revenue in real time to optimize shifts.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Lock className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground text-base mb-1">Data Independence</h4>
                    <p className="text-sm text-muted-foreground">Franchisee data separated from franchisor and other franchisees.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground text-base mb-1">Staff Retention</h4>
                    <p className="text-sm text-muted-foreground">Micro-learning & guided execution reduce turnover and onboarding costs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Anchor */}
          <div className="text-center mt-8">
            <div className="inline-block bg-card rounded-lg px-8 py-4 border border-border shadow-clean-sm">
              <p className="text-lg font-bold text-foreground">
                "A single platform that <span className="text-primary">enforces the brand</span> — and <span className="text-secondary">empowers every operator</span>."
              </p>
            </div>
          </div>
        </div>
      </SlideLayout>
  );
};

export default SlideFranchisorFranchisee;