import { CHECK_SESSION } from '../actionTypes/isAuthorizedAT';

export const checkSession = (payload) => ({ type: CHECK_SESSION, payload });

export const fetchCheckSession = () => (dispatch) => {
  fetch('http://localhost:4000/isAuthorized', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.isAuthorized) {
        dispatch(checkSession({ status: data.isAuthorized, user: data.user }));
      }
    })
    .catch((err) => console.log(err.message));
};
