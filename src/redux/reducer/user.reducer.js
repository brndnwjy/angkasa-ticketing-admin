const initialState = {
  user: [],
  detail: "",
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case "GET_USER_ERROR":
      return {
        ...state,
        isLoading: false,
      };

    case "GET_USER_DETAIL_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_USER_DETAIL_SUCCESS":
      return {
        ...state,
        detail: action.payload,
        isLoading: false,
      };
    case "GET_USER_DETAIL_ERROR":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
