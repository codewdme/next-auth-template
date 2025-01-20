import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Automation {
  id: string;
  name: string;
  triggerType: string;
  triggered: number;
  completed: number;
  status: string;
  audience?: string;
  delay?: number;
  content?: string;
}

interface AutomationsState {
  automations: Automation[];
  loading: boolean;
  error: string | null;
  selectedAutomations: string[];
}

const initialState: AutomationsState = {
  automations: [
    {
      id: "1",
      name: "Abandoned Cart Recovery",
      triggerType: "abandoned_cart",
      triggered: 456,
      completed: 89,
      status: "active",
    },
    {
      id: "2",
      name: "Welcome Series",
      triggerType: "welcome",
      triggered: 789,
      completed: 234,
      status: "active",
    },
  ],
  loading: false,
  error: null,
  selectedAutomations: [],
};

const automationsSlice = createSlice({
  name: "automations",
  initialState,
  reducers: {
    setAutomations: (state, action: PayloadAction<Automation[]>) => {
      state.automations = action.payload;
    },
    addAutomation: (state, action: PayloadAction<Automation>) => {
      state.automations.push(action.payload);
    },
    updateAutomation: (state, action: PayloadAction<Automation>) => {
      const index = state.automations.findIndex(
        (a) => a.id === action.payload.id
      );
      if (index !== -1) {
        state.automations[index] = action.payload;
      }
    },
    deleteAutomation: (state, action: PayloadAction<string>) => {
      state.automations = state.automations.filter(
        (a) => a.id !== action.payload
      );
    },
    setSelectedAutomations: (state, action: PayloadAction<string[]>) => {
      state.selectedAutomations = action.payload;
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
  setAutomations,
  addAutomation,
  updateAutomation,
  deleteAutomation,
  setSelectedAutomations,
  setLoading,
  setError,
} = automationsSlice.actions;

export default automationsSlice.reducer;
