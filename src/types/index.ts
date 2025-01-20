// Analytics Types
export interface AnalyticsData {
  totalRevenue: number;
  revenueGrowth: number;
  totalOrders: number;
  ordersGrowth: number;
  totalCustomers: number;
  customersGrowth: number;
  conversionRate: number;
  conversionGrowth: number;
  dateRange: DateRange;
  overview: OverviewData[];
  recentSales: SaleData[];
  salesByCategory: CategoryData[];
  topProducts: ProductData[];
}

export interface DateRange {
  from: string;
  to: string;
}

export interface OverviewData {
  name: string;
  total: number;
}

export interface SaleData {
  id: string;
  name: string;
  email: string;
  amount: number;
}

export interface CategoryData {
  name: string;
  value: number;
  color: string;
}

export interface ProductData {
  id: string;
  name: string;
  revenue: number;
  growth: number;
  imageUrl?: string;
}

// Store Settings Types
export interface StoreSettings {
  general: {
    name: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    currency: string;
    timezone: string;
  };
  branding: {
    logo: string;
    favicon: string;
    colors: {
      primary: string;
      secondary: string;
    };
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Payment Settings Types
export interface PaymentSettings {
  methods: PaymentMethod[];
  currencies: string[];
  taxRates: TaxRate[];
  checkout: {
    guestCheckout: boolean;
    termsRequired: boolean;
    orderNotes: boolean;
  };
}

export interface PaymentMethod {
  id: string;
  name: string;
  enabled: boolean;
  default: boolean;
  credentials: Record<string, string>;
}

export interface TaxRate {
  id: string;
  name: string;
  rate: number;
  country: string;
  state?: string;
}

// Shipping Settings Types
export interface ShippingSettings {
  zones: ShippingZone[];
  methods: ShippingMethod[];
  packaging: PackagingOption[];
  freeShipping: {
    enabled: boolean;
    threshold: number;
    eligibleCountries: string[];
  };
}

export interface ShippingZone {
  id: string;
  name: string;
  countries: string[];
  methods: string[];
}

export interface ShippingMethod {
  id: string;
  name: string;
  price: number;
  calculationType: "flat" | "weight" | "price";
  enabled: boolean;
}

export interface PackagingOption {
  id: string;
  name: string;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  maxWeight: number;
}

// Notification Settings Types
export interface NotificationSettings {
  email: {
    enabled: boolean;
    templates: Record<string, string>;
  };
  push: {
    enabled: boolean;
    triggers: string[];
  };
  sms: {
    enabled: boolean;
    templates: Record<string, string>;
  };
  templates: {
    orderConfirmation: string;
    shippingUpdate: string;
  };
}

// Team Settings Types
export interface TeamSettings {
  members: TeamMember[];
  roles: Role[];
  permissions: Permission[];
  security: {
    twoFactorRequired: boolean;
    sessionTimeout: number;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  status: "active" | "inactive";
}

export interface Role {
  id: string;
  name: string;
  permissions: string[];
}

export interface Permission {
  id: string;
  name: string;
  description: string;
}

// Integration Types
export interface IntegrationData {
  available: AvailableIntegration[];
  installed: InstalledIntegration[];
  apiKeys: ApiKey[];
  webhooks: Webhook[];
}

export interface AvailableIntegration {
  id: string;
  name: string;
  description: string;
  icon: string;
  categories: string[];
  featured: boolean;
}

export interface InstalledIntegration {
  id: string;
  name: string;
  status: "active" | "inactive";
  icon: string;
  lastSync: string;
  apiUsage: number;
  connectedAccount: string;
}

export interface ApiKey {
  id: string;
  name: string;
  key: string;
  createdAt: string;
  lastUsed: string;
  permissions: string[];
}

export interface Webhook {
  id: string;
  url: string;
  events: string[];
  active: boolean;
  secret: string;
  createdAt: string;
  lastTriggered?: string;
}

// Profile Types
export interface ProfileData {
  personal: PersonalInfo;
  security: SecuritySettings;
  preferences: UserPreferences;
  activities: ActivityLog[];
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatarUrl?: string;
  bio?: string;
}

export interface SecuritySettings {
  twoFactorEnabled: boolean;
  loginHistory: LoginRecord[];
}

export interface LoginRecord {
  timestamp: string;
  location: string;
  device: string;
  browser: string;
}

export interface UserPreferences {
  language: string;
  timezone: string;
  darkMode: boolean;
  emailNotifications: boolean;
  pushNotifications: boolean;
  marketingEmails: boolean;
}

export interface ActivityLog {
  id: string;
  type: "order" | "settings" | "profile" | "other";
  title: string;
  description: string;
  timestamp: string;
  metadata?: Record<string, unknown>;
}
