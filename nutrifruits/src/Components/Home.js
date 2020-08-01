import React, { Component } from "react";
import Filter from "./Filter/Filter";
import Header from "./Header/Header";

class Home extends Component {
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
      <div className="home">
        <Header />
        <Filter />
      </div>
    );
  }
}

export default Home;
