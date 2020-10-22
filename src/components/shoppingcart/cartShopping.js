import React from "react";
import styled from "styled-components";
import ShopCartItem from './cartShoppingItem'

const CartContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const CartItemContainer = styled.div `
display: grid;
gap: 4px;
`

class ShopCart extends React.Component {
  getTotalValue = () => {
    let totalValue = 0

    for (let product of this.props.productsCart){
      totalValue += product.value * product.quantity
    }
    return totalValue
  }
  render() {
    return (
      <CartContainer>
        <h3>Carrinho:</h3>
        <CartItemContainer>

        {this.props.productsCart.map((product) => {
          return <ShopCartItem cartItem={product} onRemoveProduct={this.props.onRemoveProduct}/>
        })}

        </CartItemContainer>
        <p>Valor Total:R${this.getTotalValue()},00 </p>
      </CartContainer>
    );
  }
}

export default ShopCart;
