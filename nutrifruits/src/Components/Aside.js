import React from "react";
import logo from "../img/logo-nutrifruits.png";
import filter from "../img/filter-img.png";
import Famfilter from "../Components/Family_filter";

export default function Aside() {
  return (
    <aside className="aside">
      <div className="aside-logo">
        <img alt="logo-nutrifruts" src={logo} />
      </div>
      <div className="aside-filter">
        <img alt="filter" src={filter} />
        <span>Filter</span>
      </div>
      <Famfilter />
    </aside>
  );
}
