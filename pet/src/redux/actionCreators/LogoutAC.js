import { checkSession } from './isAuthorizedAC';

export const fetchLogout = (payload) => async (dispatch) => {
  const responce = await fetch('http://localhost:4000/logout', {
    credentials: 'include',
  });

  const data = await responce.json();

  dispatch(checkSession({ payload: data.logout }));
};
