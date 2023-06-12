import React from 'react'
import style from './Profile_header.module.css'

const Profile_header = (props) => {
  return (
    <div className = {style.item}>
      <img className={style.header} src='https://funkylife.in/wp-content/uploads/2021/08/good-evening-image-from-funkylife-27.jpg' />
    </div>
  );

};
export default Profile_header