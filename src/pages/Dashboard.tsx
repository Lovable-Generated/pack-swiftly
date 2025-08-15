import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  Plus, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Truck,
  DollarSign
} from "lucide-react";
import { NavLink } from "react-router-dom";

const stats = [
  {
    title: "Total Deliveries",
    value: "1,247",
    change: "+12%",
    trend: "up",
    icon: Package,
    color: "primary"
  },
  {
    title: "In Transit",
    value: "43",
    change: "+5%",
    trend: "up", 
    icon: Truck,
    color: "warning"
  },
  {
    title: "Delivered Today",
    value: "28",
    change: "+8%",
    trend: "up",
    icon: CheckCircle,
    color: "success"
  },
  {
    title: "Revenue",
    value: "$12,480",
    change: "+15%",
    trend: "up",
    icon: DollarSign,
    color: "primary"
  }
];

const recentDeliveries = [
  {
    id: "DEL-001",
    recipient: "John Smith",
    address: "123 Main St, Downtown",
    status: "delivered",
    time: "2 hours ago"
  },
  {
    id: "DEL-002", 
    recipient: "Sarah Johnson",
    address: "456 Oak Ave, Uptown",
    status: "in-transit",
    time: "4 hours ago"
  },
  {
    id: "DEL-003",
    recipient: "Mike Davis", 
    address: "789 Pine Rd, Suburbs",
    status: "pending",
    time: "6 hours ago"
  },
  {
    id: "DEL-004",
    recipient: "Lisa Brown",
    address: "321 Elm St, City Center", 
    status: "delivered",
    time: "8 hours ago"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "delivered":
      return <Badge className="bg-success text-success-foreground">Delivered</Badge>;
    case "in-transit":
      return <Badge className="bg-warning text-warning-foreground">In Transit</Badge>;
    case "pending":
      return <Badge variant="outline">Pending</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Manage your delivery operations</p>
        </div>
        <Button asChild className="bg-gradient-primary shadow-elegant hover:shadow-lg transition-all">
          <NavLink to="/book">
            <Plus className="h-4 w-4 mr-2" />
            Book Delivery
          </NavLink>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gradient-card shadow-card border-border/50 hover:shadow-elegant transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground/80">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 text-success" />
                <span className="text-success">{stat.change}</span>
                <span>from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Deliveries */}
        <Card className="lg:col-span-2 bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              Recent Deliveries
            </CardTitle>
            <CardDescription>
              Latest delivery updates and status changes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDeliveries.map((delivery) => (
                <div key={delivery.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/30">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{delivery.id}</span>
                      {getStatusBadge(delivery.status)}
                    </div>
                    <p className="text-sm text-foreground">{delivery.recipient}</p>
                    <p className="text-xs text-muted-foreground">{delivery.address}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {delivery.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild variant="outline" className="w-full justify-start">
              <NavLink to="/book">
                <Plus className="h-4 w-4 mr-2" />
                Book New Delivery
              </NavLink>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <NavLink to="/track">
                <Package className="h-4 w-4 mr-2" />
                Track Package
              </NavLink>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <NavLink to="/history">
                <Clock className="h-4 w-4 mr-2" />
                View History
              </NavLink>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <NavLink to="/fleet">
                <Truck className="h-4 w-4 mr-2" />
                Manage Fleet
              </NavLink>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Alert Section */}
      <Card className="border-warning/20 bg-warning/5">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-warning shrink-0" />
            <div>
              <p className="font-medium text-foreground">System Maintenance</p>
              <p className="text-sm text-muted-foreground">
                Scheduled maintenance on Sunday 2:00 AM - 4:00 AM. Some features may be temporarily unavailable.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}