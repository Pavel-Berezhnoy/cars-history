import { TableCell, TableRow } from '@mui/material'
import React from 'react'

export default function TableDriverRow({ car }) {
  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell >{`${car?.mark} ${car?.name}`}</TableCell>
      <TableCell >{car?.startDate} - {car?.endDate || 'Настоящее время'}</TableCell>
    </TableRow>
  )
}
