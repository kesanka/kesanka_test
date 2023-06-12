import React from 'react'
import style from './dialog.module.css'
import { NavLink } from 'react-router-dom';

const item = (props) => {

  let path = `/dialogs/${props.dialog_id}`

  return (
    <div className={style.dialog + ' ' + style.active}>
      <NavLink to={path} className={navData => navData.isActive ? style.active : style.item}> {props.dialog_name} </NavLink>
    </div>
  );

};
export default item