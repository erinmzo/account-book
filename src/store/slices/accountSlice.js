import { createSlice } from "@reduxjs/toolkit";
const initialState = { list: [] };
export const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    remove: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    edit: (state, action) => {
      state.list = state.list.map((item) => {
        if (item.id == action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
  },
});

export const { add, remove, edit } = accountSlice.actions;
export default accountSlice.reducer;
