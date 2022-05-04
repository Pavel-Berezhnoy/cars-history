import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './style/style.css';

export const bottomRowStyles = { maxWidth: '14%', width: "100%", margin: '0px 12px' };
export const topRowStyles = { maxWidth: '30%', width: "100%", margin: '0px 12px' };

export default function CarForm({ carChanging, setCarChanging, children }) {
  return (
    <div className="admin-form__container">
      <div className='admin-form__area'>
        <TextField
          sx={topRowStyles}
          onChange={event => setCarChanging(prevState => ({ ...prevState, mark: event.target.value }))}
          value={carChanging.mark}
          id="mark"
          label="Марка"
          variant="standard" />
        <TextField
          sx={topRowStyles}
          onChange={event => setCarChanging(prevState => ({ ...prevState, name: event.target.value }))}
          value={carChanging.name} id="name"
          label="Название"
          variant="standard" />
        <TextField
          sx={topRowStyles}
          onChange={event => setCarChanging(prevState => ({ ...prevState, number: event.target.value }))}
          value={carChanging.number}
          id="number"
          label="Гос. номер"
          variant="standard" />
      </div>
      <div className='admin-form__area'>
        <TextField
          sx={bottomRowStyles}
          onChange={event => setCarChanging(prevState => ({ ...prevState, year: event.target.value }))}
          value={carChanging.year}
          id="release"
          label="Год выпуска"
          type="number"
          variant="standard" />
        <TextField
          sx={bottomRowStyles}
          onChange={event => setCarChanging(prevState => ({ ...prevState, color: event.target.value }))}
          value={carChanging.color}
          id="color"
          label="Цвет"
          variant="standard" />
        <TextField
          sx={bottomRowStyles}
          onChange={event => setCarChanging(prevState => {
            return { ...prevState, capacity: event.target.value }
          })}
          value={carChanging.capacity}
          id="capacity"
          label="Мощность двигателя / л.с."
          type="number"
          variant="standard" />
        <TextField
          sx={bottomRowStyles}
          onChange={event => setCarChanging(prevState => ({ ...prevState, amount: event.target.value }))}
          value={carChanging.amount}
          id="amount"
          label="Объем / л."
          type="number"
          variant="standard" />
        <FormControl sx={bottomRowStyles}>
          <InputLabel id="transmission-select-label">Коробка передач</InputLabel>
          <Select
            labelId="transmission-select-label"
            id="transmission-select"
            label="Коробка передач"
            value={carChanging.transmission}
            onChange={event => setCarChanging(prevState => ({ ...prevState, transmission: event.target.value }))}
          >
            <MenuItem value={"Автоматика"}>Автоматика</MenuItem>
            <MenuItem value={"Ручная"}>Ручная</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={bottomRowStyles}
          onChange={event => setCarChanging(prevState => ({ ...prevState, mileage: event.target.value }))}
          value={carChanging.mileage}
          id="mileage"
          label="Пробег / км."
          variant="standard" />
      </div>
      {children}
    </div>
  )
}