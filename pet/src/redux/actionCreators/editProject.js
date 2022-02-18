/* eslint-disable */
import { checkSession } from "./isAuthorizedAC";
import axios from "axios";

export const fetchEdit = (payload) => async (dispatch) => {
  const response = await axios.put(
    `http://localhost:4000/project/${payload.origin}/edit`,
    { ...payload.body }
  );
  const data = await response.data;

  if (data.login) {
    return dispatch(checkSession({ status: data.login, user: data.user }));
  }
  return data;
};
