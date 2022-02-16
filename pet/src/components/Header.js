/* eslint-disable */
import {
  ButtonGroup,
  Button,
  Toolbar,
  AppBar,
  Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogout } from './redux/actionCreators/LogoutAC';

export default function Header() {
  const state = useSelector((state) => state.checkSessionReducer.isAuthorized);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = async () => {
    dispatch(fetchLogout());
    navigate('/');
  };

  return (
    <AppBar position='relative'>
      <Toolbar className='navButtons'>
        {/* <CameraIcon sx={{ mr: 2 }} /> */}
        <Typography variant='h6' color='inherit' noWrap>
          LFGP
        </Typography>
        <ButtonGroup
          className='navButtons'
          disableElevation
          variant='contained'
        >
          <Link to='/projects/create'>
            <Button>Создать проект</Button>
          </Link>
          <Link to='/login'>
            <Button>Найти проект</Button>
          </Link>
          <Link to='/auth'>
            <Button>Регистрация</Button>
          </Link>
          <Link to='/login'>
            <Button>Логин</Button>
          </Link>
          <Button onClick={logout}>Logout</Button>
          <Link to='/personal'>
            <Button>Personal</Button>
          </Link>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}
