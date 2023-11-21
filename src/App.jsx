import React from "react";
import "./App.css";
import { MessageProvider } from "./components/MessageContext";
import MessageDisplay from "./components/MessageDisplay";
import MessageUpdater from "./components/MessageUpdater";

function App() {
  return (
    <div className='App'>
      <MessageProvider>
        <MessageDisplay />
        <MessageUpdater />
      </MessageProvider>
    </div>
  );
}

export default App;
