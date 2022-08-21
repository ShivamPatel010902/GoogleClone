import axios from "axios";
import {
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE,
} from "./videoTypes";

export const fetchVideos1 = (searchparam) => {
  return (dispatch) => {
    dispatch(fetchVideosRequest());

    axios
      .get(
        `https://google-search3.p.rapidapi.com/api/v1/video/q=${searchparam}`,
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
        const videos = response.data.results;
        console.log(videos)
        dispatch(fetchVideosSuccess(videos));
      })
      .catch((error) => {
        dispatch(fetchVideosFailure(error.message));
      });
  };
};
export const fetchVideosRequest = () => {
  return {
    type: FETCH_VIDEOS_REQUEST,
  };
};

export const fetchVideosSuccess = (videos) => {
  return {
    type: FETCH_VIDEOS_SUCCESS,
    payload: videos,
  };
};

export const fetchVideosFailure = (error) => {
  return {
    type: FETCH_VIDEOS_FAILURE,
    payload: error,
  };
};
