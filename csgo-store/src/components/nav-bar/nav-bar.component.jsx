import React from "react";
import { Link } from "react-router-dom";
import "./nav-bar.styless.scss";
import { ReactComponent as Logo } from "../../assets/icons8-counter-strike.svg";
import { ReactComponent as Cog } from "../../assets/svg/user-secret.svg";
import { ReactComponent as Shop } from "../../assets/svg/shopping-cart.svg";
import { ReactComponent as Contact } from "../../assets/svg/phone.svg";
import { ReactComponent as User } from "../../assets/svg/user-circle-o.svg";

import { auth } from "./../../firebase/firebase.utils";

const NavBar = ({ currentUser }) => (
  <nav className="navbar">
    <ul className="navbar-nav">
      <li className="logo">
        <Link to="/" className="nav-link">
          <span className="link-text logo-text">CSGO Store</span>
          <Logo className="logo" />
        </Link>
        {currentUser ? (
          <div className="user-profile">
            <div className="user-name link-text userinfo-text">
              {currentUser.displayName}
            </div>
          </div>
        ) : null}
      </li>
      <li className="nav-item">
        {currentUser ? (
          <Link to="/profile" className="nav-link">
            <User />
            <span className="link-text">My Profile</span>
          </Link>
        ) : (
          <Link to="/sign" className="nav-link">
            <User />
            <span className="link-text">Sign</span>
          </Link>
        )}
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
      {currentUser ? (
      <li className="nav-item" onClick={() => auth.signOut()}>
        <Link to="/" className="nav-link">
          <Cog />
          <span className="link-text">Exit</span>
        </Link>
      </li>) : null
      }
    </ul>
  </nav>
);

export default NavBar;
