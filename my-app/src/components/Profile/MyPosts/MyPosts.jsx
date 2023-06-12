import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'
import NewPost from './NewPost/NewPost';

const MyPosts = () => {
  return (

    <div>My posts
      <NewPost />
      <Post />
    </div>

  );

};
export default MyPosts