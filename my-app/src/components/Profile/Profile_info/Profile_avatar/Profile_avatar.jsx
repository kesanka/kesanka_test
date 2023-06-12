import React from 'react'
import style from './Profile_avatar.module.css'

const Profile_avatar = (props) => {
  return (
    <div className={style.item}>
        <img className = {style.avatar} src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3' />
    </div>
  );

};
export default Profile_avatar