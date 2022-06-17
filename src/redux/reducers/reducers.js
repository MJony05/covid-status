import { GET_DATA, SELECT } from "../actions/actions";

export const initialState = { countries: [], name: "" };

export const reducers = (state = initialState, action) => {
  if (action.type === GET_DATA) {
    return {
      countries: action.payload,
      name: "",
    };
  }
  return state;
};
