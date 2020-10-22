import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div `
display: grid;
grid-auto-flow: column;
gap: 4px;
align-items: center;
`

class ShopCartItem extends React.Component {
    render() {
      return (
        <ItemContainer>
          <p>{this.props.cartItem.quantity}x</p>
          <p>{this.props.cartItem.name}</p>
          <button>Remover</button>
        </ItemContainer>
      );
    }
  }
  
  export default ShopCartItem;