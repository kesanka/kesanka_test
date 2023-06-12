import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'
import NewPost from './NewPost/NewPost';

const MyPosts = () => {
  return (
    <div>
      My posts
      <NewPost />
      <Post message = 'ЭЩКЕРЕ' likeCount = '2'/>
      <Post message = 'vsee norm' likeCount = '0'/>
    </div>

  );

};
export default MyPosts