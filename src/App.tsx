import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import BookDelivery from "./pages/BookDelivery";
import TrackPackage from "./pages/TrackPackage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          } />
          <Route path="/book" element={
            <DashboardLayout>
              <BookDelivery />
            </DashboardLayout>
          } />
          <Route path="/track" element={
            <DashboardLayout>
              <TrackPackage />
            </DashboardLayout>
          } />
          <Route path="/history" element={
            <DashboardLayout>
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold mb-4">Delivery History</h2>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/fleet" element={
            <DashboardLayout>
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold mb-4">Fleet Management</h2>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/insurance" element={
            <DashboardLayout>
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold mb-4">Insurance</h2>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/messages" element={
            <DashboardLayout>
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold mb-4">Messages</h2>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/settings" element={
            <DashboardLayout>
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold mb-4">Settings</h2>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
