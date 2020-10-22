import React from "react";
import styled from "styled-components";
import CardDeProdutos from '../produtos/CardDeProdutos.js'

const ProdutosContainer = styled.div`
    border: 3px dotted #F228C6;
    padding: 4px;
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
    state = {
    sort: 'crescente',

 } 

  onChangeOrdenar = (event) => {
    this.setState({sort: event.target.value})

  }

    render(){
        return (
        <ProdutosContainer>
            <ProdutosHeader>
              <p> Quantidade de Produtos: {this.props.products.length} </p>
              <label>
                Ordenação:
                <select value={this.state.sort} onChange={this.onChangeOrdenar}>
                  <option value={'crescente'}>Crescente</option>
                  <option value={'decrescente'}>Decrescente</option>
                </select>
              </label>
            </ProdutosHeader>
            <ProdutosTabela>
              {this.props.products.map((product) => {
                return <CardDeProdutos product={product} onAddProduct={this.props.onAddProduct}/>;

              })}
              
            </ProdutosTabela>
        </ProdutosContainer>
        );
            
    }

}

export default Produtos
