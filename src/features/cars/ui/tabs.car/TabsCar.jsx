import React from 'react';

import CustomTabs from '../../../../components/ui/tabs/ui/CustonTabs';
import InfoTab from '../../../../components/ui/info.tab/ui/InfoTab';
import CarHistory from '../history/CarHistory';

export default function TabsCar({ activeCar }) {
  const listTabs = [
    {
      id: 0,
      label: "Автоистория",
      content: <CarHistory users={activeCar.users.filter(user => user.endDate !== '')} />,
    },
    {
      id: 1,
      label: "Текущие водители",
      content: <CarHistory users={activeCar.users.filter(user => user.endDate === '')} />,
    },
    {
      id: 2,
      label: "Информация",
      content: <InfoTab infoObject={activeCar} />
    }
  ]
  return (
    <div className='driver-tabs'>
      <CustomTabs listTabs={listTabs} />
    </div>
  )
}
