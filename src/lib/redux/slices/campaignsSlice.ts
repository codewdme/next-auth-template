import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Campaign {
  id: string;
  name: string;
  type: string;
  startDate: string;
  endDate: string;
  status: string;
  clicks: number;
  conversions: number;
  roi: string;
  audience?: string;
  budget?: number;
  content?: string;
}

interface CampaignsState {
  campaigns: Campaign[];
  loading: boolean;
  error: string | null;
  selectedCampaigns: string[];
}

const initialState: CampaignsState = {
  campaigns: [
    {
      id: "1",
      name: "Summer Sale 2024",
      type: "email",
      startDate: "2024-06-01",
      endDate: "2024-08-31",
      status: "active",
      clicks: 1234,
      conversions: 123,
      roi: "+15%",
    },
    {
      id: "2",
      name: "New Collection Launch",
      type: "social",
      startDate: "2024-07-01",
      endDate: "2024-07-31",
      status: "draft",
      clicks: 0,
      conversions: 0,
      roi: "0%",
    },
  ],
  loading: false,
  error: null,
  selectedCampaigns: [],
};

const campaignsSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    setCampaigns: (state, action: PayloadAction<Campaign[]>) => {
      state.campaigns = action.payload;
    },
    addCampaign: (state, action: PayloadAction<Campaign>) => {
      state.campaigns.push(action.payload);
    },
    updateCampaign: (state, action: PayloadAction<Campaign>) => {
      const index = state.campaigns.findIndex(
        (c) => c.id === action.payload.id
      );
      if (index !== -1) {
        state.campaigns[index] = action.payload;
      }
    },
    deleteCampaign: (state, action: PayloadAction<string>) => {
      state.campaigns = state.campaigns.filter((c) => c.id !== action.payload);
    },
    setSelectedCampaigns: (state, action: PayloadAction<string[]>) => {
      state.selectedCampaigns = action.payload;
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
  setCampaigns,
  addCampaign,
  updateCampaign,
  deleteCampaign,
  setSelectedCampaigns,
  setLoading,
  setError,
} = campaignsSlice.actions;

export default campaignsSlice.reducer;
