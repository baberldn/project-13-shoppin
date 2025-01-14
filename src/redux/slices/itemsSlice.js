
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], 
  filteredItems: [], 
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload; 
      state.filteredItems = action.payload; 
    },
    filterByCategory: (state, action) => {
      const category = action.payload;
      state.filteredItems = state.items.filter((item) => item.category === category); 
    },
  },
});

export const { setItems, filterByCategory } = itemsSlice.actions;
export default itemsSlice.reducer;
