import React, { useContext } from "react";
import { MessageContext } from "./MessageContext";

const MessageDisplay = () => {
  const { message } = useContext(MessageContext);

  return <div>Current Message: {message}</div>;
};

export default MessageDisplay;
