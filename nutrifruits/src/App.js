import React from "react";
import "./App.css";
import Main from "./Components/Main";
import Demo from "./Components/Chat";
import Sidebar from "./Components/Aside";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
      <Demo />
    </div>
  );
}

export default App;
