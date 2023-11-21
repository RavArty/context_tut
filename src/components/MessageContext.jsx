import React, { useState, createContext } from "react";

// Create a context
export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState("Hello World!");

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return <MessageContext.Provider value={{ message, updateMessage }}>{children}</MessageContext.Provider>;
};

// // Custom hook
// export const useMessage = () => {
//   const context = useContext(MessageContext);
//   if (context === undefined) {
//     throw new Error('useMessage must be used within a MessageProvider');
//   }
//   return context;
// };
