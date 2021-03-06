import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.state.messages.map( m => <Message message={m.message} />);
  
  let newMessage = React.createRef();
  let addNewMessage = () => {
  let oneNewMessage = newMessage.current.value;
  alert(oneNewMessage);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <div>
        <textarea ref={newMessage}></textarea>
        </div>
        <div>
        <button onClick={addNewMessage}>Add</button>
      </div>
    </div>
  );
};

export default Dialogs;
