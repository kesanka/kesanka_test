import React from 'react'
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import Profile_info from './Profile_info/Profile_info'

const Profile = (props) => {
  return (
    <div>
      <Profile_info />
      <MyPosts />

    </div>
  );

};
export default Profile