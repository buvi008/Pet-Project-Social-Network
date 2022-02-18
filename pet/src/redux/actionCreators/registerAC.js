import { checkSession } from './isAuthorizedAC';

export const fetchRegister = (payload) => async (dispatch) => {
  const response = await fetch('http://localhost:4000/registration', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();

  if (data.registration) {
    return dispatch(
      checkSession({ status: data.registration, user: data.user }),
    );
  }
  return data;
};
