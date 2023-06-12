import React from 'react'
import style from './Dialogs_item.module.css'
import Item from './dialog/dialog'


const Dialogs_item = (props) => {
  return (
    
      <div className={style.dialog_item + ' ' + style.active}>
        <Item dialog_name = 'Polina' dialog_id = '1'/>
        <Item dialog_name = 'Sanek' dialog_id = '2'/>
        <Item dialog_name = 'Maxim' dialog_id = '3'/>
      </div>
   
   
  );

};
export default Dialogs_item