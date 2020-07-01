import React, { Component } from 'react';

// function component
const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Nome</th>
        <th>Tipo</th>
        <th>Polegada</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
}

// function component -- pros como parâmetro
const TableBody = props => {

  const rows = props.tools.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.type}</td>
        <td>{row.inch}</td>
        <td><button onClick={ () => {props.removeTool(index)}} className="waves-effect waves-light btn light-green darken-4">Remover</button></td>
      </tr>
    );
  });

// a kew no react serve para o react saber qual elemento está sendo alterado

  return (
    <tbody>
      {rows}
    </tbody>
  );
}


class Table extends Component {


  render() {
    // tools que vem do array do App.js
    const { tools, removeTool } = this.props;

    return (
      <table className="centered highlight">
        <TableHead />
        <TableBody tools={tools} removeTool={removeTool}/>
      </table>
    );
  }

}
export default Table;