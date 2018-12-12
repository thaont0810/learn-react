import React, { Component } from "react";
// import Header from "./Header";
// import Content from './Content';

class App extends Component {
  render() {
    const { activities } = this.props;
    return (
      <div className="demo">
        <div className="notificationsFrame">
          <div className="panel">
            {/* <Header title= 'Timeline' />
            <Content  activities={activities}/> */}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
