import React from 'react'
import style from './Post.module.css'

const Post = (props) => {
  
  return (

    <div className={style.posts}>
      <div className={style.item}>
        <img className={style.emojiTag} src='https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f602.png' />
        
        {props.message}
        <span>{props.likeCount}</span>
      </div>
    </div>

  );

};
export default Post