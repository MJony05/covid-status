import { applyMiddleware, createStore } from "redux";
import { reducers, initialState } from "./reducers/reducers";
import thunk from "redux-thunk";
export const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk)
);
