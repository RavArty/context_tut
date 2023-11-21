import React, { useContext, useState } from "react";
import { MessageContext } from "./MessageContext";

const MessageUpdater = () => {
  const { updateMessage } = useContext(MessageContext);
  const [newMessage, setNewMessage] = useState("");

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMessage(newMessage);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={newMessage} onChange={handleChange} />
      <button type='submit'>Update Message</button>
    </form>
  );
};

export default MessageUpdater;
