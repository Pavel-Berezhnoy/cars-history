import React, { useState, useMemo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { car as defaultCar } from './../components/constants/defaultCar';
import { user as defaultUser } from './../components/constants/defaultUser';
import Header from '../features/header/ui/Header';

const adminState = {
  users: [],
  cars: [],
  usersCars: [],
  changing: true,
  user: { ...defaultUser, id: Math.random() },
  car: { ...defaultCar, id: Math.random() },
  setUser: () => { },
  setUsers: () => { },
  setCars: () => { },
  setUsersCars: () => { },
  setChanging: () => { },
  setCar: () => { }
}

export const AdminContext = React.createContext(adminState);

export default function PrivateRouter() {
  const [user, setUser] = useState({ ...defaultUser, id: Math.random() });
  const [users, setUsers] = useState([]);
  const [cars, setCars] = useState([]);
  const [changing, setChanging] = useState(true);
  const [car, setCar] = useState({ ...defaultCar, id: Math.random() });
  const [usersCars, setUsersCars] = useState([]);
  const context = useMemo(
    () => ({ user, setUser, users, setUsers, changing, setChanging, car, setCar, usersCars, setUsersCars, cars, setCars }),
    [user, users, car, cars, changing, usersCars]
  );

  const isAuth = localStorage.getItem('auth') || false;
  return (
    <AdminContext.Provider value={context}>
      {isAuth
        ? <div className='main-container'>
          <Header />
          <Outlet />
        </div>
        : <Navigate to={'/login'} />
      }
    </AdminContext.Provider>
  )
}
