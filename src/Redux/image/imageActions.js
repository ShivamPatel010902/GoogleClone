import axios from "axios";
import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
} from "./imageTypes";

export const fetchImages1 = (searchparam) => {
  return (dispatch) => {
    dispatch(fetchImagesRequest());

    axios
      .get(
        `https://google-search3.p.rapidapi.com/api/v1/image/q=${searchparam}&num=40`,
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
        const images = response.data.image_results;
        dispatch(fetchImagesSuccess(images));
      })
      .catch((error) => {
        dispatch(fetchImagesFailure(error.message));
      });
  };
};
export const fetchImagesRequest = () => {
  return {
    type: FETCH_IMAGES_REQUEST,
  };
};

export const fetchImagesSuccess = (images) => {
  return {
    type: FETCH_IMAGES_SUCCESS,
    payload: images,
  };
};

export const fetchImagesFailure = (error) => {
  return {
    type: FETCH_IMAGES_FAILURE,
    payload: error,
  };
};
