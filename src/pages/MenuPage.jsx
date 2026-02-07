import { useState } from "react";
import { ExternalLink, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menuData = {
  appetizers: [
    {
      id: 1,
      name: "Hummus",
      description: "Creamy chickpea dip with tahini, lemon, and olive oil. Served with warm pita.",
      price: "$6.99",
      veg: true,
      image: "https://images.unsplash.com/photo-1606577961562-7e2614b96132?crop=entropy&cs=srgb&fm=jpg&q=85&w=300",
    },
    {
      id: 2,
      name: "Falafel (6 pcs)",
      description: "Crispy fried chickpea patties with herbs and spices. Served with tahini sauce.",
      price: "$7.99",
      veg: true,
      popular: true,
      image: "https://images.unsplash.com/photo-1606577961562-7e2614b96132?crop=entropy&cs=srgb&fm=jpg&q=85&w=300",
    },
    {
      id: 3,
      name: "Baba Ganoush",
      description: "Smoky roasted eggplant dip with tahini and garlic. Served with pita.",
      price: "$7.49",
      veg: true,
    },
    {
      id: 4,
      name: "Grape Leaves",
      description: "Tender grape leaves stuffed with rice, herbs, and lemon. Served cold.",
      price: "$6.99",
      veg: true,
    },
    {
      id: 5,
      name: "Spanakopita",
      description: "Flaky phyllo pastry filled with spinach and feta cheese.",
      price: "$7.99",
      veg: true,
    },
    {
      id: 6,
      name: "Mezze Sampler",
      description: "Hummus, baba ganoush, falafel, and grape leaves with warm pita.",
      price: "$14.99",
      veg: true,
      popular: true,
    },
  ],
  entrees: [
    {
      id: 7,
      name: "Classic Gyro",
      description: "Tender seasoned lamb & beef, tomatoes, onions, and tzatziki in warm pita.",
      price: "$12.99",
      popular: true,
      image: "https://images.unsplash.com/photo-1644364935906-792b2245a2c0?crop=entropy&cs=srgb&fm=jpg&q=85&w=300",
    },
    {
      id: 8,
      name: "Chicken Gyro",
      description: "Grilled chicken, lettuce, tomatoes, onions, and tzatziki in warm pita.",
      price: "$11.99",
    },
    {
      id: 9,
      name: "Falafel Wrap",
      description: "Crispy falafel, hummus, vegetables, and tahini in warm pita.",
      price: "$10.99",
      veg: true,
    },
    {
      id: 10,
      name: "Lamb Platter",
      description: "Grilled lamb chops served with rice pilaf, salad, and pita bread.",
      price: "$19.99",
      popular: true,
      image: "https://images.unsplash.com/photo-1769481614068-47cfb4d1f125?crop=entropy&cs=srgb&fm=jpg&q=85&w=300",
    },
    {
      id: 11,
      name: "Chicken Shawarma Platter",
      description: "Marinated chicken with garlic sauce, rice, and house salad.",
      price: "$15.99",
    },
    {
      id: 12,
      name: "Mixed Grill",
      description: "Combination of lamb, chicken, and beef kebabs with rice and salad.",
      price: "$22.99",
      popular: true,
    },
    {
      id: 13,
      name: "Beef Kebab Platter",
      description: "Grilled beef skewers with vegetables, rice pilaf, and tzatziki.",
      price: "$17.99",
    },
    {
      id: 14,
      name: "Vegetarian Platter",
      description: "Falafel, hummus, baba ganoush, tabouleh, and grape leaves.",
      price: "$14.99",
      veg: true,
    },
  ],
  salads: [
    {
      id: 15,
      name: "Greek Salad",
      description: "Crisp lettuce, tomatoes, cucumbers, olives, feta cheese, and Greek dressing.",
      price: "$9.99",
      veg: true,
      popular: true,
    },
    {
      id: 16,
      name: "Fattoush Salad",
      description: "Mixed greens, vegetables, sumac, and crispy pita chips with lemon dressing.",
      price: "$9.99",
      veg: true,
    },
    {
      id: 17,
      name: "Tabouleh",
      description: "Fresh parsley, bulgur wheat, tomatoes, mint, and lemon-olive oil dressing.",
      price: "$7.99",
      veg: true,
    },
    {
      id: 18,
      name: "Mediterranean Salad",
      description: "Mixed greens, grilled chicken, feta, olives, and house vinaigrette.",
      price: "$12.99",
    },
    {
      id: 19,
      name: "House Salad",
      description: "Fresh mixed greens with tomatoes, cucumbers, and house dressing.",
      price: "$5.99",
      veg: true,
    },
  ],
};

export const MenuPage = () => {
  const [activeTab, setActiveTab] = useState("appetizers");

  const renderMenuItem = (item) => (
    <Card 
      key={item.id} 
      className="menu-card bg-white/80 backdrop-blur-sm border-stone-200/50 rounded-2xl overflow-hidden"
      data-testid={`menu-item-${item.id}`}
    >
      {item.image && (
        <div className="img-zoom h-40 relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          {item.popular && (
            <span className="absolute top-3 left-3 bg-[#C85A17] text-white text-xs font-bold px-3 py-1 rounded-full">
              Popular
            </span>
          )}
        </div>
      )}
      <CardContent className={`p-6 ${!item.image ? 'pt-6' : ''}`}>
        <div className="flex justify-between items-start mb-2 gap-2">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-[#2D3748]">{item.name}</h3>
            {item.veg && (
              <span className="veg-indicator" title="Vegetarian">
                <Leaf className="w-4 h-4" />
              </span>
            )}
          </div>
          <span className="price-tag text-lg whitespace-nowrap">{item.price}</span>
        </div>
        <p className="text-[#4A5568] text-sm">{item.description}</p>
        {item.popular && !item.image && (
          <span className="inline-block mt-3 bg-[#C85A17]/10 text-[#C85A17] text-xs font-bold px-3 py-1 rounded-full">
            Popular Choice
          </span>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="pt-28 md:pt-32 pb-16 min-h-screen">
      {/* Hero */}
      <section className="bg-[#005A8C] py-16 md:py-20" data-testid="menu-hero">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <span className="font-handwritten text-2xl text-[#C85A17] mb-2 block">
            Explore Our
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Menu</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Authentic Greek & Lebanese dishes prepared fresh daily with traditional recipes 
            and the finest ingredients.
          </p>
          <Button 
            asChild
            className="bg-[#C85A17] hover:bg-[#b04d12] text-white rounded-full px-6 py-3 font-bold btn-scale"
            data-testid="menu-order-btn"
          >
            <a 
              href="https://places.singleplatform.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Order Online
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Menu Tabs */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8 md:mb-12">
            <TabsList className="bg-[#F5F0E6] rounded-full p-1 flex-wrap justify-center gap-1">
              <TabsTrigger 
                value="appetizers"
                className="rounded-full px-6 py-3 data-[state=active]:bg-[#005A8C] data-[state=active]:text-white font-medium"
                data-testid="tab-appetizers"
              >
                Appetizers
              </TabsTrigger>
              <TabsTrigger 
                value="entrees"
                className="rounded-full px-6 py-3 data-[state=active]:bg-[#005A8C] data-[state=active]:text-white font-medium"
                data-testid="tab-entrees"
              >
                Entrees
              </TabsTrigger>
              <TabsTrigger 
                value="salads"
                className="rounded-full px-6 py-3 data-[state=active]:bg-[#005A8C] data-[state=active]:text-white font-medium"
                data-testid="tab-salads"
              >
                Salads
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="appetizers" className="mt-0">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D3748] mb-2">Appetizers</h2>
              <p className="text-[#4A5568]">Start your meal with our delicious Mediterranean starters</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData.appetizers.map(renderMenuItem)}
            </div>
          </TabsContent>

          <TabsContent value="entrees" className="mt-0">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D3748] mb-2">Entrees</h2>
              <p className="text-[#4A5568]">Hearty main courses featuring our signature gyros and platters</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData.entrees.map(renderMenuItem)}
            </div>
          </TabsContent>

          <TabsContent value="salads" className="mt-0">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D3748] mb-2">Salads</h2>
              <p className="text-[#4A5568]">Fresh and vibrant salads with authentic Mediterranean flavors</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData.salads.map(renderMenuItem)}
            </div>
          </TabsContent>
        </Tabs>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-[#4A5568]">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-[#6B8E23]" />
            <span>Vegetarian</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#C85A17] text-white text-xs px-2 py-0.5 rounded-full">Popular</span>
            <span>Customer Favorite</span>
          </div>
        </div>

        {/* External menu link */}
        <div className="mt-12 text-center">
          <p className="text-[#4A5568] mb-4">
            View our complete menu with all seasonal specials and beverages
          </p>
          <Button 
            asChild
            variant="outline"
            className="border-2 border-[#005A8C] text-[#005A8C] rounded-full px-6 py-3 font-bold hover:bg-[#005A8C]/5"
            data-testid="full-menu-link"
          >
            <a 
              href="https://places.singleplatform.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View Full Menu on SinglePlatform
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
