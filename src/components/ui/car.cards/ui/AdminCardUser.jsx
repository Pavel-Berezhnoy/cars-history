import { Card, CardActionArea, CardActions, CardContent, Typography, Button } from '@mui/material';
import React, { useContext } from 'react';

import { AdminContext } from '../../../../router/PrivateRouter';

export default function AdminCardUser({ user, userCar }) {
  const { id, fio, birthday, birthcity, passport, nationality, license } = user;
  const { setUser, setUsers, setChanging, setUsersCars } = useContext(AdminContext);

  const deleteUserHandle = () => {
    setUsers(prevCars => prevCars.filter(prevCar => prevCar.id !== id));
    setUsersCars(prevUsersCars => prevUsersCars.filter(prevUserCar => prevUserCar.userId !== userCar.userId));
  }
  const updateHandle = () => {
    deleteUserHandle();
    setUser({...user})
    setChanging(false);
  }
  return (
    <Card sx={{ marginBottom: "16px", width: "100%" }}>
      <CardActionArea onClick={updateHandle} sx={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
        <CardContent sx={{ width: "30%" }}>
          <Typography gutterBottom variant="h6" component="h6">ФИО: </Typography>
          <Typography variant="h6" component="span">{fio}</Typography>
        </CardContent>
        <CardContent sx={{ width: "30%" }}>
          <Typography gutterBottom variant="h6" component="h6">Паспорт: </Typography>
          <Typography variant="h6" component="span">{passport}</Typography>
        </CardContent>
        <CardContent sx={{ width: "30%" }}>
          <Typography gutterBottom variant="h6" component="h6">Дата рождения: </Typography>
          <Typography variant="h6" component="span">{birthday}</Typography>
        </CardContent>
        <CardContent sx={{ width: "30%" }}>
          <Typography gutterBottom variant="h6" component="h6">Город рождения: </Typography>
          <Typography variant="h6" component="span">{birthcity}</Typography>
        </CardContent>
        <CardContent sx={{ width: "30%" }}>
          <Typography gutterBottom variant="h6" component="h6">Национальность:</Typography>
          <Typography variant="h6" component="span">{nationality}</Typography>
        </CardContent>
        <CardContent sx={{ width: "30%" }}>
          <Typography gutterBottom variant="h6" component="h6">Лицензия:</Typography>
          <Typography variant="h6" component="span">{license}</Typography>
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
        <Button onClick={deleteUserHandle} sx={{ margin: "0 auto", backgroundColor: "var(--background-black)" }} size="small" variant="contained">
          Удалить
        </Button>
      </CardActions>
    </Card>
  )
}
