import {configureStore} from '@reduxjs/toolkit';
import cartVisibility from './showCart/showCartSlice.js';
 const store = configureStore({
     reducer:{cartVisibility:cartVisibility.reducer}
 });
 export const cartActions = cartVisibility.actions;
 export default store;