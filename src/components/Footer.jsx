import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#005A8C] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-[#005A8C] font-bold text-lg font-handwritten">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">Albasha</h3>
                <p className="text-xs text-white/70">Greek & Lebanese</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              A Taste of the Mediterranean in Prairieville. Authentic flavors, cozy atmosphere, 
              and family-friendly dining since the heart of Louisiana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-white/80 hover:text-[#C85A17] transition-colors"
                  data-testid="footer-home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu" 
                  className="text-white/80 hover:text-[#C85A17] transition-colors"
                  data-testid="footer-menu"
                >
                  Our Menu
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white/80 hover:text-[#C85A17] transition-colors"
                  data-testid="footer-contact"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://places.singleplatform.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#C85A17] transition-colors"
                  data-testid="footer-order"
                >
                  Order Online
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+12256778600" 
                  className="flex items-center gap-2 text-white/80 hover:text-[#C85A17] transition-colors"
                  data-testid="footer-phone"
                >
                  <Phone className="w-4 h-4" />
                  (225) 677-8600
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com/?q=17316+Airline+Hwy+Prairieville+LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-white/80 hover:text-[#C85A17] transition-colors"
                  data-testid="footer-address"
                >
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>17316 Airline Hwy<br />Prairieville, LA 70769</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Hours</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Mon - Sat: 11AM - 9PM</span>
              </li>
              <li className="ml-6">Sun: 11AM - 8PM</li>
            </ul>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon text-white/80 hover:text-[#C85A17]"
                  data-testid="social-facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon text-white/80 hover:text-[#C85A17]"
                  data-testid="social-instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon text-white/80 hover:text-[#C85A17]"
                  data-testid="social-twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} Albasha Greek & Lebanese. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <span>Dine-in</span>
            <span>•</span>
            <span>Takeout</span>
            <span>•</span>
            <span>Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
