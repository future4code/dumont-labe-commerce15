import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div `
display: grid;
grid-auto-flow: column;
gap: 4px;
align-items: center;
`

const RemoveButton = styled.button `
    margin: 5px;
    background-color: #541922;
    color: white;
    font-weight: bold;
`

class ShopCartItem extends React.Component {
    render() {
      return (
        <ItemContainer>
          <p>{this.props.cartItem.quantity}x</p>
          <p>{this.props.cartItem.name}</p>
          <RemoveButton onClick={() => this.props.onRemoveProduct(this.props.cartItem.id)}>Remover</RemoveButton>
        </ItemContainer>
      );
    }
  }
  
  export default ShopCartItem;