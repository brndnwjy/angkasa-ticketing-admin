import axios from "axios";

export const getUser = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_USER_PENDING" });
    const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}/user`);

    console.log(result.data.data);
    const user = result.data.data;

    dispatch({ type: "GET_USER_SUCCESS", payload: user });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_USER_ERROR" });
  }
};

export const getUserDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_USER_DETAIL_PENDING" });

    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/user/${id}`
    );

    console.log(result.data.data);
    const user = result.data.data;

    dispatch({ type: "GET_USER_DETAIL_SUCCESS", payload: user });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_USER_DETAIL_ERROR" });
  }
};
