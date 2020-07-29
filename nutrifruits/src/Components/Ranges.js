import React from "react";
// import data from "../../public/data.json";

class Ranges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "",
      fruits: []
    };
    
  }

  render() {
  
  
    return (
      <div className="slider-container">
        <h1>Trier par:</h1>

        <form>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option1"
              className="form-check-input"
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
            />
            Calories
          </label>
        </div>

        <div className="form-check">
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
    </div>
  )}
}
export default Ranges;
