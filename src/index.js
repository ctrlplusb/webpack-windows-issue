import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      System.import('./Foo.js')
        .then(module => {
          this.setState({ DynamicComponent: module.default })
        })
        .catch(err => console.log(err))
    }, 1000);
  }

  render() {
    const { DynamicComponent } = this.state;

    return DynamicComponent
      ? <DynamicComponent />
      : <div>Loading...</div>;
  }
}

console.log('WHAT?')

ReactDOM.render(<App />, document.getElementById('app'));
