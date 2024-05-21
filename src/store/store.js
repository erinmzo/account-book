import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./slices/accountSlice";
import monthSlice from "./slices/monthSlice";

export const store = configureStore({
  reducer: {
    accountList: accountSlice,
    clickedMonth: monthSlice,
  },
});
