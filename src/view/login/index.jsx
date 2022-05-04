import React, { useContext } from 'react';
import AuthForm from '../../features/login/ui/AuthForm';
import RegisterForm from '../../features/login/ui/RegisterForm';
import { PublicContext } from '../../router/PublicRouter';

import './style/style.css';

export default function Login() {
  const { loginType } = useContext(PublicContext);
  return (
    <div className='container'>
      <div className="auth-container">
        {loginType === 'auth' ? <AuthForm /> : <RegisterForm />}
      </div>
    </div>
  )
}
