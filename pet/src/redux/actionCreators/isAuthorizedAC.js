/* eslint-disable */
import axios from "axios";
import { CHECK_SESSION } from "../actionTypes/isAuthorizedAT";

export const checkSession = (payload) => ({ type: CHECK_SESSION, payload });

export const fetchCheckSession = () => (dispatch) => {
  axios
    .get("http://localhost:4000/isAuthorized")
    .then(({ data }) => {
      if (data.isAuthorized) {
        dispatch(checkSession({ status: data.isAuthorized, user: data.user }));
      }
    })
    .catch((err) => console.log(err.message));
};
