import React from 'react';
import './profile-page.scss';
import userLogo from 'assets/images/user.svg';
import { useSelector } from 'react-redux';

export function ProfilePage() {
  const user = useSelector((state) => state.user.data);

  return (
    <div className="container profile">
      {user && (
        <div className="profile__inner">
          <div className="profile__photo">
            <img src={userLogo} alt="user" />
          </div>
          <h2 className="profile__name">{`${user?.last_name} ${user?.first_name} ${user?.patronymic}`}</h2>
          <p className="profile__team">
            {' '}
            Команда
            <br /> {user?.team_name}
          </p>
          <div className="profile__pointContainer">
            <p className="profile__check">На счету:</p>
            <p className="profile__point"> {user?.money} X</p>
          </div>
        </div>
      )}
    </div>
  );
}
