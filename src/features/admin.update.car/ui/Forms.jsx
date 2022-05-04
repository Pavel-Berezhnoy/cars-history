import React, { useCallback, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';

import CarForm from '../../../components/ui/admin.update.create/CarForm';
import RoundedButton from '../../../components/ui/buttons/ui/RoundedButton';
import Title from '../../../components/ui/title/Title';
import AdminUserForm from '../../../entities/admin.user.form/ui/AdminUserForm';
import { AdminContext } from '../../../router/PrivateRouter';
import beforeSave from '../../../components/helpers/beforeSave';

export default function Forms({ updatingCar }) {
  const { changing, setChanging, usersCars, setUsersCars, users, setUsers } = useContext(AdminContext);

  const [car, setCar] = useState({ ...updatingCar });
  const storedUsersCars = JSON.parse(localStorage.getItem('usersCars')) || [];
  const navigate = useNavigate();

  const addCarHandle = useCallback(() => setChanging(false), [setChanging]);

  const saveHandle = () => {
    localStorage.setItem('usersCars', JSON.stringify([
      ...storedUsersCars.filter(
        storagedUserCar => storagedUserCar.carId !== car.id
      ),
      ...usersCars
    ]));
    localStorage.setItem('cars', beforeSave('cars', [{ ...car }]));
    localStorage.setItem('users', beforeSave('users', [...users]));
    setUsers([]);
    setUsersCars([]);
    navigate('/admin');
  }

  return (
    <>
      <RoundedButton clickHandle={() => navigate('/admin')} icon={<ArrowBack />} />
      <RoundedButton clickHandle={saveHandle} icon={<SaveIcon />} />
      <Title text={"Обновление автомобиля"} />
      <CarForm setCarChanging={setCar} carChanging={car} />
      <Title text={"Добавление водителя"} />

      {!changing
        ? <AdminUserForm carId={car.id} />
        : <></>}

      <div className="admin-change__actions">
        <RoundedButton clickHandle={addCarHandle} icon={<AddIcon />} />
      </div>
    </>
  )
}
