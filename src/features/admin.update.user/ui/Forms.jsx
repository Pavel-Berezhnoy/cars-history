import React, { useCallback, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import { ArrowBack } from '@mui/icons-material';

import { AdminContext } from '../../../router/PrivateRouter';
import Title from '../../../components/ui/title/Title';
import UserForm from '../../../components/ui/admin.update.create/UserForm';
import beforeSave from '../../../components/helpers/beforeSave';
import RoundedButton from '../../../components/ui/buttons/ui/RoundedButton';
import AdminCarForm from '../../../entities/admin.car.form/ui/AdminCarForm';

export default function Forms({ updatingUser }) {
  const { setChanging, setCars, setUsersCars, changing, cars, usersCars } = useContext(AdminContext);

  const [user, setUser] = useState({ ...updatingUser });
  const storedUsersCars = JSON.parse(localStorage.getItem('usersCars')) || [];
  const navigate = useNavigate();

  const addCarHandle = useCallback(() => setChanging(false), [setChanging]);

  const saveHandle = () => {
    localStorage.setItem('usersCars', JSON.stringify([
      ...storedUsersCars.filter(
        storagedUserCar => storagedUserCar.userId !== user.id
      ),
      ...usersCars
    ]));
    localStorage.setItem('cars', beforeSave('cars', [...cars]));
    localStorage.setItem('users', beforeSave('users', [{ ...user }]));
    setCars([]);
    setUsersCars([]);
    navigate('/admin');
  }
  return (
    <>
      <RoundedButton clickHandle={() => navigate('/admin')} icon={<ArrowBack />} />
      <RoundedButton clickHandle={saveHandle} icon={<SaveIcon />} />
      <Title text={"Обновление водителя"} />
      <UserForm user={user} changeUser={setUser} />
      <Title text={"Добавление автомобиля"} />

      {!changing
        ? <AdminCarForm userId={user.id} />
        : <></>}

      <div className="admin-change__actions">
        <RoundedButton clickHandle={addCarHandle} icon={<AddIcon />} />
      </div>
    </>
  )
}
