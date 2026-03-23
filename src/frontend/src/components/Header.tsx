import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Search, Shield, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate({ to: "/search", search: { q: searchQuery.trim() } });
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card shadow-nav">
      {/* Utility bar */}
      <div className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-end gap-4 py-1.5">
          <span className="text-xs text-muted-foreground cursor-pointer hover:text-primary transition-colors">
            User Account
          </span>
          <span className="text-border">|</span>
          <span className="text-xs text-muted-foreground cursor-pointer hover:text-primary transition-colors">
            Get Help
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            data-ocid="nav.link"
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-extrabold text-navy tracking-tight">
              HealthPedia
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            <Link
              to="/diseases"
              className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent"
              data-ocid="nav.link"
            >
              DISEASES
            </Link>
            <Link
              to="/category/$type"
              params={{ type: "common" }}
              className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent"
              data-ocid="nav.link"
            >
              HEALTH TOPICS
            </Link>
            <Link
              to="/category/$type"
              params={{ type: "serious" }}
              className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent"
              data-ocid="nav.link"
            >
              SERIOUS &amp; RARE
            </Link>
            <Link
              to="/"
              className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent"
              data-ocid="nav.link"
            >
              ABOUT US
            </Link>
          </nav>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="hidden sm:flex items-center gap-2"
          >
            <Input
              type="search"
              placeholder="Search diseases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-44 h-8 text-sm"
              data-ocid="header.search_input"
            />
            <Button
              type="submit"
              size="icon"
              className="h-8 w-8 rounded-full bg-primary hover:bg-primary/90"
              data-ocid="header.submit_button"
            >
              <Search className="w-4 h-4" />
            </Button>
          </form>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden p-2 text-muted-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-border space-y-1">
            <form
              onSubmit={handleSearch}
              className="flex items-center gap-2 mb-3 sm:hidden"
            >
              <Input
                type="search"
                placeholder="Search diseases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-8 text-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="h-8 w-8 rounded-full bg-primary"
              >
                <Search className="w-4 h-4" />
              </Button>
            </form>
            <Link
              to="/diseases"
              className="block px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-primary rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
              data-ocid="nav.link"
            >
              Diseases A-Z
            </Link>
            <Link
              to="/category/$type"
              params={{ type: "common" }}
              className="block px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-primary rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
              data-ocid="nav.link"
            >
              Common Diseases
            </Link>
            <Link
              to="/category/$type"
              params={{ type: "serious" }}
              className="block px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-primary rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
              data-ocid="nav.link"
            >
              Serious &amp; Rare
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
