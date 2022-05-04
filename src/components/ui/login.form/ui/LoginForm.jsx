import React from 'react';

import '../style/style.css';

export default function LoginForm({ submitHandle, children }) {
  return (
    <form className='login-form' onSubmit={submitHandle}>
      {children}
    </form>
  )
}
