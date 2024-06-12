import React from "react";
import "./assets/styles/App.css";
import Navbar from "./assets/components/Navbar/Navbar";

// Componente em classe é uma classe que herda a classe Component do React,
// e retorna HTML dentro do método render.

class App extends React.Component {
  // Método responsável por renderizar o conteúdo do componente.
  render() {
    return <Navbar />;
  }
}

export default App;
