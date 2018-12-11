import React, { Component } from "react";
import "../App.css";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="line" />

        <div className="item">
          <div className="avatar">
            <img
              src="http://www.croop.cl/UI/twitter/images/doug.jpg"
              alt="Doug"
            />
          </div>
          <span className="time">An hour ago</span>
          <p>Ate lunch</p>
          <div className="commentCount">2</div>
        </div>

        <div className="item">
          <div className="avatar">
            <img
              src="http://www.croop.cl/UI/twitter/images/doug.jpg"
              alt="Doug"
            />
          </div>
          <span className="time">10am</span>
          <p>Ate lunch</p>
          <div className="commentCount">2</div>
        </div>

        <div className="item">
          <div className="avatar">
            <img
              src="http://www.croop.cl/UI/twitter/images/doug.jpg"
              alt="Doug"
            />
          </div>
          <span className="time">2:21am</span>
          <p>Ate lunch</p>
          <div className="commentCount">2</div>
        </div>
      </div>
    );
  }
}
export default Content;
