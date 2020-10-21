import React from "react";
import styled from "styled-components";
import Interestelar from "../img/camisetas/interestelar.png";
import Jurassic from "../img/camisetas/jurassic.png";

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

class CardDeProdutos extends React.Component {

  render() {
    return (
      <CardContainer>
        <div>
          Card de Produtos
          <img src={Interestelar} />
          <CardInfo>
            <p> Produto </p> 
            <p> R$ 69.90 </p>
            <CardDeProdutos> Adicionar ao Carrinho</CardDeProdutos>
          </CardInfo>
          
        </div>
      </CardContainer>
    );
  }
}

export default CardDeProdutos;
