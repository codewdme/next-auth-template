import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnalyticsData, DateRange } from "@/types";

const initialState: AnalyticsData = {
  totalRevenue: 45231.89,
  revenueGrowth: 20.1,
  totalOrders: 1234,
  ordersGrowth: 12.5,
  totalCustomers: 3456,
  customersGrowth: 8.2,
  conversionRate: 3.2,
  conversionGrowth: 4.5,
  dateRange: {
    from: "2024-01-01",
    to: "2024-01-31",
  },
  overview: [
    { name: "Jan", total: 1200 },
    { name: "Feb", total: 1500 },
    { name: "Mar", total: 1800 },
    // Add more sample data
  ],
  recentSales: [
    { id: "1", name: "John Doe", email: "john@example.com", amount: 250 },
    { id: "2", name: "Jane Smith", email: "jane@example.com", amount: 350 },
    // Add more sample data
  ],
  salesByCategory: [
    { name: "Electronics", value: 45000, color: "#0ea5e9" },
    { name: "Clothing", value: 32000, color: "#84cc16" },
    { name: "Accessories", value: 28000, color: "#22c55e" },
    // Add more sample data
  ],
  topProducts: [
    {
      id: "1",
      name: "Product A",
      revenue: 28500,
      growth: 12.5,
      imageUrl: "/products/product-a.jpg",
    },
    {
      id: "2",
      name: "Product B",
      revenue: 22000,
      growth: 8.3,
      imageUrl: "/products/product-b.jpg",
    },
    // ... more products
  ],
};

const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    setDateRange: (state, action: PayloadAction<DateRange>) => {
      state.dateRange = action.payload;
    },
    updateOverviewData: (
      state,
      action: PayloadAction<Array<{ date: string; revenue: number }>>
    ) => {
      state.overview = { ...state.overview, ...action.payload };
    },
  },
});

export const { setDateRange, updateOverviewData } = analyticsSlice.actions;
export default analyticsSlice.reducer;
