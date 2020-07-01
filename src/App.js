import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import Header from './Header';
import Table from './Table';
import Form from './Form';
import Footer from './Footer'

class App extends Component {

  state = {
    tools: [
      {
        name: 'Chave de Fenda',
        type: 'Fenda',
        inch: '10"'
      },
      {
        name: 'Chave Inglesa',
        type: 'Boca',
        inch: '12"'
      },
      {
        name: 'Chave Philips',
        type: 'Philips',
        inch: '10"'
      },
      {
        name: 'Chave de Boca',
        type: 'Combinada',
        inch: '13"'
      },
      {
        name: 'Chave L',
        type: 'L',
        inch: '19"'
      }
    ]
  };

  removeTool = index => {

    const { tools } = this.state;

    this.setState({
      tools: tools.filter((tool, CurIndex) => {
        return CurIndex !== index;
      }),
    });
  }

  submitListener = tool => {
    this.setState({ tools: [...this.state.tools, tool] })
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <Table tools={this.state.tools} removeTool={this.removeTool} />
          <Form submitListener={this.submitListener} />
        </div>
        <Footer />
      </Fragment>
    );
  };


};

export default App;
