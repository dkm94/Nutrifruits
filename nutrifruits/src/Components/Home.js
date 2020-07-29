import React, { Component } from "react";
import Filters from "./Filters";

class Home extends Component {

  constructor(){
    super()
      this.state = {
        fruits : []
      }
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
          <Filters />
        </div>
    );
  }
}

export default Home;
