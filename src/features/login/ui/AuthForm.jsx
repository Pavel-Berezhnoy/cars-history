import { Button, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../../../components/ui/login.form/ui/LoginForm';
import { PublicContext } from '../../../router/PublicRouter';
import { StyledTextField } from '../style/FieldStyle';

export default function AuthForm() {
  const { setLoginType } = useContext(PublicContext);
  const [user, setUser] = useState({
    login: '',
    pass: '',
    error: '',
  });
  const navigate = useNavigate();
  const existAccounts = (JSON.parse(localStorage.getItem('accounts')) || []);

  const authHandle = event => {
    if (existAccounts.find(account => account.login === user.login && account.pass === user.pass)) {
      localStorage.setItem('auth', 'true');
      navigate('/admin');
    } else {
      setUser({ ...user, error: 'Неверное имя пользователя или пароль!' });
    }
  }

  return (
    <LoginForm >
      <Typography variant='h5' align='center'>
        Войти
      </Typography>
      {user.error
        ? <Typography align='center' color={'error'} variant='subtitle2'>
          {user.error}
        </Typography>
        : <></>}
      <StyledTextField
        fullWidth
        variant='standard'
        size='small'
        label='Логин'
        value={user.login}
        onChange={e => setUser({ ...user, login: e.target.value })}
        margin='dense' />
      <StyledTextField
        fullWidth
        variant='standard'
        size='small'
        type='password'
        value={user.pass}
        onChange={e => setUser({ ...user, pass: e.target.value })}
        label='Пароль'
        margin='dense' />
      <Button sx={{ margin: '16px 0', padding: '0', color: 'var(--text-white)' }} onClick={() => setLoginType('register')}>Нет аккаунта? Кликай!</Button>
      <Typography align='center'>
        <Button onClick={authHandle} variant='contained' sx={{ margin: '16px 0', backgroundColor: "var(--background-black)" }}>Войти</Button>
      </Typography>
    </LoginForm>
  )
}
