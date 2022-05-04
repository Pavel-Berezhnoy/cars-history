import React, { useContext, useEffect } from 'react';

import Forms from '../../features/admin.add/ui/forms/Forms';
import Cars from '../../components/ui/admin.update.create/Cars';

import './style/style.css';
import { AdminContext } from '../../router/PrivateRouter';
import { car as defaultCar } from '../../components/constants/defaultCar';

export default function AdminAddUser() {
  const { setCars, setUsersCars, setCar } = useContext(AdminContext);
  useEffect(() => {
    return () => {
      setCars([]);
      setUsersCars([]);
      setCar({ ...defaultCar, id: Math.random() });
    }
  }, []);
  return (
    <div className="admin-add container">
      <div className="admin-change__container">
        <Forms />
        <Cars />
      </div>
    </div>
  )
}
