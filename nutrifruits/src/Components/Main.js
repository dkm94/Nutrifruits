import React, { Component } from "react";
import Fruits from "./Cards";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      fruits: [],
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
  render() {
    return (
      <div className="all">
        <section className="sidebar">SIDEBAR</section>
        <section className="main">
          <div className="explanation">
            Notre site fournit des données sur la valeure nutritionnelle des
            fruits !
          </div>
          <h1 className="list">FRUITS LIST</h1>
          <Fruits fruits={this.state.fruits} />
        </section>
      </div>
    );
  }
}

export default Main;
