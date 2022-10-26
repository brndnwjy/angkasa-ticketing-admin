const initialState = {
  booking: [],
  detail: "",
  isLoading: false,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BOOKING_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_BOOKING_SUCCESS":
      return {
        ...state,
        booking: action.payload,
        isLoading: false,
      };
    case "GET_BOOKING_ERROR":
      return {
        ...state,
        isLoading: false,
      };

    case "GET_BOOKING_DETAIL_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_BOOKING_DETAIL_SUCCESS":
      return {
        ...state,
        detail: action.payload,
        isLoading: false,
      };
    case "GET_BOOKING_DETAIL_ERROR":
      return {
        ...state,
        isLoading: false,
      };

    case "DELETE_BOOKING_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "DELETE_BOOKING_SUCCESS":
      return {
        ...state,
        booking: action.payload,
        isLoading: false,
      };
    case "DELETE_BOOKING_ERROR":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default bookingReducer;
