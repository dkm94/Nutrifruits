import React, { Component } from "react";

const Fruits = ({ fruits }) => {
  return (
    <div className="card-grid">
      {fruits.map((fruit) => (
        <div className="card" key={fruit.id}>
          <div className="container">
            <div className="top">
              <img src={fruit.img} alt="fruits" />
            </div>
            <div className="bottom">
              <div className="details">
                <h1>{fruit.name}</h1>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <i className="fas fa-info-circle"></i>
            </div>
            <div className="contents">
              <p>
                FAMILY: <span>{fruit.family}</span>
              </p>
              <p>
                PROTEIN: <span>{fruit.nutritions.protein}</span>
              </p>
              <p>
                FAT: <span>{fruit.nutritions.fat}</span>
              </p>
              <p>
                CALORIES: <span>{fruit.nutritions.calories}</span>
              </p>
              <p>
                SUGAR: <span>{fruit.nutritions.sugar}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fruits;
