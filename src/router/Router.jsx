import React from 'react'
import { Route, Routes } from 'react-router-dom';

import AdminAddCar from '../view/admin.add.car';
import AdminAddUser from '../view/admin.add.user';
import AdminUpdateCar from '../view/admin.update.car';
import AdminUpdateUser from '../view/admin.update.user';
import AdminView from '../view/admin.view/index';
import Cars from '../view/cars';
import Drivers from '../view/drivers';
import Login from '../view/login';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<PublicRouter />}>
        <Route path='drivers' element={<Drivers />} />
        <Route path='cars' element={<Cars />} />
        <Route path='login' element={<Login />} />
      </Route>
      <Route path='/admin' element={<PrivateRouter />}>
        <Route path='' element={<AdminView />} />
        <Route path='add/user' element={<AdminAddUser />} />
        <Route path='add/car' element={<AdminAddCar />} />
        <Route path='users/update/:id' element={<AdminUpdateUser />} />
        <Route path='cars/update/:id' element={<AdminUpdateCar />} />
      </Route>
    </Routes>
  )
}
