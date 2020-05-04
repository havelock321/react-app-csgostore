import React from "react";
import { ReactComponent as ShoppingIcon } from "./../../assets/cart.svg";
import "./cart-icon.styless.scss";
import { connect } from "react-redux";
import { toggleCardHidden } from "../../redux/cart/cart.action";

const CartIcon = ({ toggleCardHidden }) => (
  <div className="cart-icon" onClick={toggleCardHidden}>
    <ShoppingIcon className="shopping-icon"></ShoppingIcon>
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCardHidden: () => dispatch(toggleCardHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
