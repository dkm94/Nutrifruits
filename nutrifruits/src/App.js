import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Components/Main";
import Demo from "./Components/Chat";
import Aside from "./Components/Aside";
import Join from "./Components/Join/Join";
import Chat from "./Components/Chat";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Aside} />
      <Route exact path="/" component={Main} />
      {/* <Route exact path="/" component={Demo} /> */}

      {/* <Switch>
        <Route exact path="/" component={Join} />
        <Route exact path="/" component={Chat} />
      </Switch> */}
    </BrowserRouter>
  );
}

export default App;
