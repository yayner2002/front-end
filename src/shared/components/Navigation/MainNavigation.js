import React from "react";

import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import { Link } from "react-router-dom";
const MainNavigation = () => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">Your Places</Link>
      </h1>
      <nav></nav>
    </MainHeader>
  );
};

export default MainNavigation;