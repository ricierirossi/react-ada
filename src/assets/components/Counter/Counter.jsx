import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  render() {
    return (
      <div style={{ marginTop: "20px", marginLeft: "20px" }}>
        <h1>{this.state.counter}</h1>
        <div>
          <button
            onClick={() => this.setState({ counter: this.state.counter - 1 })}
          >
            Diminuir
          </button>
          <button
            onClick={() =>
              // Evita que o estado seja usado sem ter sido alterado em uma chamada anterior.
              this.setState((prevState) => ({
                counter: prevState.counter + 1,
              }))
            }
          >
            Aumentar
          </button>
        </div>
      </div>
    );
  }
}
