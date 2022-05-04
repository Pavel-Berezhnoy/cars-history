import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { AdminContext } from '../../../../router/PrivateRouter';

export default function AdminCardCar({ car, userCar }) {
  const { id, name, mark, number, color, capacity, amount, transmission, mileage, year, } = car;
  const { setCar, setCars, setChanging, setUsersCars } = useContext(AdminContext);

  const deleteCarHandle = () => {
    setCars(prevCars => prevCars.filter(prevCar => prevCar.id !== id))
    setUsersCars(prevUsersCars => prevUsersCars.filter(prevUserCar => prevUserCar.carId !== userCar.carId))
  }
  const updateHandle = () => {
    deleteCarHandle();
    setCar({...car})
    setChanging(false);
  }
  return (
    <Card sx={{ marginBottom: "16px", width: "100%" }}>
      <CardActionArea onClick={updateHandle} sx={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
        <CardContent sx={{ width: "30%" }}>
          <Typography gutterBottom variant="h6" component="h6">Название:</Typography>
          <Typography variant="h6" component="span">{name}</Typography>
        </CardContent>
        <CardContent sx={{ width: "30%" }}>
          <Typography gutterBottom variant="h6" component="h6">Марка:</Typography>
          <Typography variant="h6" component="span">{mark}</Typography>
        </CardContent>
        <CardContent sx={{ width: "30%" }}>
          <Typography gutterBottom variant="h6" component="h6">Гос. номер:</Typography>
          <Typography variant="h6" component="span">{number}</Typography>
        </CardContent>
        <CardContent sx={{ width: "30%" }}>
          <Typography gutterBottom variant="h6" component="h6">Цвет:</Typography>
          <Typography variant="h6" component="span">{color}</Typography>
        </CardContent>
        <CardContent sx={{ width: "30%" }}>
          <Typography gutterBottom variant="h6" component="h6">Мощность двигателя / л.с.:</Typography>
          <Typography variant="h6" component="span">{capacity}</Typography>
        </CardContent>
        <CardContent sx={{ width: "30%" }}>
          <Typography gutterBottom variant="h6" component="h6">Объем двигателя / л.:</Typography>
          <Typography variant="h6" component="span">{amount}</Typography>
        </CardContent>
        <CardContent sx={{ width: "30%" }}>
          <Typography gutterBottom variant="h6" component="h6">Коробка передач:</Typography>
          <Typography variant="h6" component="span">{transmission}</Typography>
        </CardContent>
        <CardContent sx={{ width: "30%" }}>
          <Typography gutterBottom variant="h6" component="h6">Пробег / км.:</Typography>
          <Typography variant="h6" component="span">{mileage}</Typography>
        </CardContent>
        <CardContent sx={{ width: "30%" }}>
          <Typography gutterBottom variant="h6" component="h6">Год:</Typography>
          <Typography variant="h6" component="span">{year}</Typography>
        </CardContent>
        <CardContent sx={{ width: "30%" }}>
          <Typography gutterBottom variant="h6" component="h6">Дата начала владения:</Typography>
          <Typography variant="h6" component="span">{userCar.startDate}</Typography>
        </CardContent>
        <CardContent sx={{ width: "30%" }}>
          <Typography gutterBottom variant="h6" component="h6">Дата окончания владения:</Typography>
          <Typography variant="h6" component="span">{userCar.endDate}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={deleteCarHandle} sx={{ margin: "0 auto", backgroundColor: "var(--background-black)" }} size="small" variant="contained">
          Удалить
        </Button>
      </CardActions>
    </Card>
  )
}
