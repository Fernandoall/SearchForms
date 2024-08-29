import React from "react";

import logoImg from "../../assets/img/logoNav.png";
import "./Navbar.css";

export class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <img id="img" src={logoImg} alt="" />
            <h1>Space Flight News</h1>
          </div>

          <ul className="nav-list">
            <li>
              <a className="link" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="link" href="/">
                Trending
              </a>
            </li>
            <li>
              <a className="link" href="/">
                Categories
              </a>
            </li>
            <li>
              <a className="link" href="/">
                About us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
