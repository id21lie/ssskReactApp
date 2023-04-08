import React from "react";
import { NavLink } from "react-router-dom";

import logo from '../pic/logo.jpeg';

class Header extends React.Component {
  render() {
    return (
      <header>


        <nav>
          <img src={logo} alt="logo" class="logo-image"></img>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">Home</NavLink>
            </li>

            <li>
              <NavLink to="/Weather" exact activeClassName="active">Väder</NavLink>
            </li>

            <li>
              <NavLink to="/Tours" exact activeClassName="active">Turer</NavLink>
            </li>

            <li>
              <NavLink to="/Event" exact activeClassName="active">Event</NavLink>
            </li>

            <li>
              <NavLink to="/Login" exact activeClassName="active">Logga in</NavLink>
            </li>

          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
