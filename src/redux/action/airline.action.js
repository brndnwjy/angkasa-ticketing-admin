import axios from "axios";
import swal from "sweetalert";

export const getAirline = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_AIRLINE_PENDING" });
    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/airline`
    );

    console.log(result.data.data);
    const airline = result.data.data;

    dispatch({ type: "GET_AIRLINE_SUCCESS", payload: airline });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_AIRLINE_ERROR" });
  }
};

export const getAirlineDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_AIRLINE_DETAIL_PENDING" });

    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/airline/${id}`
    );

    console.log(result.data.data);
    const airline = result.data.data;

    dispatch({ type: "GET_AIRLINE_DETAIL_SUCCESS", payload: airline });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_AIRLINE_DETAIL_ERROR" });
  }
};

export const addAirline = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_AIRLINE_PENDING" });

    const result = await axios.post(
      `${process.env.REACT_APP_API_BACKEND}/airline`,
      data
    );

    swal({
      title: "Airline Registered!",
      text: `${result.data.message}`,
      icon: "success",
    });

    dispatch({ type: "ADD_AIRLINE_SUCCESS" });
    navigate("/airline");
  } catch (error) {
    console.log(error);
    dispatch({ type: "ADD_AIRLINE_ERROR" });
  }
};

export const updateAirline = (id, data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_AIRLINE_PENDING" });

    const result = await axios.put(
      `${process.env.REACT_APP_API_BACKEND}/airline/${id}`,
      data
    );

    swal({
      title: "Airline Updated!",
      text: `${result.data.message}`,
      icon: "success",
    });

    dispatch({ type: "UPDATE_AIRLINE_SUCCESS" });
    navigate("/airline");
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPDATE_AIRLINE_ERROR" });
  }
};
