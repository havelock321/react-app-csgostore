import React from "react";
import "./custom-float-button.styless.scss";
import CartIcon from "./../cart-icon/cart-icon.component";
import CartDropdown from "./../cart-dropdown/cart-dropdown";
import { connect } from "react-redux";

const CustomFloatButton = ({hidden}) => (
  <div className="adminActions">
    <CartIcon />
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(CustomFloatButton);
