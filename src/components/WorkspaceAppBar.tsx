import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import AuthHeader from '@/components/AuthHeader';

interface WorkspaceAppBarProps {
  title?: string;
  showSearch?: boolean;
  breadcrumbs?: { label: string; href?: string }[];
}

const WorkspaceAppBar: React.FC<WorkspaceAppBarProps> = ({
  title = 'Depoint Templates',
  showSearch = false,
  breadcrumbs = [],
}) => {
  return (
    <header className="surface elevation-1 border-b border-neutral-100 sticky top-0 z-50">
      <div className="flex items-center h-16 px-6 gap-4">
        {/* Left Section - Logo & Title */}
        <Link 
          to="/overview" 
          className="flex items-center gap-3 hover-bg rounded-lg px-3 py-2 -ml-3 transition-standard group"
        >
          <img 
            src={depointLogo} 
            alt="Depoint" 
            className="h-8 w-auto transition-transform group-hover:scale-105"
          />
          <div className="flex items-center gap-2">
            <span className="text-title-large text-neutral-900 font-normal">
              {title}
            </span>
          </div>
        </Link>

        {/* Center Section - Breadcrumbs or Search */}
        <div className="flex-1 flex items-center justify-center max-w-2xl mx-auto">
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-body-small text-neutral-600">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span>/</span>}
                  {crumb.href ? (
                    <Link
                      to={crumb.href}
                      className="hover:text-primary transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-neutral-900 font-medium">
                      {crumb.label}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
          
          {showSearch && breadcrumbs.length === 0 && (
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <Input
                type="search"
                placeholder="Search templates..."
                className="w-full pl-10 bg-neutral-100 border-0 focus-visible:ring-1 focus-visible:ring-primary rounded-full h-10"
              />
            </div>
          )}
        </div>

        {/* Right Section - Actions & Profile */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hover-bg rounded-full w-10 h-10"
            title="Help"
          >
            <HelpCircle className="h-5 w-5 text-neutral-600" />
          </Button>
          
          <div className="ml-2">
            <AuthHeader />
          </div>
        </div>
      </div>
    </header>
  );
};

export default WorkspaceAppBar;

