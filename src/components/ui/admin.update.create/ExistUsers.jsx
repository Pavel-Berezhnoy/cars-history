import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useContext } from 'react';

import { AdminContext } from '../../../router/PrivateRouter';

export default function ExistUsers({ users, updateUsers }) {
  const { setChanging, setUser } = useContext(AdminContext);

  const updateHandle = (user) => {
    setUser({...user})
      setChanging(false);
  }
  const columns = [
    { field: 'fio', headerName: 'ФИО', width: 120 },
    { field: 'passport', headerName: 'Паспорт', width: 150 },
    { field: 'birthcity', headerName: 'Город рождения', width: 110 },
    { field: 'birthday', headerName: 'День рождения',  width: 100, },
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
      rows={users}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
    />
  )
}
