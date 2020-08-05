import React, { Component } from "react";
import Fruits from "./Cards";
import Join from './Join/Join';
import Chat from './Chat';
import { BrowserRouter, Route, Switch } from "react-router-dom";


class Main extends Component {
  constructor() {
    super();
    this.state = {
      fruits: [],
      visible:false
    };
  }
  componentDidMount() {
    fetch("../data.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ fruits: data });
      })
      .catch(console.log);
  }


  displayChat = () => {
    this.setState({
      visible : !this.state.visible
    })

  }
 

  
  render() {

    return (
      <div className="all">
        <section className="main">
          <div className="explanation">
            Notre site fournit des données sur la valeure nutritionnelle des
            fruits !
          </div>
          <h1 className="list">FRUITS LIST</h1>
          <Fruits fruits={this.state.fruits} />
        </section>        
        <div className="buttonChat">
          <img onClick={this.displayChat} classname="imgChat" src={require('../img/gifpomme.gif')} />
        </div>
      <div className={this.state.visible ? 'boxChat' : 'hide'}>
      <BrowserRouter>
        <Switch>      
        <Route exact path="/" component={Join} /> 
        <Route exact path="/chat" component={Chat} />
        </Switch>

      </BrowserRouter>
      </div>

      </div>
    );
  }
}

export default Main;
