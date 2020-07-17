import React from "react";
import { connect } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";

function ShoppingCart({ addedItemName, cartOpen }) {
  return (
    <ListGroup
      style={{
        display: cartOpen ? "block" : "none",
        position: "absolute",
        right: "1rem",
        top: "4rem",
        zIndex: "100",
        color: "black",
      }}
    >
      {addedItemName.map((name) => (
        <ListGroup.Item key={name}>{name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

const mapStateToProps = (state) => {
  return {
    addedItemName: state.addedItemName,
    cartOpen: state.cartOpen,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
