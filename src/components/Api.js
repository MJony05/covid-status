import axios from "axios";

const options = {
  method: "GET",
  url: "https://covid-19-statistics.p.rapidapi.com/regions",
  headers: {
    "X-RapidAPI-Key": "97416f0647mshd2f9e4b4dce799cp1d2ebbjsn740c380f4aef",
    "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
  },
};

export const getData = async (path) => {
  const options = {
    method: "GET",
    url: "https://covid-19-statistics.p.rapidapi.com/regions",
    headers: {
      "X-RapidAPI-Key": "97416f0647mshd2f9e4b4dce799cp1d2ebbjsn740c380f4aef",
      "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
    },
  };
  const data = axios
    .request(options)
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  return data;
};
