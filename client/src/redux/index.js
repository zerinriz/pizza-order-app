import dough from "./reducers/dough";
import ingredients from "./reducers/ingredients";
import order from "./reducers/order";
import address from "./reducers/address";
import price from "./reducers/price";
import amount from "./reducers/amount";
import finalorder from "./reducers/finalorder";
import userId from "./reducers/userId"
import finalSum from "./reducers/finalSum"
import { combineReducers } from "redux";

const allReducers = combineReducers({
  dough,
  ingredients,
  order,
  address,
  price,
  amount,
  finalorder,
  userId,
  finalSum,
});

export default allReducers;
