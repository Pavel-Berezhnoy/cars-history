import React, { useState } from 'react';
import TableDrivers from '../../features/drivers/ui/table.drivers/TableDrivers';
import TabsDrivers from '../../features/drivers/ui/tabs.driver/TabsDrivers';

import './style/style.css';

export default function Drivers() {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const [selectedUser, setSelectedUser] = useState();
  return (
    <div className='container drivers-view'>
      <div className="drivers-view__column-left">
        <TableDrivers users={users} setSelectedUser={setSelectedUser} />
      </div>
      <div className="drivers-view__column-right">
        {selectedUser ? <TabsDrivers activeUser={selectedUser} /> : <></>}
      </div>
    </div>
  )
}
