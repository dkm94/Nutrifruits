import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Components/Main";
import Aside from "./Components/Aside";
import Join from "./Components/Join/Join";
import Chat from "./Components/Chat";

function App() {
  

  return (
    <div className="App">
      {/* <Aside />
      <Main />
      <Chat /> */}

      <BrowserRouter>
        <Route path="/" component={Aside} /> 
        <Route path="/" component={Main} /> 
        {/* <Route exact path="/" component={Join} />  */}
        <Route exact path="/chat" component={Chat} />

      </BrowserRouter>
    </div>
  );
}

export default App;
