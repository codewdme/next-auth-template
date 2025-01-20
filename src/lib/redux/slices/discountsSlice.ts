import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Discount {
  id: string;
  code: string;
  name: string;
  type: string;
  value: string;
  startDate: string;
  endDate: string;
  usageLimit: number;
  usageCount: number;
  status: string;
  minimumOrderValue?: number;
  customerEligibility?: string[];
  applyTo?: string;
  description?: string;
}

interface DiscountsState {
  discounts: Discount[];
  loading: boolean;
  error: string | null;
  selectedDiscounts: string[];
}

const initialState: DiscountsState = {
  discounts: [
    {
      id: "1",
      code: "SUMMER2024",
      name: "Summer Sale",
      type: "percentage",
      value: "20%",
      startDate: "2024-06-01",
      endDate: "2024-08-31",
      usageLimit: 1000,
      usageCount: 150,
      status: "scheduled",
    },
    {
      id: "2",
      code: "WELCOME50",
      name: "New Customer Discount",
      type: "fixed",
      value: "$50",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      usageLimit: 500,
      usageCount: 234,
      status: "active",
    },
  ],
  loading: false,
  error: null,
  selectedDiscounts: [],
};

const discountsSlice = createSlice({
  name: "discounts",
  initialState,
  reducers: {
    setDiscounts: (state, action: PayloadAction<Discount[]>) => {
      state.discounts = action.payload;
    },
    addDiscount: (state, action: PayloadAction<Discount>) => {
      state.discounts.push(action.payload);
    },
    updateDiscount: (state, action: PayloadAction<Discount>) => {
      const index = state.discounts.findIndex(
        (d) => d.id === action.payload.id
      );
      if (index !== -1) {
        state.discounts[index] = action.payload;
      }
    },
    deleteDiscount: (state, action: PayloadAction<string>) => {
      state.discounts = state.discounts.filter((d) => d.id !== action.payload);
    },
    setSelectedDiscounts: (state, action: PayloadAction<string[]>) => {
      state.selectedDiscounts = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setDiscounts,
  addDiscount,
  updateDiscount,
  deleteDiscount,
  setSelectedDiscounts,
  setLoading,
  setError,
} = discountsSlice.actions;

export default discountsSlice.reducer;
