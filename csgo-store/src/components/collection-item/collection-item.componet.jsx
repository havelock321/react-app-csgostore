import React from "react";
import "./collection-item.styless.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl, isRifle } = item;
  return (
    <div  className={`${isRifle ? "collection-item" : "collection-item"}`}>
      <div className="collection-header">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <CustomButton onClick={() => addItem(item)}> ADD TO CART </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
