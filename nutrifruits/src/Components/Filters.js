import React from "react";
import logo from "../img/logo-nutrifruits.png";
import trier from "../img/filter-img.png";
import Cards from "./Cards";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: []
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
    console.log("clicked !")
  }  

  render() {
  

  
    return (
      <div className="slider-container">

        {/* Logo */}

        <div className="aside-logo">
          <img alt="logo-nutrifruts" src={logo} />
        </div>
        
      {/* Barre de recherche */}

  
     
      {/* Tri par nutriments */}

        <section className="nutri-filter">
        <img alt="trier" src={trier} />
        <h1>Trier par:</h1>

        <form>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option1"
              className="form-check-input"
              onClick={this.ascProteins}
            />
            Protein
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option2"
              className="form-check-input"
              onClick={this.ascFat}
            />
            Fat
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option3"
              className="form-check-input"
              onClick={this.ascCalories}
            />
            Calories
          </label>
        </div>

        <div className="form-check"   onClick={this.ascSugar}>
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option3"
              className="form-check-input"
            
            />
            Sugar
          </label>
        </div>

      </form>
      </section>
      <Cards fruits={this.state.fruits}/>
    </div>
  )}
}
export default Filters;
