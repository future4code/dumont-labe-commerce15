import React from "react";
import styled from "styled-components";

const CartContainer = styled.div`
  border: 1px solid black;
`;

class ShopCart extends React.Component {
  render() {
    return (
      <CartContainer>
        <h2>Carrinho</h2>
      </CartContainer>
    );
  }
}

export default ShopCart;
