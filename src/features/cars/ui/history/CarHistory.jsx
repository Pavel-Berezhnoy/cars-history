import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

import TableDriverRow from './TableHistoryRow';

export default function CarHistory({ users }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell>ФИО водителя</TableCell>
            <TableCell>Владение</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableDriverRow key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
