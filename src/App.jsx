import React from "react";
import "./assets/styles/App.css";
// Importação utilizando o export default.
import Navbar from "./assets/components/Navbar/Navbar";
// Importação utilizando o export direto.
import { Article } from "./assets/components/Article/Article";
import { Counter } from "./assets/components/Counter/Counter";
import { Form } from "./assets/components/Form/Form";

import article1 from "./assets/images/article1.png";
import article2 from "./assets/images/article2.jpg";
import article3 from "./assets/images/article3.png";

// Componente em classe é uma classe que herda a classe Component do React,
// e retorna HTML dentro do método render.

class App extends React.Component {
  // Método responsável por renderizar o conteúdo do componente.
  render() {
    return (
      <>
        <Navbar />
        <Counter />
        <Form />
        <section id="articles">
          <Article
            title="Designing dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            corrupti autem in distinctio quis error accusamus quos quam, odio
            deserunt natus quibusdam. Nulla enim deserunt rem at incidunt unde
            modi."
            thumbnail={article1}
          />
          <Article
            title="Vibrant Portraits of 2020"
            provider="Space News"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            corrupti autem in distinctio quis error accusamus quos quam, odio
            deserunt natus quibusdam. Nulla enim deserunt rem at incidunt unde
            modi."
            thumbnail={article2}
          />
          <Article
            title="36 Days of Malayalam type"
            provider="Spaceflight Now"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            corrupti autem in distinctio quis error accusamus quos quam, odio
            deserunt natus quibusdam. Nulla enim deserunt rem at incidunt unde
            modi."
            thumbnail={article3}
          />
          <Article
            title="Designing dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            corrupti autem in distinctio quis error accusamus quos quam, odio
            deserunt natus quibusdam. Nulla enim deserunt rem at incidunt unde
            modi."
            thumbnail={article1}
          />
        </section>
      </>
    );
  }
}

export default App;
