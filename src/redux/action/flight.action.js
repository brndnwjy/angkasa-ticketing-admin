import axios from "axios";
import swal from "sweetalert";

export const getFlight = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_FLIGHT_PENDING" });
    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/flight`
    );

    console.log(result.data.data);
    const flight = result.data.data;

    dispatch({ type: "GET_FLIGHT_SUCCESS", payload: flight });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_FLIGHT_ERROR" });
  }
};

export const getFlightDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_FLIGHT_DETAIL_PENDING" });

    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/flight/${id}`
    );

    console.log(result.data.data);
    const flight = result.data.data;

    dispatch({ type: "GET_FLIGHT_DETAIL_SUCCESS", payload: flight });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_FLIGHT_DETAIL_ERROR" });
  }
};

export const addFlight = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_FLIGHT_PENDING" });

    const result = await axios.post(
      `${process.env.REACT_APP_API_BACKEND}/flight`,
      data
    );

    console.log("ini")
    console.log(result.data);
    console.log("ini")

    swal({
      title: "Flight Registered!",
      icon: "success",
    });

    dispatch({ type: "ADD_FLIGHT_SUCCESS" });
    navigate("/flight");
  } catch (error) {
    console.log(error);
    dispatch({ type: "ADD_FLIGHT_ERROR" });
  }
};

export const removeFlight = (id, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "REMOVE_FLIGHT_PENDING" });
    swal({
      title: "Deletion",
      text: `Are you sure want to remove this flight?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (confirm) => {
      if (confirm) {
        const result = await axios.delete(
          `${process.env.REACT_APP_API_BACKEND}/flight/${id}`
        );

        swal({
          title: "Flight Removed!",
          text: `${result.data.message}`,
          icon: "success",
        });
      }
    });

    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/flight`
    );

    const flight = result.data.data;

    dispatch({ type: "GET_FLIGHT_SUCCESS", payload: flight });

    dispatch({ type: "REMOVE_FLIGHT_SUCCESS" });
    navigate("/flight");
  } catch (error) {
    console.log(error);
    dispatch({ type: "REMOVE_FLIGHT_ERROR" });
  }
};
