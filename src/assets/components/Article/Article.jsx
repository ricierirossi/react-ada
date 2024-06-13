import React from "react";
import "./styles.css";

// Exportação direta. Não permite importar com outro nome, diferente do export default.
export class Article extends React.Component {
  render() {
    return (
      <article id="article">
        <img
          className="article-images"
          src={this.props.thumbnail}
          alt={this.props.title}
        ></img>
        <div className="article-infos">
          <h2>{this.props.title}</h2>
          <h3>{this.props.provider}</h3>
          <p>{this.props.description}</p>
        </div>
      </article>
    );
  }
}
