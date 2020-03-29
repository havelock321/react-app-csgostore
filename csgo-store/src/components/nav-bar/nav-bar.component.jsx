import React from "react";
import { Link } from "react-router-dom";
import "./nav-bar.styless.scss";
import { ReactComponent as Logo } from "../../assets/icons8-counter-strike.svg";
import { ReactComponent as Cog } from "../../assets/svg/cog.svg";
import { ReactComponent as Shop } from "../../assets/svg/shopping-cart.svg";
import { ReactComponent as Contact } from "../../assets/svg/phone.svg";

const NavBar = () => (
  <nav className="navbar">
    <ul className="navbar-nav">
      <li className="logo">
        <Link to="/" className="nav-link">
          <span className="link-text logo-text">CSGO Store</span>
          <Logo className="logo" />
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/shop" className="nav-link">
          <Shop />
          <span className="link-text">Shop</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/shop" className="nav-link">
          <Contact />
          <span className="link-text">Contact</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/shop" className="nav-link">
          <Cog className="svg-inline--fa fa-shop fa-w-16 fa-9x">
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                className="fa-primary"
              ></path>
            </g>
          </Cog>
          <span className="link-text">Settings</span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
