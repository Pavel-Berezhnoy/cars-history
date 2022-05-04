import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { AdminContext } from '../../router/PrivateRouter';
import { user as defaultUser } from '../../components/constants/defaultUser';
import Forms from '../../features/admin.update.car/ui/Forms';
import Users from '../../components/ui/admin.update.create/Users';
import getUsersThroughUsersCarsWithoutDate from '../../components/helpers/getUsersThroughUsersCarsWithoutDate';

export default function AdminUpdateCar() {
  const { id } = useParams();
  const { setUsers, setUsersCars, setUser } = useContext(AdminContext);
  const car = JSON.parse(localStorage.getItem('cars')).find(car => car.id === Number(id));
  useEffect(() => {
    setUsers(getUsersThroughUsersCarsWithoutDate(car.id));
    setUsersCars((JSON.parse(localStorage.getItem('usersCars')) || []).filter(userCar => userCar.carId === car.id));
    return () => {
      setUsers([]);
      setUsersCars([]);
      setUser({ ...defaultUser, id: Math.random() });
    }
  }, [car.id]);
  return (
    <div className='admin-update container'>
      <div className="admin-change__container">
        <Forms updatingCar={car} />
        <Users />
      </div>
    </div>
  )
}
