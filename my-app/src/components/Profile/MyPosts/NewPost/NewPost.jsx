import React from 'react'
import style from './NewPost.module.css'
console.log(style)
const NewPost = () => {
  return (

    <div className = {style.block}>
      <textarea className={style.input}>Введите</textarea>
      <button className={`${style.input} ${style.btn}`}>Написать</button>
      
    </div>

  );

};
export default NewPost