import React from "react";

import { Link } from 'react-router-dom'

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <span className="logo">Wizy.to</span>
    <div className="option-area">
      <Link to='/movies/browse'>
        <span className="option">BROWSE MOVIES</span>
      </Link>
      <Link to='/movies/upcoming'>
        <span className="option">UPCOMING MOVIES</span>
      </Link>
      <Link to='/movies/popular'>
        <span className="option">POPULAR MOVIES</span>
      </Link>
    </div>
  </div>
);

export default Header;
