import { TextField, Button } from '@mui/material'
import React from 'react'

import { topRowStyles } from './CarForm';

export default function UserCarForm({ userCar, setUserCar, saveHandle }) {
  return (
    <>
      <div className='admin-form__area'>
        <TextField
          sx={topRowStyles}
          id="startDate"
          label="Дата оформления"
          value={userCar.startDate}
          onChange={event => setUserCar(prevState => ({ ...prevState, startDate: event.target.value }))}
          type="date"
          variant="standard" />
        <TextField
          sx={topRowStyles}
          id="endDate"
          label="Дата окончания пользования"
          value={userCar.endDate}
          onChange={event => setUserCar(prevState => ({ ...prevState, endDate: event.target.value }))}
          type="date" variant="standard" />
      </div>
      <div className='admin-add__actions'>
        <Button sx={{ backgroundColor: "var(--background-black)" }} onClick={saveHandle} variant="contained">Добавить</Button>
      </div>
    </>
  )
}
