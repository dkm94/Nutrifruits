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

  ascProteins = () => {
    const fruits = this.state.fruits
    fruits.sort(function (a, b) {
      return a.nutritions.protein - b.nutritions.protein
    });
    this.setState({fruits})
  }  

  
  ascFat = () => {
    const fruits = this.state.fruits
    fruits.sort(function (a, b) {
      return a.nutritions.fat - b.nutritions.fat
    });
    this.setState({fruits})
  }  

  
  ascCalories = () => {
    const fruits = this.state.fruits
    fruits.sort(function (a, b) {
      return a.nutritions.calories - b.nutritions.calories
    });
    this.setState({fruits})
  }  

  
  ascSugar = () => {
    const fruits = this.state.fruits
    fruits.sort(function (a, b) {
      return a.nutritions.sugar - b.nutritions.sugar
    });
    this.setState({fruits})
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
          <p>Trier par:</p>
          <span onClick={this.ascProteins}>Protein</span><br />
          <span onClick={this.ascFat}>Fat</span><br />
          <span onClick={this.ascCalories}>Calories</span><br />
          <span onClick={this.ascSugar}>Sugar</span><br />

          <Fruits fruits={this.state.fruits} />
        </section>
      </div>
    );
  }
}

export default Main;
