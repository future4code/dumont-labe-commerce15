import React from 'react';
import Filter from '././components/filters'
import styled from 'styled-components';
import Produtos from './components/produtos/Produtos.js';
import ShopCart from './components/shoppingcart/cartShopping.js'


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
    value: 70,
    photo:
      "https://pictures.bagy.app/pictures/store_1413/products/6f00bd0d-0345-46a1-89bb-1f10a38a5164.png",
  },

  {
    id: 2,
    name: "Camiseta Jurassic",
    value: 70,
    photo:
      "https://pictures.bagy.app/pictures/store_1413/products/45bc128d-dcc2-4cb2-a24e-358bb204eaf6.png",
  },

  {
    id: 3,
    name: "Aerolito do Chapolin",
    value: 10000.0,
    photo:
      "https://th.bing.com/th/id/OIP.Ut75TIokf0yMw4eCyuaUgAHaEK?w=315&h=180&c=7&o=5&pid=1.7",
  },

  {
    id: 4,
    name: "Pacote de Viagem para Marte",
    value: 5000.0,
    photo:
      "https://th.bing.com/th/id/OIP.PXLndE0b8dr_cyZPgdQPYAHaIL?w=152&h=180&c=7&o=5&pid=1.7",
  },

  {
    id: 5,
    name: "Roupa de Astronauta Infantil",
    value: 150.00,
    photo:
      "http://blogdebrinquedo.com.br/wp-content/uploads/2009/05/mochila-astronauta-02.jpg",
  },

  {
    id: 6,
    name: "Ônibus Espacial",
    value: 8001.00,
    photo:
      "https://1.bp.blogspot.com/-mxZ5paFNc48/WJxZM9VikkI/AAAAAAAAN8U/8hQNVDzgxZ0Kg6KiirAv75yUZEfiPneJQCLcB/s1600/NASA%2BDISCOVERY.jpg",
  },
];

class App extends React.Component {

  state = {
    FilterForMinumum: '',
    FilterForMaximum: '',
    FilterForName: '',
    productsCart: []
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

  onAddProduct = (productId) => {
    const productInCart = this.state.productsCart.find(product => productId === product.id)

    if(productInCart){

      const newProductInCart = this.state.productsCart.map(product => {
        if (productId === product.id){
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }

        return product
      
      })  
        this.setState({productsCart: newProductInCart})
    } else {
      const addingProduct = products.find(product => productId === product.id)

      const newProductsInCart = [...this.state.productsCart, {...addingProduct, quantity: 1}]

      this.setState({productsCart: newProductsInCart})
    }
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
          onChangeFilterForName={this.onChangeFilterForName}
        />
        <Produtos
          products={products}
          FilterForMinumum={this.state.FilterForMinumum}
          FilterForMaximum={this.state.FilterForMaximum}
          FilterForName={this.state.FilterForName}
          onAddProduct={this.onAddProduct}
        />
        <ShopCart
        productsCart={this.state.productsCart} />
      </AppContainer>
    );

  }
}

export default App;
