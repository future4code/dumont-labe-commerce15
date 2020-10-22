import React from 'react';
import Filter from '././components/filters'
import styled from 'styled-components';
import './App.css';
import Produtos from './components/produtos/Produtos.js'
import Interestelar from "./components/img/camisetas/interestelar.png";
import Jurassic from "./components/img/camisetas/jurassic.png"
import Aerolito from "./components/img/aerolitos/aerolitos.png"

const AppContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3 fr 1 fr;
    gap: 10px;
`;

// const Products = [
//   {
//     id: 1,  
//     name: "Camiseta Interestelar",
//     value: 69.9,
//     image: { Interestelar}
//   },

//   {
//     id: 2,
//     name: "Camiseta Jurassic",
//     value: 69.9,
//     image: { Jurassic }
    
//   },

//   {
//     id: 3,
//     name: "Aerolito do Chapolin",
//     value: 10000.00,
//     image: { Aerolito }
//   },

//   // {
//   //   id: 4,
//   //   name: "Pacote de Viagem para Marte",
//   //   value: 69.9,
//   //   image: 
//   // },

//   // {
//   //   id: 5,
//   //   name: "Produto 5",
//   //   value: 69.9,
//   //   image: ;
    
//   // },
// ];

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
      <div className="App">
        <Filter
          FilterForMinumum={this.state.FilterForMinumum}
          FilterForMaximum={this.state.FilterForMaximum}
          FilterForName={this.state.FilterForName}
          onChangeFilterForMinimum={this.onChangeFilterForMinimum}
          onChangeFilterForMaximum={this.onChangeFilterForMaximum}
          onChangeFilterForName={this.onChangeFilterForName} />
        <Produtos />
      </div>
    );

  }
}

export default App;
