import React, { useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const QuantityDisplay = styled.div`
  display: inline;
`;

const Text = styled.div`
  width: 15vw;
`;

function CartItemWrapper({ name }) {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row",
        justifyContent: "space-around",
        padding: "5px",
        border: "1px solid black",
      }}
    >
      <Text>{name}</Text>
      <Button
        variant='primary'
        size='sm'
        style={{ margin: "0 0.5rem 0 0.5rem" }}
        onClick={() => setCount(count + 1)}
      >
        +
      </Button>
      <QuantityDisplay>{count}</QuantityDisplay>
      <Button
        variant='primary'
        size='sm'
        style={{ margin: "0 0.5rem" }}
        onClick={() => setCount(count === 0 ? count : count - 1)}
      >
        -
      </Button>
    </div>
  );
}

export default CartItemWrapper;
