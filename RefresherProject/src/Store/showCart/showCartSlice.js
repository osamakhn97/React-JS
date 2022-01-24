import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartVisibility",
  initialState: { cartIsVisible: false },
  reducers: {
    setStatus(state) {
        
     state.cartIsVisible=  !state.cartIsVisible;
    },
  },
});

export default cartSlice