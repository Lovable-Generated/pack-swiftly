import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Package, 
  Shield, 
  Clock, 
  MapPin, 
  Truck, 
  Users, 
  Star,
  CheckCircle,
  Phone,
  Mail
} from "lucide-react";
import { NavLink } from "react-router-dom";
import heroImage from "@/assets/hero-delivery.png";

const features = [
  {
    icon: Package,
    title: "Smart Package Management",
    description: "Handle packages and documents up to 10kg with intelligent routing and real-time tracking."
  },
  {
    icon: Shield,
    title: "Insurance Protection", 
    description: "Optional insurance coverage for your valuable packages against loss or damage."
  },
  {
    icon: Clock,
    title: "Fast Delivery Options",
    description: "Choose from standard, express, or same-day delivery to meet your timeline needs."
  },
  {
    icon: MapPin,
    title: "Real-time Tracking",
    description: "Track your packages from pickup to delivery with live location updates."
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    content: "DeliveryPro has transformed how we handle our daily deliveries. The tracking system is fantastic!",
    rating: 5
  },
  {
    name: "Mike Chen", 
    role: "Operations Manager",
    content: "The insurance options give us peace of mind, and the pricing is transparent and fair.",
    rating: 5
  },
  {
    name: "Lisa Rodriguez",
    role: "Startup Founder",
    content: "Perfect for our small business needs. The interface is intuitive and professional.",
    rating: 5
  }
];

const pricing = [
  {
    name: "Standard",
    price: "$12.99",
    time: "1-2 business days",
    features: ["Real-time tracking", "Proof of delivery", "SMS notifications", "Basic support"]
  },
  {
    name: "Express", 
    price: "$19.99",
    time: "4-6 hours",
    features: ["Priority routing", "Real-time tracking", "Photo verification", "Priority support"],
    popular: true
  },
  {
    name: "Same Day",
    price: "$29.99", 
    time: "2-4 hours",
    features: ["Immediate pickup", "Live GPS tracking", "Direct delivery", "Premium support"]
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Package className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">DeliveryPro</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild variant="ghost">
              <NavLink to="/auth/login">Sign In</NavLink>
            </Button>
            <Button asChild className="bg-gradient-primary shadow-elegant hover:shadow-lg">
              <NavLink to="/auth/signup">Get Started</NavLink>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Professional Delivery Management
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Streamline Your
                  <span className="text-primary block">Local Deliveries</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Professional delivery management for packages under 10kg. Book, track, and manage deliveries with real-time updates and insurance protection.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-primary shadow-elegant hover:shadow-lg">
                  <NavLink to="/auth/signup">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </NavLink>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <NavLink to="/dashboard">
                    View Demo
                  </NavLink>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">99.9%</div>
                  <div className="text-sm text-muted-foreground">Delivery Success</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">2-4hrs</div>
                  <div className="text-sm text-muted-foreground">Average Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20"></div>
              <img 
                src={heroImage} 
                alt="Professional delivery management" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Everything You Need for Delivery Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional tools to manage your delivery operations efficiently and securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card shadow-card border-border/50 hover:shadow-elegant transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the delivery speed that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card key={index} className={`bg-gradient-card shadow-card relative ${
                plan.popular ? 'border-primary shadow-elegant scale-105' : 'border-border/50'
              }`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{plan.price}</div>
                    <CardDescription className="text-sm">{plan.time}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card shadow-card border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ready to Streamline Your Deliveries?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of businesses using DeliveryPro for their delivery management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary shadow-elegant hover:shadow-lg">
                <NavLink to="/auth/signup">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">
                  Contact Sales
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border/50 bg-muted/30 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <Package className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-foreground">DeliveryPro</span>
              </div>
              <p className="text-muted-foreground">
                Professional delivery management for modern businesses.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@deliverypro.com</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><NavLink to="/dashboard" className="hover:text-foreground transition-colors">Demo</NavLink></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 DeliveryPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}