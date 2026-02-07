import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="glass-header fixed top-0 left-0 right-0 z-40">
      {/* Top bar */}
      <div className="bg-[#005A8C] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4 md:gap-6">
            <a 
              href="tel:+12256778600" 
              className="flex items-center gap-1 hover:text-[#C85A17] transition-colors"
              data-testid="header-phone"
            >
              <Phone className="w-3 h-3" />
              <span>(225) 677-8600</span>
            </a>
            <div className="hidden sm:flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Open until 9 PM</span>
            </div>
          </div>
          <a 
            href="https://maps.google.com/?q=17316+Airline+Hwy+Prairieville+LA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#C85A17] transition-colors"
            data-testid="header-directions"
          >
            <MapPin className="w-3 h-3" />
            <span className="hidden sm:inline">17316 Airline Hwy, Prairieville</span>
            <span className="sm:hidden">Directions</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" data-testid="logo-link">
            <div className="w-12 h-12 rounded-full bg-[#005A8C] flex items-center justify-center">
              <span className="text-white font-bold text-xl font-handwritten">A</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#005A8C] tracking-tight">
                Albasha
              </h1>
              <p className="text-xs text-[#4A5568]">Greek & Lebanese</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors hover:text-[#005A8C] ${
                  isActive(link.path) 
                    ? "text-[#005A8C] border-b-2 border-[#C85A17]" 
                    : "text-[#4A5568]"
                }`}
                data-testid={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              asChild
              className="bg-[#C85A17] hover:bg-[#b04d12] text-white rounded-full px-6 btn-scale"
              data-testid="order-online-btn"
            >
              <a href="https://places.singleplatform.com" target="_blank" rel="noopener noreferrer">
                Order Online
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#005A8C]" />
            ) : (
              <Menu className="w-6 h-6 text-[#005A8C]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#e8e4dc]">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium ${
                    isActive(link.path) ? "text-[#005A8C]" : "text-[#4A5568]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                asChild
                className="bg-[#C85A17] hover:bg-[#b04d12] text-white rounded-full mt-2"
                data-testid="mobile-order-btn"
              >
                <a href="https://places.singleplatform.com" target="_blank" rel="noopener noreferrer">
                  Order Online
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
