import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AuthNav() {
  const isAuth = localStorage.getItem('auth') || false;
  const navigate = useNavigate();
  const logoutHandle = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  }
  return (
    <nav className='header-nav__auth'>
      <ul className='header-nav__list'>
        {isAuth
          ? <>
            <li className='header-nav__item'><Link to={"/admin"}>Админка</Link></li>
            <li className='header-nav__item' onClick={logoutHandle}>Выход</li>
          </>
          : <li className='header-nav__item'><Link to={"/login"}>Вход</Link></li>}
      </ul>
    </nav>
  )
}
