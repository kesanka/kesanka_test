import React from 'react'
import style from './Messages_item.module.css'
import Item from './message/message';

const Dialogs_item = (props) => {
  return (
    
      <div className={style.message_item}>
        <Item message_text = 't2222'/>
        <Item message_text = '33333'/>
        <Item message_text = '44444'/>
      </div>
   
   
  );

};
export default Dialogs_item