import { Authenticator } from "@prisma/client";
import { Session } from "inspector/promises";
import { Account } from "next-auth";

export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified: string;
  image?: string;
  accounts: Account[];
  sessions: Session[];
  authenticators: Authenticator[];
  password?: string;
  createdAt: string;
  updatedAt: string;
  isStoreOwner?: boolean;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  password?: string;
  customerSegment: CustomerSegment;
  orders: Order[];
  storeBalance: number;
  addresses: ShippingAddress[];
  createdAt: string;
  updatedAt: string;
};

export enum CustomerSegment {
  NEW, //SPENT LESS THAN 10000rs. AND IN LAST 30 DAYS
  LOYAL, //SPENT BETWEEN 10000rs. AND 50000rs. AVERAGE ORDER VALUE OF 5000rs.
  VIP, //SPENT MORE THAN 50000rs. AVERAGE ORDER VALUE OF 20000rs.
  VVIP, //SPENT MORE THAN 100000rs. AVERAGE ORDER VALUE OF 50000rs.
}

export type ShippingAddress = {
  id: string;
  orderId: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  createdAt: Date;
  updatedAt: Date;
  customerId: string;
};

export type Order = {
  id: string;
  customerId: string;
  customer: Customer;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  paymentId: string;
  shippingAddress: ShippingAddress;
  placedAt: Date;
  updatedAt: Date;
  shippingAddressId: string;
};

export type OrderItem = {
  id: string;
  orderId: string;
  order: Order;
  productId: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type Payment = {
  id: string;
  orderId: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  paidAt: Date;
  createdAt: Date;
};

export enum OrderStatus {
  PENDING,
  PROCESSING,
  SHIPPED,
  DELIVERED,
  CANCELED,
  RETURNED,
}

export enum PaymentMethod {
  CREDIT_CARD,
  DEBIT_CARD,
  PAYPAL,
  BANK_TRANSFER,
  CASH_ON_DELIVERY,
}

export enum PaymentStatus {
  PENDING,
  COMPLETED,
  FAILED,
  REFUNDED,
}

export type Product = {
  id: string;
  name: string;
  images: string[];
  status: ProductStatus;
  description: string[];
  price: number;
  currency: Currency;
  stock: number;
  stockAlertQty: number;
  createdAt: Date;
  updatedAt: Date;
};

export enum Currency {
  USD,
  EUR,
  GBP,
  INR,
}

export type Collection = {
  id: string;
  name: string;
  tags: string[];
  description: string;
  products: Product[];
  createdAt: Date;
  updatedAt: Date;
};

export type GiftCard = {
  id: string;
  code: string;
  amount: number;
  currency: Currency;
  createdAt: Date;
  expiresAt: Date;
  redeemedAt: Date;
};

export type Discount = {
  id: string;
  code: string;
  name: string;
  description: string;
  type: DiscountType;
  value: number;
  startDate: Date;
  endDate: Date;
};

export enum DiscountType {
  PERCENTAGE,
  FIXED_AMOUNT,
  FREE_SHIPPING,
  BUY_X_GET_Y,
}

export enum DiscountStatus {
  DRAFT,
  SCHEDULED,
  ACTIVE,
  PAUSED,
  EXPIRED,
  ARCHIVED,
}

export enum EligibilityCriteria {
  ALL,
  NEW_CUSTOMERS,
  RETURNING_CUSTOMERS,
  SPECIFIC_CUSTOMERS,
}

export enum ApplyTo {
  ALL_PRODUCTS,
  SPECIFIC_PRODUCTS,
  SPECIFIC_COLLECTIONS,
}

export enum ProductStatus {
  DRAFT,
  PUBLISHED,
  ARCHIVED,
}
