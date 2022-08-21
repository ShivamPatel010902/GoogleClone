import {
  FETCH_CONTAINS_REQUEST,
  FETCH_CONTAINS_SUCCESS,
  FETCH_CONTAINS_FAILURE,
} from "./containTypes";

const initialState = {
  loading: false,
  contains: [
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
    case FETCH_CONTAINS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CONTAINS_SUCCESS:
      return {
        loading: false,
        contains: action.payload,
        error: "",
      };
    case FETCH_CONTAINS_FAILURE:
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
