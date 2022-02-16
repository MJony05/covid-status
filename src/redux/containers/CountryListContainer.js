import { connect } from "react-redux";

import { getCountriesAction } from "../actions/actions";

import CountryList from "../../components/CountryList";
const getMyState = (state) => {
  return state;
};
const CountryListContainer = connect(getMyState, { getCountriesAction })(
  CountryList
);
export default CountryListContainer;
