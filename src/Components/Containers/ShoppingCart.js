import React from "react";
import { connect } from "react-redux";
import CartItemWrapper from "../../HOC/CartItemWrapper";

function ShoppingCart({ addedItemName, cartOpen }) {
  let uniqueNameSet = new Set(addedItemName);
  let uniqueNameArray = Array.from(uniqueNameSet);

  return (
    <div
      style={{
        display: cartOpen ? "block" : "none",
        position: "absolute",
        right: "1rem",
        top: "4rem",
        zIndex: "100",
        color: "black",
        background: "white",
      }}
    >
      {uniqueNameArray.map((name) => (
        <CartItemWrapper name={name} key={name}></CartItemWrapper>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    addedItemName: state.addedItemName,
    cartOpen: state.cartOpen,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
