import React, { Component } from "react";
import Filter from "./Filter/Filter";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

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
        <Footer />
      </div>
    );
  }
}

export default Home;
