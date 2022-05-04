import React, { useState } from 'react';
import TableCars from '../../features/cars/ui/table.cars/TableCars';
import TabsCar from '../../features/cars/ui/tabs.car/TabsCar';

import './style/style.css';

export default function Cars() {
  const cars = JSON.parse(localStorage.getItem('cars')) || [];
  const [selectedCar, setSelectedCar] = useState();
  return (
    <div className='container cars-view'>
      <div className="cars-view__column-left">
        <TableCars cars={cars} setSelectedCar={setSelectedCar} />
      </div>
      <div className="cars-view__column-right">
        {selectedCar ? <TabsCar activeCar={selectedCar} /> : <></>}
      </div>
    </div>
  )
}
