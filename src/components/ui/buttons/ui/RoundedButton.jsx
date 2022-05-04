import React from 'react';
import Fab from '@mui/material/Fab';

const buttonStyle = {
  color: 'var(--text-white)',
  backgroundColor: 'var(--background-black)',
  marginRight: '12px',
  '&:hover': {
    backgroundColor: 'var(--text-white)',
    color: 'var(--background-black)'
  }
};

export default function RoundedButton({ icon, clickHandle }) {
  return (
    <Fab
      sx={{ ...buttonStyle, }}
      onClick={clickHandle}>
      {icon}
    </Fab>
  )
}
