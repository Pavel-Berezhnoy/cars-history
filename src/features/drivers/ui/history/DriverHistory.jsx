import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React from 'react';
import TableDriverRow from './TableHistoryRow';

export default function DriverHistory({ cars }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell>Название авто</TableCell>
            <TableCell>Владение</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cars.map((car) => (
            <TableDriverRow key={car.id} car={car} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
