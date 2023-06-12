import React from 'react'
import style from './Dialogs.module.css'
import Dialogs_item from './dialogs_item/Dialogs_item';
import Messages_item from './messages_item/Messages_item';

const Dialogs = (props) => {
  return (
    <div className = {style.dialogs}>
      <Dialogs_item />
      <Messages_item />
    </div>
  );

};
export default Dialogs