import { getData } from "../../components/Api";
export const GET_DATA = "GET_DATA";
export const SELECT = "SELECT";

export const getCountriesAction = () => async (dispatch, setDate) => {
  const data = await getData();
  dispatch({
    type: GET_DATA,
    payload: data.data,
  });
};


