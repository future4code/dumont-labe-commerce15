import React from 'react';
import Filter from '././components/filters'

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
      </div>
    );

  }
}

export default App;
