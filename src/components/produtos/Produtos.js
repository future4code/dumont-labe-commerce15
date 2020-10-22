import React from "react";
import styled from "styled-components";
import CardDeProdutos from '../produtos/CardDeProdutos.js'

const ProdutosContainer = styled.div`
    border: 1px solid magenta;
`;

const ProdutosHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`;

const ProdutosTabela = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr)

`

class Produtos extends React.Component{
    render(){
        return (
        <ProdutosContainer>
            <ProdutosHeader>
              <p> Quantidade de Produtos: 10</p>
              <label>
                Ordenação:
                <select>
                  <option>Crescente</option>
                  <option>Decrescente</option>
                </select>
              </label>
            </ProdutosHeader>
            <ProdutosTabela>
              {this.props.products.map((product) => {
                return <CardDeProdutos product={product} />;

              })}
              
            </ProdutosTabela>
        </ProdutosContainer>
        );
            
    }

}

export default Produtos
