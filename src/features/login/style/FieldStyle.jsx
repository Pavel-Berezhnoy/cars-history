import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: '#fff',
    borderBottom: '1px solid #fff'
  },
  '& .MuiInput-underline:before':{
    borderBottom: '1px solid #fff'
  },
  '& .MuiInput-root:hover:not(.Mui-disabled):before': {
    borderBottom: '1px solid #fff'
  },
  '& .MuiInputLabel-root': {
    color: '#fff',
  }
});