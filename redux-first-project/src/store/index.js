// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";
// const store = createStore(counterReducer);
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auths: authSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
