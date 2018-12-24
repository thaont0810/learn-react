import React, { Component } from "react";
import ReactDom from "react-dom";

// const Suggestion = (props) => {
//   const options = props.results.map(r => (
//     <li key={r.id}>
//       {r.name}
//     </li>
//   ))
//   return <ul>{options}</ul>
// }

 class Suggestion extends Component {
   render() {
    //  const {results} = this.props;
     const options = this.props.results.map(r => (
      <li key={r.id}>
        {r.url}
      </li>
    ))
     return (
      <ul>{options}</ul>
     )
   }
 }

export default Suggestion;