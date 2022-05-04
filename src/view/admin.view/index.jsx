import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

import Users from '../../features/admin.read/ui/Users';

import './style/style.css';
import Cars from '../../features/admin.read/ui/Cars';

export default function AdminView() {
  const [cars, setCars] = useState(JSON.parse(localStorage.getItem('cars')) || []);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
  return (
    <div className="admin-view container">
      <div className="admin-view__container">
        <div className="admin-view__users-container">
          <div className='admin-view__add-button'>
            <Link to={"/admin/add/user"}>
              <AddIcon />
              <span>Добавить</span>
            </Link>
          </div>
          <div className="admin-view__tables">
            <div className="admin-view__users">
              <Users users={users} setUsers={setUsers} />
            </div>
          </div>
        </div>
        <div className="admin-view__cars-container">
          <div className='admin-view__add-button'>
            <Link to={"/admin/add/car"}>
              <AddIcon />
              <span>Добавить</span>
            </Link>
          </div>
          <div className="admin-view__tables">
            <div className="admin-view__users">
              <Cars cars={cars} setCars={setCars} />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
