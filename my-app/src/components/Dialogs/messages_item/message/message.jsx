import React from 'react'
import style from './message.module.css'

const item = (props) => {
  return (
    <div className={style.message}>
      {props.message_text}
    </div>
  );

};
export default item