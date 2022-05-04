import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Title from '../../../components/ui/title/Title';
import TableRowCar from '../../../components/ui/admin.table.rows/ui/TableRowCar';

export default function Cars({ cars, setCars }) {
  const usersCars = JSON.parse(localStorage.getItem('usersCars')) || [];

  const deleteUserHandle = (carId) => {
    localStorage.setItem('cars', JSON.stringify(cars.filter(car => car.id !== carId)));
    localStorage.setItem('usersCars', JSON.stringify(usersCars.filter(userCar => userCar.carId !== carId)));
    setCars(JSON.parse(localStorage.getItem('cars')));
  }

  return (
    <>
      <Title text={"Автомобили"} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }}>
          <TableHead>
            <TableRow>
              <TableCell>Марка</TableCell>
              <TableCell>Название</TableCell>
              <TableCell>Номер</TableCell>
              <TableCell>Пробег</TableCell>
              <TableCell>Водители</TableCell>
              <TableCell>Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.map((row) => (
              <TableRowCar key={row.id} car={row} deleteHandle={deleteUserHandle} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
