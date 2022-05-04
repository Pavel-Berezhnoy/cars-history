import React from 'react';

import '../style/header.css';
import AuthNav from './AuthNav';
import MainNav from './MainNav';

export default function Header() {
  return (
    <div className='header'>
      <div className="header-container container">
        <MainNav />
        <AuthNav />
      </div>
    </div>
  )
}
