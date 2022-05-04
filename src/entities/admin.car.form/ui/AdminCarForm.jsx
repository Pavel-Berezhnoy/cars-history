import React, { useContext, useState } from 'react';

import { AdminContext } from '../../../router/PrivateRouter';
import { userCar as defaultUserCar } from '../../../components/constants/defaultUserCar';
import { car as defaultCar } from '../../../components/constants/defaultCar';
import CarForm from '../../../components/ui/admin.update.create/CarForm';
import UserCarForm from '../../../components/ui/admin.update.create/UserCarForm';

export default function AdminCarForm({ userId }) {
  const { setUsersCars, setCar, setChanging, setCars, usersCars, car } = useContext(AdminContext); 
  const [carChanging, setCarChanging] = useState({ ...car });
  const userCar = usersCars.find(userCar => userCar.carId === car.id);
  const [userCarChanging, setUserCarChanging] = useState(userCar ? { ...userCar } : { ...defaultUserCar, userId: userId, carId: car.id });

  const saveCarHandle = () => {
    setCars(prevCars => ([...prevCars, carChanging,]));
    setUsersCars(prevCars => (
      [
        ...prevCars.filter(prevUserCar => prevUserCar.carId !== userCarChanging.carId),
        userCarChanging,
      ]
    ));
    setCar({ ...defaultCar, id: Math.random() });
    setChanging(true);
  }
  return (
    <CarForm
      carChanging={carChanging}
      setCarChanging={setCarChanging}
    >
      <UserCarForm
        userCar={userCarChanging}
        setUserCar={setUserCarChanging}
        saveHandle={saveCarHandle}
      />
    </CarForm>
  )
}
