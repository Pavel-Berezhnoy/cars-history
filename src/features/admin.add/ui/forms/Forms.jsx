import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import React, { useCallback, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowBack } from '@mui/icons-material';

import UserForm from '../../../../components/ui/admin.update.create/UserForm';
import Title from '../../../../components/ui/title/Title';
import { user as defaultUser } from '../../../../components/constants/defaultUser';
import { AdminContext } from '../../../../router/PrivateRouter';
import beforeSave from '../../../../components/helpers/beforeSave';
import RoundedButton from '../../../../components/ui/buttons/ui/RoundedButton';
import AdminCarForm from '../../../../entities/admin.car.form/ui/AdminCarForm';

export default function Forms() {
  const { changing, setChanging, usersCars, setUsersCars, cars, setCars } = useContext(AdminContext);
  const [user, setUser] = useState({ ...defaultUser, id: Math.random() });
  const navigate = useNavigate();

  const addCarHandle = useCallback(() => setChanging(false), [setChanging]);

  const saveHandle = () => {
    localStorage.setItem('usersCars', JSON.stringify((JSON.parse(localStorage.getItem('usersCars')) || []).concat(usersCars)));
    localStorage.setItem('cars', beforeSave('cars', cars));
    localStorage.setItem('users', JSON.stringify((JSON.parse(localStorage.getItem('users')) || []).concat(user)));
    setCars([]);
    setUsersCars([]);
    navigate('/admin')
  }
  return (
    <>
      <RoundedButton clickHandle={() => navigate('/admin')} icon={<ArrowBack />} />
      <RoundedButton clickHandle={saveHandle} icon={<SaveIcon />} />
      <Title text={"Добавление водителя"} />
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
