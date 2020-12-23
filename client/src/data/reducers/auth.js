import axios from "axios";
import { toast } from "react-toastify";

const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAIL = "REGISTER_FAIL";

const initiaState = {
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initiaState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        token: localStorage.setItem("token", payload.token),
      };
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}

export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/register`,
      body,
      config
    );
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (e) {
    const errors = e.response.data.errors;
    if (errors) {
      errors.forEach((error) => toast.error(error));
    }
    dispatch({ type: REGISTER_FAIL });
  }
};
