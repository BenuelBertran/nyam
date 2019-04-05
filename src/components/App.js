import React, {Component} from 'react';
import Main from './Main';
import 'index.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      productsData: []
    };
  };

  componentDidMount() {
    const remoteData = `${process.env.PUBLIC_URL}/data/productsData.json`;
    
    fetch(remoteData)
    .then((response) => response.json())
    .then(data => this.setState({productsData: data}))
    .catch(alert)
  };

  render () {
    const {productsData} = this.state;

    return (
      <Main
        header="Кошачий корм Нямушка"
        productsData={productsData}
      />
    )
  }
};

export default App;
