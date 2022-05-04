import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

import getCarsThroughUsersCars from '../../../helpers/getCarsThroughUsersCars';

export default function TableRowUser({ user, deleteHandle }) {
  
  return (
    <TableRow
      key={user.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="car">
        {user.fio}
      </TableCell>
      <TableCell >{user.license}</TableCell>
      <TableCell >{user.birthday}</TableCell>
      <TableCell >{user.birthcity}</TableCell>
      <TableCell >{getCarsThroughUsersCars(user.id).map(car => `${car.mark} ${car.name} / `)}</TableCell>
      <TableCell sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to={`/admin/users/update/${user.id}`}>
          <EditIcon />
        </Link>
        <button onClick={() => deleteHandle(user.id)}>
          <DeleteOutlinedIcon />
        </button>
      </TableCell>
    </TableRow>
  )
}
