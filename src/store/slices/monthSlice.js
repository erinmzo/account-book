import { createSlice } from "@reduxjs/toolkit";
const initialState = { month: 1 };
export const monthSlice = createSlice({
  name: "month",
  initialState: initialState,
  reducers: {
    set: (state, action) => {
      state.month = action.payload;
    },
  },
});

export const { set } = monthSlice.actions;
export default monthSlice.reducer;
