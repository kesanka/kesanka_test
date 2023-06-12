import React from 'react'
import style from './dialog.module.css'
import { NavLink } from 'react-router-dom';

const item = (props) => {
  debugger
  return (
    <div className={style.dialog + ' ' + style.active}>
       <NavLink to = {`/dialogs/${props.dialog_id}`}> {props.dialog_name} </NavLink>
    </div>
  );

};
export default item