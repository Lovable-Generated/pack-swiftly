import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Package, 
  Clock, 
  DollarSign,
  Shield,
  Calendar,
  Truck
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function BookDelivery() {
  const [insurance, setInsurance] = useState(false);
  const [priority, setPriority] = useState("standard");
  
  const basePricing = {
    standard: 12.99,
    express: 19.99,
    sameday: 29.99
  };

  const estimatedTime = {
    standard: "1-2 business days",
    express: "4-6 hours", 
    sameday: "2-4 hours"
  };

  const currentPrice = basePricing[priority as keyof typeof basePricing];
  const finalPrice = insurance ? currentPrice + 4.99 : currentPrice;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Book Delivery</h1>
        <p className="text-muted-foreground">Schedule a new package delivery or collection</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Booking Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Package Information */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Package Information
              </CardTitle>
              <CardDescription>
                Provide details about your package (max 10kg)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="package-type">Package Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select package type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="document">Document</SelectItem>
                      <SelectItem value="small-package">Small Package</SelectItem>
                      <SelectItem value="fragile">Fragile Item</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input 
                    id="weight" 
                    type="number" 
                    placeholder="0.5" 
                    max="10"
                    step="0.1"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Package Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Brief description of the package contents"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Pickup & Delivery */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Pickup & Delivery
              </CardTitle>
              <CardDescription>
                Enter collection and delivery addresses
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Pickup Address */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <Label className="text-sm font-medium">Pickup Address</Label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4">
                  <Input placeholder="Street address" />
                  <Input placeholder="City" />
                  <Input placeholder="Postal code" />
                  <Input placeholder="Contact name" />
                  <Input placeholder="Phone number" />
                </div>
              </div>

              <Separator />

              {/* Delivery Address */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <Label className="text-sm font-medium">Delivery Address</Label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4">
                  <Input placeholder="Street address" />
                  <Input placeholder="City" />
                  <Input placeholder="Postal code" />
                  <Input placeholder="Recipient name" />
                  <Input placeholder="Phone number" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Options */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Delivery Options
              </CardTitle>
              <CardDescription>
                Choose your preferred delivery speed and options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div 
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    priority === "standard" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setPriority("standard")}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        priority === "standard" ? "border-primary bg-primary" : "border-border"
                      }`} />
                      <div>
                        <p className="font-medium">Standard Delivery</p>
                        <p className="text-sm text-muted-foreground">1-2 business days</p>
                      </div>
                    </div>
                    <Badge variant="outline">${basePricing.standard}</Badge>
                  </div>
                </div>

                <div 
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    priority === "express" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setPriority("express")}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        priority === "express" ? "border-primary bg-primary" : "border-border"
                      }`} />
                      <div>
                        <p className="font-medium">Express Delivery</p>
                        <p className="text-sm text-muted-foreground">4-6 hours</p>
                      </div>
                    </div>
                    <Badge variant="outline">${basePricing.express}</Badge>
                  </div>
                </div>

                <div 
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    priority === "sameday" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setPriority("sameday")}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        priority === "sameday" ? "border-primary bg-primary" : "border-border"
                      }`} />
                      <div>
                        <p className="font-medium">Same Day Delivery</p>
                        <p className="text-sm text-muted-foreground">2-4 hours</p>
                      </div>
                    </div>
                    <Badge variant="outline">${basePricing.sameday}</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-4">
                <Checkbox 
                  id="insurance" 
                  checked={insurance}
                  onCheckedChange={(checked) => setInsurance(checked === true)}
                />
                <Label htmlFor="insurance" className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  Add insurance protection (+$4.99)
                </Label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <Card className="bg-gradient-card shadow-card sticky top-20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery service</span>
                  <span className="font-medium">${currentPrice}</span>
                </div>
                {insurance && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Insurance</span>
                    <span className="font-medium">$4.99</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">${finalPrice}</span>
                </div>
              </div>

              <div className="bg-muted/50 p-3 rounded-lg space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-medium">Estimated delivery:</span>
                </div>
                <p className="text-sm text-muted-foreground ml-6">
                  {estimatedTime[priority as keyof typeof estimatedTime]}
                </p>
              </div>

              <Button className="w-full bg-gradient-primary shadow-elegant hover:shadow-lg transition-all">
                Book Delivery
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                You'll receive a confirmation email with tracking details
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}