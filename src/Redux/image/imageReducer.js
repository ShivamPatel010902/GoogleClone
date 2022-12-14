import {
    FETCH_IMAGES_REQUEST,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGES_FAILURE,
  } from "./imageTypes";
  
  const initialState = {
    loading: false,
    images: [
      {
        title: "header",
        link: "goto",
        discription: "lorem10",
      },
    ],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_IMAGES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_IMAGES_SUCCESS:
        return {
          loading: false,
          images: action.payload,
          error: "",
        };
      case FETCH_IMAGES_FAILURE:
        return {
          loading: false,
          images: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  