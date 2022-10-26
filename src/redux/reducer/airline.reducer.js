const initialState = {
  airline: [],
  detail: "",
  isLoading: false,
};

const airlineReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_AIRLINE_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_AIRLINE_SUCCESS":
      return {
        ...state,
        airline: action.payload,
        isLoading: false,
      };
    case "GET_AIRLINE_ERROR":
      return {
        ...state,
        isLoading: false,
      };

    case "GET_AIRLINE_DETAIL_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_AIRLINE_DETAIL_SUCCESS":
      return {
        ...state,
        detail: action.payload,
        isLoading: false,
      };
    case "GET_AIRLINE_DETAIL_ERROR":
      return {
        ...state,
        isLoading: false,
      };

    case "ADD_AIRLINE_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "ADD_AIRLINE_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };
    case "ADD_AIRLINE_ERROR":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default airlineReducer;
