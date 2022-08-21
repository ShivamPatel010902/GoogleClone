import {
    FETCH_VIDEOS_REQUEST,
    FETCH_VIDEOS_SUCCESS,
    FETCH_VIDEOS_FAILURE,
  } from "./videoTypes";
  
  const initialState = {
    loading: false,
    videos: [
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
      case FETCH_VIDEOS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_VIDEOS_SUCCESS:
        return {
          loading: false,
          videos: action.payload,
          error: "",
        };
      case FETCH_VIDEOS_FAILURE:
        return {
          loading: false,
          contains: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  