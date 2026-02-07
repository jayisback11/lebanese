import { useState } from "react";
import { Phone, MapPin, Clock, Mail, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    eventType: "",
    guestCount: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/catering-inquiry`, formData);
      toast.success("Thank you! We'll be in touch soon about your catering request.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        eventType: "",
        guestCount: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please call us directly at (225) 677-8600.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 md:pt-32 pb-16 min-h-screen">
      {/* Hero */}
      <section className="bg-[#005A8C] py-16 md:py-20" data-testid="contact-hero">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <span className="font-handwritten text-2xl text-[#C85A17] mb-2 block">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Questions, catering inquiries, or just want to say hello? 
            We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="bg-white/80 backdrop-blur-sm border-stone-200/50 rounded-2xl">
                <CardContent className="p-6">
                  <a 
                    href="tel:+12256778600" 
                    className="flex items-center gap-4 group"
                    data-testid="contact-phone-card"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#005A8C]/10 flex items-center justify-center group-hover:bg-[#005A8C]/20 transition-colors">
                      <Phone className="w-5 h-5 text-[#005A8C]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#4A5568]">Call Us</p>
                      <p className="font-bold text-[#2D3748]">(225) 677-8600</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-stone-200/50 rounded-2xl">
                <CardContent className="p-6">
                  <a 
                    href="https://maps.google.com/?q=17316+Airline+Hwy+Prairieville+LA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                    data-testid="contact-directions-card"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center group-hover:bg-[#6B8E23]/20 transition-colors">
                      <MapPin className="w-5 h-5 text-[#6B8E23]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#4A5568]">Get Directions</p>
                      <p className="font-bold text-[#2D3748]">View Map</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <Card className="bg-white/80 backdrop-blur-sm border-stone-200/50 rounded-2xl overflow-hidden">
              <div className="h-[300px] md:h-[350px]" data-testid="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.6047!2d-90.9691!3d30.3035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86268e3b0e!2s17316%20Airline%20Hwy%2C%20Prairieville%2C%20LA%2070769!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Albasha Greek & Lebanese Location"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#005A8C] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#2D3748]">Albasha Greek & Lebanese</p>
                    <p className="text-[#4A5568]">17316 Airline Hwy</p>
                    <p className="text-[#4A5568]">Prairieville, LA 70769</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="bg-white/80 backdrop-blur-sm border-stone-200/50 rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-[#2D3748]">
                  <Clock className="w-5 h-5 text-[#005A8C]" />
                  Hours of Operation
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                    <span className="text-[#4A5568]">Monday - Thursday</span>
                    <span className="font-medium text-[#2D3748]">11:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                    <span className="text-[#4A5568]">Friday - Saturday</span>
                    <span className="font-medium text-[#2D3748]">11:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#4A5568]">Sunday</span>
                    <span className="font-medium text-[#2D3748]">11:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Catering Form */}
          <div>
            <Card className="bg-white/80 backdrop-blur-sm border-stone-200/50 rounded-2xl">
              <CardHeader>
                <span className="font-handwritten text-xl text-[#C85A17]">Let's Talk</span>
                <CardTitle className="text-2xl text-[#2D3748]">Catering Inquiry</CardTitle>
                <p className="text-[#4A5568]">
                  Planning an event? Let us bring the Mediterranean to you! 
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5" data-testid="catering-form">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="rounded-xl border-stone-200"
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@email.com"
                        className="rounded-xl border-stone-200"
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(225) 555-0123"
                        className="rounded-xl border-stone-200"
                        data-testid="input-phone"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guestCount">Estimated Guests</Label>
                      <Input
                        id="guestCount"
                        name="guestCount"
                        type="number"
                        value={formData.guestCount}
                        onChange={handleChange}
                        placeholder="50"
                        className="rounded-xl border-stone-200"
                        data-testid="input-guest-count"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="eventType">Event Type</Label>
                    <Input
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      placeholder="Birthday, Wedding, Corporate, etc."
                      className="rounded-xl border-stone-200"
                      data-testid="input-event-type"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your event *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Date, location, dietary requirements, special requests..."
                      rows={4}
                      className="rounded-xl border-stone-200 resize-none"
                      data-testid="input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C85A17] hover:bg-[#b04d12] text-white rounded-full py-6 font-bold btn-scale"
                    data-testid="submit-catering-btn"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Inquiry
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-stone-200 text-center">
                  <p className="text-[#4A5568] text-sm mb-3">
                    Prefer to talk directly?
                  </p>
                  <a 
                    href="tel:+12256778600"
                    className="inline-flex items-center gap-2 text-[#005A8C] font-bold hover:text-[#004a72] transition-colors"
                    data-testid="contact-direct-call"
                  >
                    <Phone className="w-4 h-4" />
                    Call (225) 677-8600
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* SEO Keywords Section */}
            <div className="mt-8 p-6 bg-[#F5F0E6] rounded-2xl">
              <h3 className="font-bold text-[#2D3748] mb-3">Why Choose Albasha?</h3>
              <ul className="space-y-2 text-[#4A5568] text-sm">
                <li>• Best Greek food in Prairieville</li>
                <li>• Mediterranean lunch specials daily</li>
                <li>• Greek & Lebanese catering for all events</li>
                <li>• Convenient location on Airline Hwy</li>
                <li>• Family-owned with authentic recipes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
