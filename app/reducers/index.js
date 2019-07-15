import { combineReducers } from "redux";
import globalReducer from "./global.reducer";
import billingAddressReducer from "./billingAddress.reducer";
export default combineReducers({
  globalReducer,
  billingAddressReducer
});
