import React, { Component } from 'react';

class Form extends Component {

  // o constructor serve para alterar os dados de um state recebendo o props
  constructor(props) {
    // super manda os dados do constructor para o Component
    super(props);

    this.initialState = {
      name: '',
      type: '',
      inch: '',
    }
    // o initialState recebe vazio e o state se iguala ao initialState
    this.state = this.initialState;
  }

  eventListener = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

  };

  formSubmit = () => {
    this.props.submitListener(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, type, inch } = this.state;
    // as chaves serão acessadas por meio do value

    return (
      <form>
        <div>
          <h4>Adicionar Ferramenta</h4>
        </div>
        <div className="row">
          <div className="input-field col s4">
            <label className="input-field" htmlFor="name">Nome: </label>
            <input
              className="validate"
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={this.eventListener}
            />
          </div>
          <div className="input-field col s4">
            <label className="input-field" htmlFor="type">Tipo: </label>
            <input
              className="validate"
              id="type"
              type="text"
              name="type"
              value={type}
              onChange={this.eventListener}
            />
          </div>
          <div className="input-field col s4">
            <label className="input-field" htmlFor="inch">Polegada: </label>
            <input
              className="validate"
              id="inch"
              type="text"
              name="inch"
              value={inch}
              onChange={this.eventListener}
            />
          </div>
        </div>
        <div>
          <button type="button" className="waves-effect waves-light btn light-green darken-4" onClick={this.formSubmit}>Salvar</button>
        </div>
      </form>
    );
  };
};

export default Form;
