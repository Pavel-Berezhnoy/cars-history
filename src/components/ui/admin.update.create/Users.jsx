import React, { useContext } from 'react'

import ExistUsers from './ExistUsers';
import { AdminContext } from '../../../router/PrivateRouter';
import filterArray from '../../helpers/filterArray';
import AdminCardUser from '../car.cards/ui/AdminCardUser';

export default function Users() {
  const { usersCars, users } = useContext(AdminContext);
  const filteredUsers = filterArray((JSON.parse(localStorage.getItem('users')) || []), users);
  return (
    <div className='admin-change__cars-container'>
      <div className="admin-change__car-cards">
        {users.length > 0
          ? users.map((user, index) => <AdminCardUser
            key={index}
            user={user}
            userCar={usersCars.find(userCar => userCar.userId === user.id)} />)
          : <></>}
      </div>
      <div className="admin-change__cars-exist">
        <ExistUsers
          users={filteredUsers} />
      </div>
    </div>
  )
}
