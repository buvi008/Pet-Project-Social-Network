import { checkSession } from './isAuthorizedAC';

export const fetchEdit = (payload) => async (dispatch) => {
  const response = await fetch(`http://localhost:4000/project/${payload.origin}/edit`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },

    body: JSON.stringify(payload.body),
  });
  const data = await response.json();

  if (data.login) {
    return dispatch(checkSession({ status: data.login, user: data.user }));
  }
  return data;
};
