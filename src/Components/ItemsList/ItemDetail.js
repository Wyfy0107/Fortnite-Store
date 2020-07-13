import React from "react";
import { useParams } from "react-router-dom";

function ItemDetail() {
  let { itemsID } = useParams();
  return <div>{itemsID}</div>;
}

export default ItemDetail;
