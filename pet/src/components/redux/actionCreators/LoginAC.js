import { checkSession } from './isAuthorizedAC';

export const fetchLogin = (payload) => async (dispatch) => {
  const response = await fetch('http://localhost:4000/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();

  if (data.login) {
    return dispatch(checkSession({ status: data.login, user: data.user }));
  }
  return data;
};
