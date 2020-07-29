import React from "react";
import "../App.css";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: [
        {
          id: 11,
          name: "Rosaceae",
          value: "Rosaceae",
        },
        {
          id: 12,
          name: "Musaceae",
          value: "Musaceae",
        },
        {
          id: 13,
          name: "Rutaceae",
          value: "Rutaceae",
        },
        {
          id: 14,
          name: "Anacardiaceae",
          value: "Anacardiaceae",
        },
        {
          id: 15,
          name: "Bromeliaceae",
          value: "Bromeliaceae",
        },
        {
          id: 16,
          name: "Solanaceae",
          value: "Solanaceae",
        },
        {
          id: 17,
          name: "Cucurbitaceae",
          value: "Cucurbitaceae",
        },
      ],
      fruits: [
        {
          id: 1,
          family: "Rosaceae",
          name: "Apple",
          //   location: "bangalore",
          //   experience: 1
        },
        {
          id: 2,
          family: "Musaceae",
          name: "Banana",
          //   location: "mumbai",
          //   experience: 3
        },
        {
          id: 3,
          family: "Rutaceae",
          name: "Lemon",
          //   location: "agra",
          //   experience: 5
        },
        {
          id: 4,
          family: "Anacardiaceae",
          name: "Mango",
          //   location: "chennai",
          //   experience: 6
        },
        {
          id: 5,
          family: "Bromeliaceae",
          name: "Pineapple",
          //   location: "vegas",
          //   experience: 7
        },
      ],
      activeFilter: [],
    };
  }

  onFilterChange(filter) {
    const { filters, activeFilter } = this.state;
    if (filter === "ALL") {
      if (activeFilter.length === filters.length) {
        this.setState({ activeFilter: [] });
      } else {
        this.setState({ activeFilter: filters.map((filter) => filter.value) });
      }
    } else {
      if (activeFilter.includes(filter)) {
        const filterIndex = activeFilter.indexOf(filter);
        const newFilter = [...activeFilter];
        newFilter.splice(filterIndex, 1);
        this.setState({ activeFilter: newFilter });
      } else {
        this.setState({ activeFilter: [...activeFilter, filter] });
      }
    }
  }

  render() {
    const { filters, activeFilter } = this.state;
    let filteredList;
    if (activeFilter.length === 0 || activeFilter.length === filters.length) {
      filteredList = this.state.fruits;
    } else {
      filteredList = this.state.fruits.filter((item) =>
        this.state.activeFilter.includes(item.family)
      );
    }
    return (
      <div className="searchContainer">
        <h1>By Family:</h1>

        <form>
          <input
            id="toggle1"
            type="checkbox"
            onClick={() => this.onFilterChange("ALL")}
            checked={activeFilter.length === filters.length}
          />
          <label className="labelText" htmlFor="toggle1">
            All
          </label>
          <br />

          {this.state.filters.map((filter) => (
            <React.Fragment key={filter.id}>
              <input
                id={filter.id}
                type="checkbox"
                checked={activeFilter.includes(filter.value)}
                onClick={() => this.onFilterChange(filter.value)}
              />
              <label htmlFor={filter.id}>{filter.name}</label>
              <br />
            </React.Fragment>
          ))}
        </form>
        <ul>
          {filteredList.map((item) => (
            <div key={item.id}>
              <li>
                {item.name} -- {item.family}
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Search;
