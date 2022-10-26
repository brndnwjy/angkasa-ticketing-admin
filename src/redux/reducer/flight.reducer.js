const initialState = {
    flight: [],
    detail: "",
    isLoading: false,
  };
  
  const flightReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_FLIGHT_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_FLIGHT_SUCCESS":
        return {
          ...state,
          flight: action.payload,
          isLoading: false,
        };
      case "GET_FLIGHT_ERROR":
        return {
          ...state,
          isLoading: false,
        };
  
      case "GET_FLIGHT_DETAIL_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_FLIGHT_DETAIL_SUCCESS":
        return {
          ...state,
          detail: action.payload,
          isLoading: false,
        };
      case "GET_FLIGHT_DETAIL_ERROR":
        return {
          ...state,
          isLoading: false,
        };
  
      case "ADD_FLIGHT_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "ADD_FLIGHT_SUCCESS":
        return {
          ...state,
          isLoading: false,
        };
      case "ADD_FLIGHT_ERROR":
        return {
          ...state,
          isLoading: false,
        };

        case "DELETE_FLIGHT_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "DELETE_FLIGHT_SUCCESS":
        return {
          ...state,
          flight: action.payload,
          isLoading: false,
        };
      case "DELETE_FLIGHT_ERROR":
        return {
          ...state,
          isLoading: false,
        };
  
      default:
        return state;
    }
  };
  
  export default flightReducer;
  