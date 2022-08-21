import axios from "axios";
import {
  FETCH_CONTAINS_REQUEST,
  FETCH_CONTAINS_SUCCESS,
  FETCH_CONTAINS_FAILURE,
} from "./containTypes";

export const fetchContains1 = (searchparam) => {
  return (dispatch) => {
    dispatch(fetchContainsRequest());

    axios
      .get(
        `https://google-search3.p.rapidapi.com/api/v1/search/q=${searchparam}&num=10`,
        {
          headers: {
            "X-User-Agent": process.env.REACT_APP_API_AGENT,
            "X-Proxy-Location": process.env.REACT_APP_API_LOCATION,
            "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          },
        }
      )
      .then((response) => {
        const contains = response.data.results;
        dispatch(fetchContainsSuccess(contains));
      })
      .catch((error) => {
        dispatch(fetchContainsFailure(error.message));
      });
  };
};

export const fetchContainsRequest = () => {
  return {
    type: FETCH_CONTAINS_REQUEST,
  };
};

export const fetchContainsSuccess = (contains) => {
  return {
    type: FETCH_CONTAINS_SUCCESS,
    payload: contains,
  };
};

export const fetchContainsFailure = (error) => {
  return {
    type: FETCH_CONTAINS_FAILURE,
    payload: error,
  };
};
