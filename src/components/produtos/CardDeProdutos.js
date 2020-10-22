import React from "react";
import styled from "styled-components";



const CardContainer = styled.div`
  border: 2px solid magenta;
  display: flex;
  flex-direction: column;
  
  
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;

p {
  margin: 5px 0;
}

`;

const BotaoCarrinho = styled.button`
    align-self: center;
    margin: 5px;

`;

const Photos = styled.img`
  width: 200px;
  height: 200px;
  padding-left: 30px;
  padding-top: 30px;
`;


class CardDeProdutos extends React.Component {

  render() {
    const product = this.props.product
    return (
      <CardContainer>
        <div>
          <Photos img src={product.photo} />
          <CardInfo>
            <p> {product.name} </p> 
            <p> R$ {product.value} </p>
            <BotaoCarrinho> Adicionar ao Carrinho</BotaoCarrinho>
          </CardInfo>
          
        </div>
      </CardContainer>
    );
  }
}

export default CardDeProdutos;
