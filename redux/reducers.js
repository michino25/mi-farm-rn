import { combineReducers } from "redux";
import counterReducer from "./slices/counterSlice";
import cartSlice from "./slices/cartSlice";
import categoriesSlice from "./slices/categoriesSlice";
import productsSlice from "./slices/productsSlice";
import searchSlice from "./slices/searchSlice";
import userSlice from "./slices/userSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  products: productsSlice.reducer,
  search: searchSlice.reducer,
  categories: categoriesSlice.reducer,
  users: userSlice.reducer,
  carts: cartSlice.reducer,
});

export default rootReducer;
