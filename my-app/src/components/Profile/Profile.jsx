import React from 'react'
import style from './Profile.module.css'

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img className = {style.header} src='https://funkylife.in/wp-content/uploads/2021/08/good-evening-image-from-funkylife-27.jpg' />
      </div>
      <div>
        <img className = {`${style.avatar} ${style.active}`} src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3' />
      </div>
      <div>My posts
        <div>
          NewPost
        </div>
        <div className = {style.posts}>
          <div className = {style.item}>
            post1
          </div>
          <div className = {style.item}>
            post2
          </div>
        </div>
      </div>

    </div>
  );

};
export default Profile