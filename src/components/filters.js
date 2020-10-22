import React from 'react';
import styled from 'styled-components'

const ContainerForInputs = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
border: 1px solid black;
padding: 10px;
height: 80vh;
`

class Filter extends React.Component {



    render() {

        return (
            <div className='Filter'>
                <ContainerForInputs>
                    <h2>Filtros</h2>

                    <label>Valor Mínimo:</label>
                    <input type="number"
                        value={this.props.FilterForMinumum}
                        onChange={this.props.onChangeFilterForMinimum} />

                    <label>Valor Máximo:</label>
                    <input type="number" min="0"
                        value={this.props.FilterForMaximum}
                        onChange={this.props.onChangeFilterForMaximum}
                    />

                    <label>Busca:</label>
                    <input type="text"
                        value={this.props.FilterForName}
                        onChange={this.props.onChangeFilterForName} />

                </ContainerForInputs>
            </div>


        )

    }
}

export default Filter