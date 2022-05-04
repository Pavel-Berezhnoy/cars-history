import React from 'react';

import Users from '../../components/ui/admin.update.create/Users';
import Forms from '../../features/admin.add.car/ui/Forms';

export default function AdminAddCar() {
  return (
    <div className="admin-add container">
      <div className="admin-change__container">
        <Forms />
        <Users />
      </div>
    </div>
  )
}
