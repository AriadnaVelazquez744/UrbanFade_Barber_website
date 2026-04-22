import { useState } from "react";
import { Menu, X, MapPin, Phone, Clock, Star } from "lucide-react";
import BookingModal from "@/components/BookingModal";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">U</span>
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:inline">
              UrbanFade
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {[
              { label: "Services", id: "services" },
              { label: "Gallery", id: "gallery" },
              { label: "About", id: "about" },
              { label: "Testimonials", id: "testimonials" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-3">
              {[
                { label: "Services", id: "services" },
                { label: "Gallery", id: "gallery" },
                { label: "About", id: "about" },
                { label: "Testimonials", id: "testimonials" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Premium Cuts in
              <span className="block text-primary">Los Angeles</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the art of barbering at UrbanFade. Where precision
              meets style and tradition meets innovation.
            </p>
            <button onClick={() => setIsBookingOpen(true)} className="btn-primary text-lg">Book Your Cut</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Crafted for every style and preference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Classic Haircut",
                description:
                  "Our signature fade with sharp lines and clean edges. Includes wash, cut, and finish.",
                price: "$35",
              },
              {
                title: "Beard Trim",
                description:
                  "Expert beard shaping and trimming with premium beard oil and styling.",
                price: "$25",
              },
              {
                title: "Premium Package",
                description:
                  "The full experience: haircut, beard trim, hot towel treatment, and consultation.",
                price: "$65",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group bg-card border border-border rounded-lg p-8 transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/10"
              >
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-3xl font-bold text-primary">
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-container bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
            <p className="text-lg text-muted-foreground">
              Showcasing precision, style, and artistry
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                src: "/images/barber_working.jpg",
                alt: "Professional barber cutting client's hair with clippers",
                title: "Precision Cut",
              },
              {
                src: "/images/barber_tools.jpg",
                alt: "Barber tools including scissors and comb on wooden surface",
                title: "Premium Tools",
              },
              {
                src: "/images/heircutt1.jpeg",
                alt: "Man with stylish haircut and fade",
                title: "Modern Fade",
              },
              {
                src: "/images/barber_salon.jpg",
                alt: "Modern barber shop interior with chairs and mirror",
                title: "Our Space",
              },
              {
                src: "/images/haircutt2.jpg",
                alt: "Man showing off his fresh haircut with confidence",
                title: "Client Result",
              },
              {
                src: "/images/shaving_machine.jpeg",
                alt: "Electric razor and grooming tools",
                title: "Craftsmanship",
              },
            ].map((image, idx) => (
              <div
                key={idx}
                className="group relative aspect-square rounded-lg overflow-hidden border border-border transition-all hover:border-primary hover:shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-4">
                  <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About UrbanFade
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in the heart of Los Angeles, UrbanFade is more than just
                a barbershop. We're a community space where precision meets
                passion, and every cut tells a story.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our master barbers bring decades of combined experience,
                combining traditional barbering techniques with modern trends.
                We believe in the craft, the conversation, and the confidence
                that comes from looking your best.
              </p>
              <div className="space-y-4">
                {[
                  "Master Barbers with 10+ years experience",
                  "Premium products and techniques",
                  "Welcoming community atmosphere",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "500+", label: "Happy Clients" },
                { number: "15+", label: "Years Combined" },
                { number: "5", label: "Expert Barbers" },
                { number: "4.9", label: "Star Rating" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-container bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real feedback from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marcus",
                text: "Best barber shop in LA. The attention to detail is insane, and the vibe is unmatched. Highly recommend!",
                rating: 5,
              },
              {
                name: "James",
                text: "UrbanFade changed my whole look. The barbers really take time to understand what you want.",
                rating: 5,
              },
              {
                name: "David",
                text: "Been coming here for a year. Consistent quality, great atmosphere, and fair prices. Keep it up!",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Visit us or book your appointment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                label: "Location",
                text: "123 Fashion Ave, Los Angeles, CA 90001",
              },
              {
                icon: Phone,
                label: "Phone",
                text: "(213) 555-FADE",
              },
              {
                icon: Clock,
                label: "Hours",
                text: "Tue-Sun: 10am - 8pm\nMonday: Closed",
              },
            ].map((contact, idx) => {
              const IconComponent = contact.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-primary" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{contact.label}</h3>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {contact.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Call us or visit our shop. Walk-ins welcome, but booking ensures
              your preferred time slot.
            </p>
            <button onClick={() => setIsBookingOpen(true)} className="btn-primary text-lg">Book Your Cut</button>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Footer */}
      <footer className="bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    U
                  </span>
                </div>
                <span className="text-lg font-bold">UrbanFade</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Premium barbering in Los Angeles
              </p>
            </div>

            {[
              {
                title: "Quick Links",
                links: ["Services", "Gallery", "About", "Contact"],
              },
              {
                title: "Hours",
                links: [
                  "Tue-Sun: 10am-8pm",
                  "Monday: Closed",
                  "Holiday Hours",
                  "Book Online",
                ],
              },
              {
                title: "Follow",
                links: ["Instagram", "Facebook", "TikTok", "Twitter"],
              },
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 UrbanFade Barber. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
