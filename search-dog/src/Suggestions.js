import React, { Component } from "react";
import ReactDom from "react-dom";
// import "./suggestion.css";

class Suggestions extends Component {
  render() {
    const { suggestions } = this.props;
    //  console.log(suggestions);

    const dogItem = suggestions.map(item => (
      <li className="dog-item" key={item.id}>
        <p className="dog-name">{item.breeds[0].name}</p>
        <img src={item.url} alt={item.breeds[0].name} />
      </li>
    ));
    return <ul className="dog-list">{dogItem}</ul>;
  }
}

export default Suggestions;
