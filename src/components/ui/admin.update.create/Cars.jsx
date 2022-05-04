import React, { useContext } from 'react';

import ExistCars from './ExistCars';
import filterArray from '../../helpers/filterArray';
import AdminCardCar from '../car.cards/ui/AdminCardCar';
import { AdminContext } from '../../../router/PrivateRouter';

export default function Cars() {
  const { usersCars, cars } = useContext(AdminContext);
  const filteredCars = filterArray((JSON.parse(localStorage.getItem('cars')) || []), cars);
  return (
    <div className='admin-change__cars-container'>
      <div className="admin-change__car-cards">
        {cars.length > 0
          ? cars.map((car, index) => <AdminCardCar
            key={index}
            car={car}
            userCar={usersCars.find(userCar => userCar.carId === car.id)} />)
          : <></>}
      </div>
      <div className="admin-change__cars-exist">
        <ExistCars
          cars={filteredCars} />
      </div>
    </div>
  )
}
