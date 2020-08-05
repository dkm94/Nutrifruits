import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Join from "./Components/Join/Join";
import Chat from "./Components/Chat";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />

        {/* <Switch>
          <Route exact path="/" component={Join} />
          <Route exact path="/" component={Chat} />
        </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
