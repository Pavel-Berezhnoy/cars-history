import React, { useCallback, useContext, useState } from 'react';
import { ArrowBack } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import { useNavigate } from 'react-router-dom';

import RoundedButton from '../../../components/ui/buttons/ui/RoundedButton';
import Title from '../../../components/ui/title/Title';
import CarForm from '../../../components/ui/admin.update.create/CarForm';
import beforeSave from '../../../components/helpers/beforeSave';
import { AdminContext } from '../../../router/PrivateRouter';
import { car as defaultCar } from '../../../components/constants/defaultCar';
import AdminUserForm from '../../../entities/admin.user.form/ui/AdminUserForm';

export default function Forms() {
  const { changing, setChanging, usersCars, setUsersCars, users, setUsers } = useContext(AdminContext);

  const [car, setCar] = useState({ ...defaultCar, id: Math.random() });
  const navigate = useNavigate();

  const addCarHandle = useCallback(() => setChanging(false), [setChanging]);

  const saveHandle = () => {
    localStorage.setItem('usersCars', JSON.stringify((JSON.parse(localStorage.getItem('usersCars')) || []).concat(usersCars)));
    localStorage.setItem('users', beforeSave('users', users));
    localStorage.setItem('cars', JSON.stringify((JSON.parse(localStorage.getItem('cars')) || []).concat(car)));
    setUsers([]);
    setUsersCars([]);
    navigate('/admin');
  }
  return (
    <>
      <RoundedButton clickHandle={() => navigate('/admin')} icon={<ArrowBack />} />
      <RoundedButton clickHandle={saveHandle} icon={<SaveIcon />} />
      <Title text={"Добавление автомобиля"} />
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
