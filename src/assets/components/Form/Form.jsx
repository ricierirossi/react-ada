import React from "react";

export class Form extends React.Component {
  constructor() {
    super();
    this.state = { name: "", password: "" };
  }

  render() {
    return (
      <form style={{ marginTop: "40px" }}>
        <input
          type="text"
          placeholder="Nome"
          value={this.state.name}
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        ></input>
        <input
          type="password"
          placeholder="Senha"
          value={this.state.password}
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }}
        ></input>
        <button>Enviar</button>
        <p>Nome: {this.state.name}</p>
        <p>Senha: {this.state.password}</p>
      </form>
    );
  }
}
