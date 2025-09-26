import { CheckCircle, Smartphone, BarChart3, Brain, Settings, TrendingUp } from "lucide-react";
import mcdonaldsLogo from "@/assets/mcdonalds-logo.png";
import jollibeeLogo from "@/assets/jollibee-logo.png";
import depointLogo from "@/assets/depoint-logo.png";
import revenueChart from "@/assets/revenue-chart.png";
import competitiveRadar from "@/assets/competitive-radar.png";

const DepointOnePager = () => {
  return (
    <div className="w-full max-w-[8.5in] mx-auto bg-background text-foreground font-['Inter'] leading-relaxed print:max-w-none print:shadow-none">
      {/* Header Section */}
      <header className="bg-gradient-enterprise text-white px-8 py-12 text-center">
        <h1 className="text-hero font-bold mb-4 leading-tight">
          Built with <span className="text-depoint-yellow font-extrabold">McDonald's</span>. 
          Scaled with <span className="text-jollibee-red font-extrabold">Jollibee</span>. 
          <br />Now Powering the Future of Retail Ops.
        </h1>
        <p className="text-xl font-medium mb-8">
          Thousands of stores live. AI-first. Configurable. Proven.
        </p>
        <div className="flex justify-center items-center gap-12">
          <img src={mcdonaldsLogo} alt="McDonald's" className="h-16 w-auto" />
          <img src={depointLogo} alt="Depoint" className="h-16 w-auto" />
          <img src={jollibeeLogo} alt="Jollibee" className="h-16 w-auto" />
        </div>
      </header>

      {/* Key Metrics Section */}
      <section className="grid grid-cols-4 gap-6 px-8 py-8 bg-white">
        <div className="bg-card p-6 rounded-xl shadow-card text-center border border-border">
          <div className="text-2xl font-bold text-primary mb-2">$1.6M ARR</div>
          <div className="flex items-center justify-center gap-2 text-success-green text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            92% YoY Growth
          </div>
        </div>
        <div className="bg-card p-6 rounded-xl shadow-card text-center border border-border">
          <div className="text-2xl font-bold text-primary mb-2">15 Employees</div>
          <div className="text-sm text-muted-foreground font-medium">Break-even, Efficient</div>
        </div>
        <div className="bg-card p-6 rounded-xl shadow-card text-center border border-border">
          <div className="text-2xl font-bold text-primary mb-2">1,500+ Stores</div>
          <div className="text-sm text-muted-foreground font-medium">Live across McDonald's and Jollibee</div>
        </div>
        <div className="bg-card p-6 rounded-xl shadow-card text-center border border-border">
          <div className="text-2xl font-bold text-primary mb-2">$5M Raise</div>
          <div className="text-sm text-muted-foreground font-medium">Enterprise GTM, AI, and Global Expansion</div>
        </div>
      </section>

      {/* What We Are Section */}
      <section className="px-8 py-8 bg-card">
        <h2 className="text-title font-bold text-primary mb-6 text-center">
          Enterprise Operations Intelligence — Real-Time. AI-Powered. Fully Embedded.
        </h2>
        <div className="grid grid-cols-2 gap-8 text-body">
          <p className="leading-relaxed">
            Depoint replaces outdated, fragmented operations tools with a fully embedded, 
            AI-first platform for global restaurant and retail chains.
          </p>
          <p className="leading-relaxed font-medium">
            Built like SAP. Simple like WhatsApp. Loved by ops and IT.
          </p>
        </div>
      </section>

      {/* Platform Capabilities Section */}
      <section className="px-8 py-8 bg-white">
        <h2 className="text-title font-bold text-primary mb-8 text-center">Platform Capabilities</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-depoint-blue text-white p-3 rounded-lg">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-body font-medium">Mobile-First Execution</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-depoint-blue text-white p-3 rounded-lg">
                <BarChart3 className="w-6 h-6" />
              </div>
              <span className="text-body font-medium">Real-Time Dashboards</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-depoint-blue text-white p-3 rounded-lg">
                <Brain className="w-6 h-6" />
              </div>
              <span className="text-body font-medium">AI-Powered Predictive Insights</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-depoint-blue text-white p-3 rounded-lg">
                <Settings className="w-6 h-6" />
              </div>
              <span className="text-body font-medium">Enterprise Configurability</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-gradient-enterprise rounded-xl p-8 text-white text-center">
              <div className="text-6xl font-bold mb-2">50%</div>
              <div className="text-lg">Faster Task Completion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Traction Visual Section */}
      <section className="px-8 py-8 bg-card">
        <h2 className="text-title font-bold text-primary mb-6 text-center">Revenue Growth Trajectory</h2>
        <div className="flex justify-center">
          <img src={revenueChart} alt="Revenue Growth Chart" className="max-w-2xl w-full h-auto" />
        </div>
      </section>

      {/* Customer Validation Section */}
      <section className="px-8 py-8 bg-white">
        <h2 className="text-title font-bold text-primary mb-8 text-center">Customer Validation</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-card">
              <img src={mcdonaldsLogo} alt="McDonald's" className="h-12 w-auto" />
              <div>
                <div className="font-bold text-depoint-blue">260 stores</div>
                <div className="text-sm text-muted-foreground">10-year deal, strategic investor</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-card">
              <img src={jollibeeLogo} alt="Jollibee" className="h-12 w-auto" />
              <div>
                <div className="font-bold text-jollibee-red">1,300 stores</div>
                <div className="text-sm text-muted-foreground">100+ franchisees</div>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-card border-l-4 border-depoint-blue">
            <blockquote className="text-body italic leading-relaxed mb-4">
              "We decided to invest in Depoint because we believe that Depoint technology 
              will optimize how we deliver operational instructions..."
            </blockquote>
            <cite className="text-sm font-medium text-enterprise-gray">
              — Lior Hamisha, Head of Commercial, McDonald's Israel
            </cite>
          </div>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section className="px-8 py-8 bg-card">
        <h2 className="text-title font-bold text-primary mb-6 text-center">Why We Win</h2>
        <div className="flex justify-center mb-4">
          <img src={competitiveRadar} alt="Competitive Advantage Radar" className="max-w-md w-full h-auto" />
        </div>
        <p className="text-center text-body font-medium text-enterprise-gray">
          Only Depoint delivers the full suite of features: AI, Real-Time Ops, and Enterprise Configurability.
        </p>
      </section>

      {/* Strategic Positioning Section */}
      <section className="px-8 py-8 bg-white">
        <h2 className="text-title font-bold text-primary mb-8 text-center">Strategic Positioning</h2>
        <div className="grid grid-cols-2 gap-8 items-center">
          <div className="text-center">
            <h3 className="text-subtitle font-bold mb-6 text-enterprise-gray">Natural Strategic Acquirers</h3>
            <div className="space-y-4">
              <div className="p-4 bg-card rounded-lg shadow-card border border-border opacity-75">
                <div className="font-bold text-lg">SAP</div>
                <div className="text-sm text-muted-foreground">Enterprise Software</div>
              </div>
              <div className="p-4 bg-card rounded-lg shadow-card border border-border opacity-75">
                <div className="font-bold text-lg">ServiceNow</div>
                <div className="text-sm text-muted-foreground">Workflow Automation</div>
              </div>
              <div className="p-4 bg-card rounded-lg shadow-card border border-border opacity-75">
                <div className="font-bold text-lg">Toast</div>
                <div className="text-sm text-muted-foreground">Restaurant Tech</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-subtitle font-bold mb-6 text-primary">Strategic Acquisition Trajectory</h3>
            <div className="bg-gradient-enterprise text-white p-8 rounded-xl">
              <div className="flex items-center justify-center gap-4 mb-4">
                <TrendingUp className="w-8 h-8" />
                <span className="text-2xl font-bold">$500M+</span>
              </div>
              <div className="text-lg font-medium">Target Acquisition Value</div>
              <div className="text-sm opacity-90 mt-2">Reflexis-style exit trajectory</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-gradient-enterprise text-white px-8 py-12 text-center">
        <h2 className="text-title font-bold mb-4">
          We're building the SAP of Store Execution.
        </h2>
        <p className="text-lg mb-6">
          Designed with McDonald's. Trusted by Jollibee. Scaling globally.
        </p>
        <div className="text-body">
          <strong>Contact:</strong> Saar Ginzburski | CEO & Founder<br />
          <a href="mailto:saar@depoint.ai" className="text-depoint-yellow hover:underline">saar@depoint.ai</a> | 
          <a href="https://depoint.ai" className="text-depoint-yellow hover:underline ml-2">depoint.ai</a>
        </div>
      </footer>
    </div>
  );
};

export default DepointOnePager;