import React from "react";
import "./profile-page.scss";
import user from "assets/images/user.svg";

export function ProfilePage() {
  return (
    <div className="container profile">
      <div className="profile__inner">
        <div className="profile__photo">
          <img src={user} alt="user" />
        </div>
        <h2 className="profile__name">Бадиев Адам Алиханович</h2>
        <p className="profile__team"> Команда<br /> СОШ№ 10 г. Магас</p>
        <div className="profile__pointContainer">
            <p className="profile__check">На счету:</p>
            <p className="profile__point"> {235} X</p>
        </div>
      </div>
    </div>
  );
}
