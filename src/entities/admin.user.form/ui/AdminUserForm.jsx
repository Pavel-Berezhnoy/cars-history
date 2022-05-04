import React, { useContext, useState } from 'react';

import { AdminContext } from '../../../router/PrivateRouter';
import UserCarForm from '../../../components/ui/admin.update.create/UserCarForm';
import UserForm from '../../../components/ui/admin.update.create/UserForm';
import { userCar as defaultUserCar } from '../../../components/constants/defaultUserCar';
import { user as defaultUser } from '../../../components/constants/defaultUser';

export default function AdminUserForm({ carId }) {
  const { setUsers, setUsersCars, setUser, setChanging, usersCars, user } = useContext(AdminContext);
  const userCar = usersCars.find(userCar => userCar.userId === user.id);
  const [userCarChanging, setUserCarChanging] = useState(userCar ? { ...userCar } : { ...defaultUserCar, userId: user.id, carId: carId });
  const [userChanging, setUserChanging] = useState({ ...user });

  const saveUserHandle = () => {
    setUsers(prevCars => ([...prevCars, userChanging]));
    setUsersCars(prevCars => (
      [
        ...prevCars.filter(prevUserCar => prevUserCar.userId !== userCarChanging.userId),
        userCarChanging,
      ]
    ));
    setUser({ ...defaultUser, id: Math.random() });
    setChanging(true);
  }
  return (
    <UserForm
      user={userChanging}
      changeUser={setUserChanging}
    >
      <UserCarForm
        userCar={userCarChanging}
        setUserCar={setUserCarChanging}
        saveHandle={saveUserHandle}
      />
    </UserForm>
  )
}
