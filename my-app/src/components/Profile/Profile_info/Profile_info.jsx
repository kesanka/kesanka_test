import React from 'react'
import style from './Profile_info.module.css'
import Profile_header from './Profile_header/Profile_header'
import Profile_avatar from './Profile_avatar/Profile_avatar';
import Profile_about from './Profile_about/Profile_about'

const Profile_info = (props) => {
  return (
    <div className = {style.profile_info_all}>
      <Profile_header />
      <Profile_avatar />
      <Profile_about />
    </div>
  );

};
export default Profile_info