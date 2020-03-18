import React from "react";
import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title"> GUNS</h1>
          <span className="subtitle"> SHOW NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title"> PISTOLS</h1>
          <span className="subtitle"> SHOW NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title"> KNIFES</h1>
          <span className="subtitle"> SHOW NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title"> CHARACTERS</h1>
          <span className="subtitle"> SHOW NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title"> PREMIUM</h1>
          <span className="subtitle"> SHOW NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
