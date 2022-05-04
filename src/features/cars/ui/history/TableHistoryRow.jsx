import React from 'react';
import { TableCell, TableRow } from '@mui/material';

export default function TableHistoryRow({ user }) {
  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell >{`${user?.fio}`}</TableCell>
      <TableCell >{user?.startDate} - {user?.endDate || 'Настоящее время'}</TableCell>
    </TableRow>
  )
}
