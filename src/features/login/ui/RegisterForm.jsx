import { Button, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../../../components/ui/login.form/ui/LoginForm';
import { PublicContext } from '../../../router/PublicRouter';
import { StyledTextField } from '../style/FieldStyle';

export default function RegisterForm() {
  const { setLoginType } = useContext(PublicContext);
  const [user, setUser] = useState({
    login: '',
    pass: '',
    error: '',
  });
  const navigate = useNavigate();
  const existAccounts = (JSON.parse(localStorage.getItem('accounts')) || []);

  const registerHandle = event => {
    if (existAccounts.find(account => account.login === user.login)) {
      setUser({ ...user, error: 'Такой пользователь уже существует!' });
    } else {
      localStorage.setItem('accounts', JSON.stringify([...existAccounts, user]));
      navigate('/admin')
    }
  }
  return (
    <LoginForm>
      <Typography variant='h5' align='center'>
        Регистрация
      </Typography>
      {user.error
        ? <Typography align='center' color={'error'} variant='subtitle2'>
          {user.error}
        </Typography>
        : <></>}
      <StyledTextField
        value={user.login}
        onChange={(e) => setUser({ ...user, login: e.target.value })}
        fullWidth variant='standard'
        size='small'
        label='Логин'
        margin='dense' />
      <StyledTextField
        value={user.pass}
        onChange={(e) => setUser({ ...user, pass: e.target.value })}
        fullWidth variant='standard'
        type='password'
        size='small'
        label='Пароль'
        margin='dense' />
      <Button sx={{ margin: '16px 0', padding: '0', color: 'var(--text-white)' }} onClick={() => setLoginType('auth')} >Есть акаунт? Кликай!</Button>
      <Typography align='center'>
        <Button onClick={registerHandle} variant='contained' sx={{ margin: '16px 0', backgroundColor: "var(--background-black)" }}>Зарегистрироваться</Button>
      </Typography>
    </LoginForm>
  )
}
