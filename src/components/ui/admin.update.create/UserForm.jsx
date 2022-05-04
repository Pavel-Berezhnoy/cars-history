import React from 'react';
import TextField from '@mui/material/TextField';

import './style/style.css';

const fieldStyles = { maxWidth: '30%', width: "100%", margin: '0px 12px' };

export default function UserForm({ user, changeUser, children }) {
  const { fio, passport, license, birthday, birthcity, nationality } = user;
  return (
    <div className="admin-form__container">
      <div className='admin-form__area'>
        <TextField
          sx={fieldStyles}
          onChange={(event) => changeUser(prevState => ({...prevState, fio: event.target.value}))}
          value={fio}
          id="fio"
          label="ФИО"
          variant="standard" />
        <TextField
          value={passport}
          onChange={(event) => changeUser(prevState => ({...prevState, passport: event.target.value}))}
          sx={fieldStyles}
          id="passport"
          label="Пасспорт"
          variant="standard" />
        <TextField
          sx={fieldStyles}
          onChange={(event) => changeUser(prevState => ({...prevState, license: event.target.value}))}
          value={license}
          id="license"
          label="Лицензия"
          variant="standard" />
      </div>
      <div className='admin-form__area'>
        <TextField
          sx={fieldStyles}
          onChange={(event) => changeUser(prevState => ({...prevState, birthday: event.target.value}))}
          value={birthday}
          id="birthdate"
          label="Дата рождения"
          type="date"
          variant="standard" />
        <TextField
          sx={fieldStyles}
          onChange={(event) => changeUser(prevState => ({...prevState, birthcity: event.target.value}))}
          value={birthcity}
          id="birthcity"
          label="Место рождения"
          variant="standard" />
        <TextField
          sx={fieldStyles}
          onChange={(event) => changeUser(prevState => ({...prevState, nationality: event.target.value}))}
          value={nationality}
          id="nationality"
          label="Национальность"
          variant="standard" />
      </div>
      {children}
    </div>
  )
}
