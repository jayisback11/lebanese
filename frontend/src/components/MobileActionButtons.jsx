import { Phone, MapPin, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MobileActionButtons = () => {
  return (
    <div className="fab-container">
      <Button
        asChild
        size="icon"
        className="w-12 h-12 rounded-full bg-[#005A8C] hover:bg-[#004a72] shadow-lg btn-scale"
        data-testid="fab-call"
      >
        <a href="tel:+12256778600">
          <Phone className="w-5 h-5" />
        </a>
      </Button>
      
      <Button
        asChild
        size="icon"
        className="w-12 h-12 rounded-full bg-[#6B8E23] hover:bg-[#5a7a1d] shadow-lg btn-scale"
        data-testid="fab-directions"
      >
        <a 
          href="https://maps.google.com/?q=17316+Airline+Hwy+Prairieville+LA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPin className="w-5 h-5" />
        </a>
      </Button>
      
      <Button
        asChild
        size="icon"
        className="w-12 h-12 rounded-full bg-[#C85A17] hover:bg-[#b04d12] shadow-lg btn-scale"
        data-testid="fab-order"
      >
        <a 
          href="https://places.singleplatform.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <ShoppingBag className="w-5 h-5" />
        </a>
      </Button>
    </div>
  );
};

export default MobileActionButtons;
