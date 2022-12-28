import axios from "axios";
import swal from "sweetalert";

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

export const approveBooking = (id, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "APPROVE_BOOKING_PENDING" });

    await axios.put(`${process.env.REACT_APP_API_BACKEND}/booking/${id}`);

    swal({
      title: "Approved!",
      text: `Booking approved`,
      icon: "success",
    });

    navigate("/booking")

    dispatch({ type: "APPROVE_BOOKING_SUCCESS" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "APPROVE_BOOKING_ERROR" });
  }
};

export const cancelBooking = (id, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "CANCEL_BOOKING_PENDING" });

    swal({
      title: "Cancelation",
      text: `Are you sure want to cancel this booking?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (confirm) => {
      if (confirm) {
        await axios.delete(
          `${process.env.REACT_APP_API_BACKEND}/booking/${id}`
        );

        swal({
          title: "Cancelled!",
          text: `Booking cancelled`,
          icon: "success",
        });
        
        navigate("/booking")
      }
    });


    dispatch({ type: "CANCEL_BOOKING_SUCCESS" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "CANCEL_BOOKING_ERROR" });
  }
};
