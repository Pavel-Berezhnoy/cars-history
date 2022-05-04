import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import getCarsThroughUsersCars from '../../../../components/helpers/getCarsThroughUsersCars';

export default function TableDrivers({ users, setSelectedUser }) {

  const selectRowHandle = (params) => {
    const user = {...params.row};
    user.cars = getCarsThroughUsersCars(user.id);
    setSelectedUser(user);
  }

  const columns = [
    { field: 'fio', headerName: 'ФИО', width: 270 },
    { field: 'nationality', headerName: 'Национальность', width: 200 },
    { field: 'birthday', headerName: 'Дата рождения', width: 270 },
  ];

  return (
    <DataGrid
      rows={users}
      columns={columns}
      pageSize={12}
      onCellClick={selectRowHandle}
      rowsPerPageOptions={[12]}
    />
  )
}
