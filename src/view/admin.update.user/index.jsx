import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { AdminContext } from '../../router/PrivateRouter';
import { car as defaultCar } from '../../components/constants/defaultCar';
import Cars from '../../components/ui/admin.update.create/Cars';
import Forms from '../../features/admin.update.user/ui/Forms';
import getCarsThroughUsersCarsWithoutDate from '../../components/helpers/getCarsThroughUsersCarsWithoutDate';

export default function AdminUpdateUser() {
  const { id } = useParams();
  const { setCars, setUsersCars, setCar } = useContext(AdminContext);
  const user = JSON.parse(localStorage.getItem('users')).find(user => user.id === Number(id));
  useEffect(() => {
    setCars(getCarsThroughUsersCarsWithoutDate(user.id));
    setUsersCars((JSON.parse(localStorage.getItem('usersCars')) || []).filter(userCar => userCar.userId === user.id));
    return () => {
      setCars([]);
      setUsersCars([]);
      setCar({ ...defaultCar, id: Math.random() });
    }
  }, [user.id]);
  return (
    <div className='admin-update container'>
      <div className="admin-change__container">
        <Forms updatingUser={user} />
        <Cars />
      </div>
    </div>
  )
}
