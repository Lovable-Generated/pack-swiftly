import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Package, 
  MapPin, 
  Clock, 
  CheckCircle,
  Truck,
  User,
  Phone
} from "lucide-react";

// Mock tracking data
const trackingData = {
  "DEL-001": {
    id: "DEL-001",
    status: "delivered",
    recipient: "John Smith",
    phone: "+1 (555) 123-4567",
    deliveryAddress: "123 Main St, Downtown, NY 10001",
    pickupAddress: "456 Business Ave, Midtown, NY 10002",
    estimatedDelivery: "Dec 15, 2024 - 3:00 PM",
    actualDelivery: "Dec 15, 2024 - 2:45 PM",
    timeline: [
      {
        status: "Package collected",
        time: "Dec 15, 2024 - 9:30 AM",
        location: "456 Business Ave, Midtown",
        completed: true
      },
      {
        status: "In transit",
        time: "Dec 15, 2024 - 10:15 AM", 
        location: "Distribution Center",
        completed: true
      },
      {
        status: "Out for delivery",
        time: "Dec 15, 2024 - 1:20 PM",
        location: "Local delivery vehicle",
        completed: true
      },
      {
        status: "Delivered",
        time: "Dec 15, 2024 - 2:45 PM",
        location: "123 Main St, Downtown",
        completed: true
      }
    ]
  },
  "DEL-002": {
    id: "DEL-002", 
    status: "in-transit",
    recipient: "Sarah Johnson",
    phone: "+1 (555) 987-6543",
    deliveryAddress: "456 Oak Ave, Uptown, NY 10003",
    pickupAddress: "789 Corporate Blvd, Business District, NY 10004",
    estimatedDelivery: "Dec 16, 2024 - 4:30 PM",
    actualDelivery: null,
    timeline: [
      {
        status: "Package collected",
        time: "Dec 16, 2024 - 8:45 AM",
        location: "789 Corporate Blvd, Business District", 
        completed: true
      },
      {
        status: "In transit",
        time: "Dec 16, 2024 - 9:30 AM",
        location: "Distribution Center",
        completed: true
      },
      {
        status: "Out for delivery",
        time: "Expected: 3:00 PM",
        location: "Local delivery vehicle",
        completed: false
      },
      {
        status: "Delivered",
        time: "Expected: 4:30 PM",
        location: "456 Oak Ave, Uptown",
        completed: false
      }
    ]
  }
};

export default function TrackPackage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!trackingNumber.trim()) return;
    
    setIsSearching(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const result = trackingData[trackingNumber as keyof typeof trackingData];
      setSearchResult(result || null);
      setIsSearching(false);
    }, 1000);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return <Badge className="bg-success text-success-foreground">Delivered</Badge>;
      case "in-transit":
        return <Badge className="bg-warning text-warning-foreground">In Transit</Badge>;
      case "collected":
        return <Badge className="bg-primary text-primary-foreground">Collected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Track Package</h1>
        <p className="text-muted-foreground">Enter your tracking number to see delivery status</p>
      </div>

      {/* Search Section */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-primary" />
            Package Tracking
          </CardTitle>
          <CardDescription>
            Enter your delivery tracking number (e.g., DEL-001, DEL-002)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Input 
              placeholder="Enter tracking number..." 
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-1"
            />
            <Button 
              onClick={handleSearch}
              disabled={isSearching || !trackingNumber.trim()}
              className="bg-gradient-primary shadow-elegant hover:shadow-lg transition-all"
            >
              {isSearching ? "Searching..." : "Track"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Search Results */}
      {searchResult === null && trackingNumber && !isSearching && (
        <Card className="border-destructive/20 bg-destructive/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Package className="h-5 w-5 text-destructive shrink-0" />
              <div>
                <p className="font-medium text-foreground">Package not found</p>
                <p className="text-sm text-muted-foreground">
                  Please check your tracking number and try again.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {searchResult && (
        <div className="space-y-6">
          {/* Package Summary */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  {searchResult.id}
                </CardTitle>
                {getStatusBadge(searchResult.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <User className="h-4 w-4 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">Recipient</p>
                      <p className="text-sm text-muted-foreground">{searchResult.recipient}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">Contact</p>
                      <p className="text-sm text-muted-foreground">{searchResult.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">
                        {searchResult.status === "delivered" ? "Delivered" : "Estimated Delivery"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {searchResult.actualDelivery || searchResult.estimatedDelivery}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">Delivery Address</p>
                      <p className="text-sm text-muted-foreground">{searchResult.deliveryAddress}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tracking Timeline */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                Delivery Timeline
              </CardTitle>
              <CardDescription>
                Real-time tracking updates for your package
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {searchResult.timeline.map((event: any, index: number) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${
                        event.completed ? "bg-success" : "bg-muted border-2 border-primary"
                      }`} />
                      {index < searchResult.timeline.length - 1 && (
                        <div className={`w-0.5 h-8 ${
                          event.completed ? "bg-success" : "bg-muted"
                        }`} />
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className={`font-medium ${
                          event.completed ? "text-foreground" : "text-muted-foreground"
                        }`}>
                          {event.status}
                        </p>
                        {event.completed && (
                          <CheckCircle className="h-4 w-4 text-success" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                      <p className="text-sm text-muted-foreground">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Live Updates */}
          {searchResult.status === "in-transit" && (
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Package in transit</p>
                    <p className="text-sm text-muted-foreground">
                      Your package is on its way! Expected delivery in 2-4 hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Sample Tracking Numbers */}
      <Card className="bg-muted/20">
        <CardContent className="p-4">
          <p className="text-sm font-medium text-foreground mb-2">Try these sample tracking numbers:</p>
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setTrackingNumber("DEL-001")}
            >
              DEL-001 (Delivered)
            </Badge>
            <Badge 
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setTrackingNumber("DEL-002")}
            >
              DEL-002 (In Transit)
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}