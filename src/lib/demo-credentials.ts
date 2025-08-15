export const DEMO_CREDENTIALS = {
  email: "demo@pack-swiftly.com",
  password: "demo123456"
} as const;

export const DEMO_USERS = [
  {
    role: "Admin",
    email: "admin@pack-swiftly.com",
    password: "admin123",
    name: "Admin User"
  },
  {
    role: "Manager", 
    email: "manager@pack-swiftly.com",
    password: "manager123",
    name: "Manager User"
  },
  {
    role: "Driver",
    email: "driver@pack-swiftly.com", 
    password: "driver123",
    name: "Driver User"
  }
] as const;