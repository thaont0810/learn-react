import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className="demo">
        <div className="notificationsFrame">
          <div className="panel">
            <Header title ='Timeline'/>
            <Content />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
