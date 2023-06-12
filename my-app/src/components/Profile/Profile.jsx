import React from 'react'
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img className = {style.header} src='https://funkylife.in/wp-content/uploads/2021/08/good-evening-image-from-funkylife-27.jpg' />
      </div>
      <div>
        <img className = {`${style.avatar} ${style.active}`} src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3' />
      </div>
     <MyPosts />

    </div>
  );

};
export default Profile