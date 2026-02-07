import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, Utensils, Truck, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Menu items data
const featuredItems = [
  {
    id: 1,
    name: "Classic Gyro",
    description: "Tender seasoned lamb & beef, fresh vegetables, tzatziki",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1644364935906-792b2245a2c0?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
    featured: true,
  },
  {
    id: 2,
    name: "Falafel Platter",
    description: "Crispy chickpea fritters, hummus, pita, tahini",
    price: "$11.99",
    image: "https://images.unsplash.com/photo-1606577961562-7e2614b96132?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
    veg: true,
  },
  {
    id: 3,
    name: "Mixed Grill",
    description: "Chicken, lamb, beef kebabs with rice & salad",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1769481614068-47cfb4d1f125?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
    featured: true,
  },
];

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "Best Mediterranean food in Prairieville! The gyros are incredible and the staff is so friendly.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Michael T.",
    rating: 5,
    text: "Authentic flavors that remind me of my travels. The hummus is to die for!",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Emily R.",
    rating: 4,
    text: "Love the cozy atmosphere and the Greek salad is always fresh. Great lunch spot!",
    date: "3 weeks ago",
  },
];

const services = [
  { icon: HomeIcon, label: "Dine-in", desc: "Cozy atmosphere" },
  { icon: Utensils, label: "Takeout", desc: "Ready when you are" },
  { icon: Truck, label: "Delivery", desc: "No-contact available" },
];

export const HomePage = () => {
  return (
    <div className="pt-28 md:pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1736928633626-5c35e5677874?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Mediterranean cuisine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7]/95 via-[#FDFBF7]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-block font-handwritten text-2xl text-[#C85A17] mb-4 animate-fadeInUp">
              Welcome to Albasha
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D3748] leading-tight mb-6 animate-fadeInUp animation-delay-100">
              Taste the Soul of the{" "}
              <span className="text-[#005A8C]">Mediterranean</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4A5568] mb-8 leading-relaxed animate-fadeInUp animation-delay-200">
              Authentic Greek & Lebanese cuisine crafted with love in the heart of Prairieville. 
              Fresh ingredients, family recipes, unforgettable flavors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-300">
              <Button 
                asChild
                className="bg-[#C85A17] hover:bg-[#b04d12] text-white rounded-full px-8 py-6 text-lg font-bold btn-scale shadow-lg"
                data-testid="hero-order-btn"
              >
                <a href="https://places.singleplatform.com" target="_blank" rel="noopener noreferrer">
                  Order Online
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-2 border-[#005A8C] text-[#005A8C] rounded-full px-8 py-6 text-lg font-bold hover:bg-[#005A8C]/5"
                data-testid="hero-menu-btn"
              >
                <Link to="/menu">
                  View Menu
                </Link>
              </Button>
            </div>

            {/* Service badges */}
            <div className="flex flex-wrap gap-3 mt-10 animate-fadeInUp animation-delay-400">
              {services.map((service) => (
                <div 
                  key={service.label}
                  className="service-badge rounded-full px-4 py-2 flex items-center gap-2"
                >
                  <service.icon className="w-4 h-4 text-[#005A8C]" />
                  <span className="text-sm font-medium text-[#2D3748]">{service.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-[#F5F0E6]" data-testid="about-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="font-handwritten text-xl text-[#C85A17] mb-2 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-6">
                A Taste of the Mediterranean in{" "}
                <span className="text-[#005A8C]">Prairieville</span>
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                At Albasha, we bring the rich culinary traditions of Greece and Lebanon to Louisiana. 
                Our recipes have been passed down through generations, using only the freshest ingredients 
                and traditional cooking methods.
              </p>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-8">
                Step inside our warm, art-filled dining room and experience the hospitality that 
                Mediterranean culture is known for. Whether you're joining us for a quick lunch 
                or a leisurely dinner, you're part of our family.
              </p>
              <Button 
                asChild
                className="bg-[#005A8C] hover:bg-[#004a72] text-white rounded-full px-6 py-3 font-bold btn-scale"
                data-testid="about-contact-btn"
              >
                <Link to="/contact">
                  Visit Us Today
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="img-zoom rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]">
                  <img
                    src="https://images.unsplash.com/photo-1758972574715-bcb23a467697?crop=entropy&cs=srgb&fm=jpg&q=85"
                    alt="Albasha restaurant interior"
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#C85A17] text-[#C85A17]" />
                      ))}
                    </div>
                    <span className="font-bold text-[#2D3748] text-lg">4.6</span>
                  </div>
                  <p className="text-sm text-[#4A5568] mt-1">Based on 200+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lunch Special Section */}
      <section className="py-16 md:py-24" data-testid="lunch-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="font-handwritten text-xl text-[#C85A17] mb-2 block">
              Monday - Friday
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-4">
              Weekday Lunch Specials
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">
              Enjoy our delicious lunch combos starting at just $9.99. 
              Quick, fresh, and perfect for your lunch break.
            </p>
          </div>

          <div className="bg-[#005A8C] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-[#C85A17]" />
                  <span className="text-lg">11 AM - 3 PM</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Mediterranean Lunch Combo
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#C85A17] rounded-full" />
                    Choose any gyro or wrap
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#C85A17] rounded-full" />
                    Side salad or fries
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#C85A17] rounded-full" />
                    Fountain drink
                  </li>
                </ul>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-white/70 line-through">$14.99</span>
                </div>
                <Button 
                  asChild
                  className="bg-[#C85A17] hover:bg-[#b04d12] text-white rounded-full px-6 py-3 font-bold btn-scale"
                  data-testid="lunch-order-btn"
                >
                  <a href="https://places.singleplatform.com" target="_blank" rel="noopener noreferrer">
                    Order Now
                  </a>
                </Button>
              </div>
              <div className="hidden md:block">
                <div className="img-zoom rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1644364935906-792b2245a2c0?crop=entropy&cs=srgb&fm=jpg&q=85"
                    alt="Lunch special"
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16 md:py-24 bg-[#F5F0E6]" data-testid="featured-menu-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <span className="font-handwritten text-xl text-[#C85A17] mb-2 block">
                Chef's Selection
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748]">
                Featured Dishes
              </h2>
            </div>
            <Button 
              asChild
              variant="outline"
              className="border-2 border-[#005A8C] text-[#005A8C] rounded-full px-6 py-3 font-bold hover:bg-[#005A8C]/5"
              data-testid="view-full-menu-btn"
            >
              <Link to="/menu">
                View Full Menu
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <Card 
                key={item.id} 
                className="menu-card bg-white/80 backdrop-blur-sm border-stone-200/50 rounded-2xl overflow-hidden"
                data-testid={`featured-item-${item.id}`}
              >
                <div className="img-zoom h-48 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {item.featured && (
                    <span className="absolute top-3 left-3 bg-[#C85A17] text-white text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  {item.veg && (
                    <span className="absolute top-3 right-3 bg-[#6B8E23] text-white text-xs font-bold px-3 py-1 rounded-full">
                      Vegetarian
                    </span>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[#2D3748]">{item.name}</h3>
                    <span className="price-tag text-lg">{item.price}</span>
                  </div>
                  <p className="text-[#4A5568] text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24" data-testid="reviews-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="font-handwritten text-xl text-[#C85A17] mb-2 block">
              What People Say
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-4">
              Customer Reviews
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-6 h-6 ${i < 4.6 ? 'fill-[#C85A17] text-[#C85A17]' : 'fill-[#C85A17]/50 text-[#C85A17]/50'}`} 
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-[#2D3748]">4.6</span>
              <span className="text-[#4A5568]">out of 5</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card 
                key={review.id} 
                className="review-card border-stone-200/50 rounded-2xl p-6"
                data-testid={`review-${review.id}`}
              >
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C85A17] text-[#C85A17]" />
                  ))}
                </div>
                <p className="text-[#4A5568] mb-4 leading-relaxed">"{review.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#2D3748]">{review.name}</span>
                  <span className="text-sm text-[#718096]">{review.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#F5F0E6]" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-6">
            Ready to Experience Authentic{" "}
            <span className="text-[#005A8C]">Mediterranean Cuisine</span>?
          </h2>
          <p className="text-lg text-[#4A5568] mb-8">
            Whether you're craving a quick gyro or planning a family feast, 
            we've got you covered. Order online or visit us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-[#C85A17] hover:bg-[#b04d12] text-white rounded-full px-8 py-6 text-lg font-bold btn-scale shadow-lg"
              data-testid="cta-order-btn"
            >
              <a href="https://places.singleplatform.com" target="_blank" rel="noopener noreferrer">
                Order Online Now
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-2 border-[#005A8C] text-[#005A8C] rounded-full px-8 py-6 text-lg font-bold hover:bg-[#005A8C]/5"
              data-testid="cta-directions-btn"
            >
              <a 
                href="https://maps.google.com/?q=17316+Airline+Hwy+Prairieville+LA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
