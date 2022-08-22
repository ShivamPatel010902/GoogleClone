import axios from "axios";
import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from "./newsTypes";

export const fetchNews1 = (searchparam) => {
  return (dispatch) => {
    dispatch(fetchNewsRequest());

    axios
      .get(
        `https://google-search3.p.rapidapi.com/api/v1/news/q=${searchparam}&num=40`,
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
        const news = response.data.entries;
        console.log(news)
        dispatch(fetchNewsSuccess(news));
      })
      .catch((error) => {
        dispatch(fetchNewsFailure(error.message));
      });
  };
};
export const fetchNewsRequest = () => {
  return {
    type: FETCH_NEWS_REQUEST,
  };
};

export const fetchNewsSuccess = (news) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: news,
  };
};

export const fetchNewsFailure = (error) => {
  return {
    type: FETCH_NEWS_FAILURE,
    payload: error,
  };
};
