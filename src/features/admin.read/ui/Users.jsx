import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'

import Title from '../../../components/ui/title/Title';
import TableRowUser from '../../../components/ui/admin.table.rows/ui/TableRowUser';

export default function Users({ users, setUsers }) {
  const usersCars = JSON.parse(localStorage.getItem('usersCars')) || [];

  const deleteUserHandle = (userId) => {
    localStorage.setItem('users', JSON.stringify(users.filter(user => user.id !== userId)));
    localStorage.setItem('usersCars', JSON.stringify(usersCars.filter(user => user.userId !== userId)));
    setUsers(JSON.parse(localStorage.getItem('users')));
  }

  return (
    <>
      <Title text={"Водители"} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }}>
          <TableHead>
            <TableRow>
              <TableCell>ФИО</TableCell>
              <TableCell >Удостоверение</TableCell>
              <TableCell >Дата рождения</TableCell>
              <TableCell >Город рождения</TableCell>
              <TableCell >Автомобили</TableCell>
              <TableCell >Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRowUser key={row.id} user={row} deleteHandle={deleteUserHandle} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
