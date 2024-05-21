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
      state.list = state.list.filter((list) => list.id !== action.payload);
    },
    edit: (state, action) => {
      state.list = state.list.map((list) => {
        if (list.id == action.payload.id) {
          return action.payload;
        }
        return list;
      });
    },
  },
});

export const { add, remove, edit } = accountSlice.actions;
export default accountSlice.reducer;
