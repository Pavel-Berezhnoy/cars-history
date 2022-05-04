import React, { useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

import { AdminContext } from '../../../router/PrivateRouter';


export default function ExistCars({ cars }) {

  const { setChanging, setCar } = useContext(AdminContext);

  const updateHandle = (car) => {
    setCar({ ...car });
    setChanging(false);
  }

  const columns = [
    { field: 'number', headerName: 'Гос.номер', width: 120 },
    { field: 'name', headerName: 'Название', width: 150 },
    { field: 'capacity', headerName: 'Мощность / л.с.', width: 110 },
    {
      field: 'mileage',
      headerName: 'Пробег / км.',
      type: 'number',
      width: 100,
    },
    {
      field: 'action',
      headerName: 'Действие',
      width: 130,
      renderCell: (params) => <Button
        onClick={() => updateHandle(params.row)}
        sx={{ margin: "0 auto", backgroundColor: "var(--background-black)" }}
        size="small"
        variant="contained"
      >
        Добавить
      </Button>
    },
  ];

  return (
    <DataGrid
      rows={cars}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
    />
  )
}
