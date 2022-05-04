import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import getUsersThroughUsersCars from '../../../../components/helpers/getUsersThroughUsersCars';

export default function TableCars({ cars, setSelectedCar }) {
  const selectRowHandle = (params) => {
    const car = {...params.row};
    car.users = getUsersThroughUsersCars(car.id);
    setSelectedCar(car);
  }

  const columns = [
    { field: 'markName', headerName: 'Название', width: 270, valueGetter: params => `${params.row.mark} ${params.row.name}` },
    { field: 'number', headerName: 'Номер авто', width: 200 },
    { field: 'year', headerName: 'Год', width: 270 },
  ];

  return (
    <DataGrid
      rows={cars}
      columns={columns}
      pageSize={12}
      onCellClick={selectRowHandle}
      rowsPerPageOptions={[12]}
    />
  )
}
