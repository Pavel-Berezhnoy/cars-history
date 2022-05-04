import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

import getUsersThroughUsersCars from '../../../helpers/getUsersThroughUsersCars';

export default function TableRowCar({ car, deleteHandle }) {
  return (
    <TableRow
      key={car.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="car">{car.mark}</TableCell>
      <TableCell >{car.name}</TableCell>
      <TableCell >{car.number}</TableCell>
      <TableCell >{car.mileage}</TableCell>
      <TableCell >{getUsersThroughUsersCars(car.id).map(car => `${car.fio} / `)}</TableCell>
      <TableCell sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to={`/admin/cars/update/${car.id}`}>
          <EditIcon />
        </Link>
        <button onClick={() => deleteHandle(car.id)}>
          <DeleteOutlinedIcon />
        </button>
      </TableCell>
    </TableRow>
  )
}
