import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNav() {
  return (
    <nav className='header-nav__main'>
      <ul className='header-nav__list'>
        <li className='header-nav__item'><Link to='/drivers'>Водители</Link></li>
        <li className='header-nav__item'><Link to='/cars'>Автомобили</Link></li>
      </ul>
    </nav>
  )
}
