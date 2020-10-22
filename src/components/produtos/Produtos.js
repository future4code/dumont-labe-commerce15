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
    state = {
    sort: 'DECRESCENTE',

 } 

  getListaFiltrada = () =>{
    return this.props.products
      .filter((product) => product.value <= this.props.FilterForMaximum)
      .filter((product) => product.value >= this.props.FilterForMinumum)
      .filter((product) => product.name.includes(this.props.FilterForName))
      .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.value - b.value : b.value - a.value)

    
  }

  onChangeOrdenar = (event) => {
    this.setState({sort: event.target.value})

  }

    render(){
      const listaFiltrada = this.getListaFiltrada()
        return (
        <ProdutosContainer>
            <ProdutosHeader>
              <p> Quantidade de Produtos: {listaFiltrada.length} </p>
              <label>
                Ordenação:
                <select value={this.state.sort} onChange={this.onChangeOrdenar}>
                  <option value={'CRESCENTE'}>Crescente</option>
                  <option value={'DECRESCENTE'}>Decrescente</option>
                </select>
              </label>
            </ProdutosHeader>
            <ProdutosTabela>
              {listaFiltrada.map((product) => {
                return <CardDeProdutos product={product} />;

              })}
              
            </ProdutosTabela>
        </ProdutosContainer>
        );
            
    }

}

export default Produtos
