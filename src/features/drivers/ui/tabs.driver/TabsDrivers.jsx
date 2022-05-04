import React from 'react';

import CustomTabs from '../../../../components/ui/tabs/ui/CustonTabs';
import DriverHistory from '../history/DriverHistory';
import InfoTab from '../../../../components/ui/info.tab/ui/InfoTab';

import '../../style/style.css';

export default function TabsDrivers({ activeUser }) {
  const listTabs = [
    {
      id: 0,
      label: "Автоистория",
      content: <DriverHistory cars={activeUser.cars.filter(car => car.endDate !== '')} />,
    },
    {
      id: 1,
      label: "Текущие автомобили",
      content: <DriverHistory cars={activeUser.cars.filter(car => car.endDate === '')} />,
    },
    {
      id: 2,
      label: "Информация",
      content: <InfoTab infoObject={activeUser} />
    }
  ]
  return (
    <div className='driver-tabs'>
      <CustomTabs listTabs={listTabs} />
    </div>
  )
}
