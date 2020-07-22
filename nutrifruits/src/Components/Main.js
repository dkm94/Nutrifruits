import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div className="all">
        <section className="sidebar">SIDEBAR</section>
        <section className="main">
          <div className="explanation">
            Notre site fournit des données sur la valeure nutritionnelle des
            fruits !
          </div>
          <div class="card-grid">
            <div className="card">
              <div className="container">
                <div className="top"></div>
                <div className="bottom">
                  <div className="details">
                    <h1>Banane</h1>
                  </div>
                </div>
              </div>
              <div className="inside">
                <div className="icon">
                  <i className="fas fa-info-circle"></i>
                </div>
                <div className="contents">Protéines gras sucre</div>
              </div>
            </div>
            <div className="card">
              <div className="container">
                <div className="top"></div>
                <div className="bottom">
                  <div className="details">
                    <h1>Banane</h1>
                  </div>
                </div>
              </div>
              <div className="inside">
                <div className="icon">
                  <i className="fas fa-info-circle"></i>
                </div>
                <div className="contents">Protéines gras sucre</div>
              </div>
            </div>
            <div className="card">
              <div className="container">
                <div className="top"></div>
                <div className="bottom">
                  <div className="details">
                    <h1>Banane</h1>
                  </div>
                </div>
              </div>
              <div className="inside">
                <div className="icon">
                  <i className="fas fa-info-circle"></i>
                </div>
                <div className="contents">Protéines gras sucre</div>
              </div>
            </div>
            <div className="card">
              <div className="container">
                <div className="top"></div>
                <div className="bottom">
                  <div className="details">
                    <h1>Banane</h1>
                  </div>
                </div>
              </div>
              <div className="inside">
                <div className="icon">
                  <i className="fas fa-info-circle"></i>
                </div>
                <div className="contents">Protéines gras sucre</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
