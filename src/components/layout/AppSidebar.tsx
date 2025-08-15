import { NavLink, useLocation } from "react-router-dom";
import {
  Package,
  Plus,
  Search,
  BarChart3,
  Clock,
  Settings,
  Truck,
  Shield,
  MessageSquare
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
  { title: "Book Delivery", url: "/book", icon: Plus },
  { title: "Track Packages", url: "/track", icon: Search },
  { title: "Delivery History", url: "/history", icon: Clock },
];

const serviceItems = [
  { title: "Fleet Management", url: "/fleet", icon: Truck },
  { title: "Insurance", url: "/insurance", icon: Shield },
  { title: "Messages", url: "/messages", icon: MessageSquare },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium shadow-sm" 
      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"}>
      <SidebarContent className="bg-sidebar border-r border-sidebar-border">
        {/* Logo Section */}
        <div className="p-4 border-b border-sidebar-border/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sidebar-accent rounded-lg">
              <Package className="h-5 w-5 text-sidebar-accent-foreground" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="text-lg font-bold text-sidebar-foreground">DeliveryPro</h2>
                <p className="text-xs text-sidebar-foreground/70">Management System</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60 text-xs font-medium px-4 py-2">
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 px-2">
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {!collapsed && <span className="ml-2">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Services Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60 text-xs font-medium px-4 py-2">
            Services
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 px-2">
              {serviceItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink 
                      to={item.url} 
                      className={getNavCls}
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {!collapsed && <span className="ml-2">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings */}
        <div className="mt-auto p-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="w-full">
                <NavLink 
                  to="/settings" 
                  className={getNavCls}
                >
                  <Settings className="h-4 w-4 shrink-0" />
                  {!collapsed && <span className="ml-2">Settings</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}