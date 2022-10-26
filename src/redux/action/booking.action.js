import axios from "axios";

export const getBooking = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_BOOKING_PENDING" });
    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/booking`
    );

    console.log(result.data.data);
    const booking = result.data.data;

    dispatch({ type: "GET_BOOKING_SUCCESS", payload: booking });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_BOOKING_ERROR" });
  }
};

export const getBookingDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_BOOKING_DETAIL_PENDING" });

    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/booking/${id}`
    );

    console.log(result.data.data);
    const booking = result.data.data;

    dispatch({ type: "GET_BOOKING_DETAIL_SUCCESS", payload: booking });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_BOOKING_DETAIL_ERROR" });
  }
};
