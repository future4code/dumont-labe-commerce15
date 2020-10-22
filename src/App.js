import React from 'react';
import Filter from '././components/filters'
import styled from 'styled-components';
import Produtos from './components/produtos/Produtos.js';
import ShopCart from './components/cartShopping.js'


const AppContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 10px;
    padding: 15px;
  
`;





const products = [
  {
    id: 1,
    name: "Camiseta Interestelar",
    value: 69.9,
    photo: "https://picsum.photos/200/200?a=1",
  },

  {
    id: 2,
    name: "Camiseta Jurassic",
    value: 69.9,
    photo: "https://picsum.photos/200/200?a=2",
  },

  {
    id: 3,
    name: "Aerolito do Chapolin",
    value: 10000.0,
    photo: "https://picsum.photos/200/200?a=3",
  },

  {
    id: 4,
    name: "Pacote de Viagem para Marte",
    value: 69.9,
    photo: "https://picsum.photos/200/200?a=4",
  },

  {
    id: 5,
    name: "Roupa de Astronauta Infantil",
    value: 69.9,
    photo: "https://picsum.photos/200/200?a=5",
  },

  {
    id: 6,
    name: "Ônibus Espacial",
    value: "A combinar",
    photo: "https://picsum.photos/200/200?a=6",
  },
];

class App extends React.Component {

  state = {
    FilterForMinumum: '',
    FilterForMaximum: '',
    FilterForName: '',
    Cart: []
  }

  onChangeFilterForMinimum = (event) => {
    this.setState({ FilterForMinumum: event.target.value })
  }

  onChangeFilterForMaximum = (event) => {
    this.setState({ FilterForMaximum: event.target.value })
  }

  onChangeFilterForName = (event) => {
    this.setState({ FilterForName: event.target.value })
  }

  render() {

    return (
      <AppContainer>
        <Filter
          FilterForMinumum={this.state.FilterForMinumum}
          FilterForMaximum={this.state.FilterForMaximum}
          FilterForName={this.state.FilterForName}
          onChangeFilterForMinimum={this.onChangeFilterForMinimum}
          onChangeFilterForMaximum={this.onChangeFilterForMaximum}
          onChangeFilterForName={this.onChangeFilterForName} />
        <Produtos products={products} />
        <ShopCart />
      </AppContainer>
    );

  }
}

export default App;
