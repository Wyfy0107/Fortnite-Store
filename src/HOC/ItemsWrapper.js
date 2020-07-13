import React from "react";
import { useRouteMatch } from "react-router-dom";
import ItemsList from "../Components/ItemsList/ItemsList";

function ItemsWrapper() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <ItemsList path={path} url={url} />
    </div>
  );
}

export default ItemsWrapper;
