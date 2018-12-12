import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Content from "./Content";
import Header from "./Header";
import * as serviceWorker from "./serviceWorker";
// import Timeline from './components/Timeline/Timeline';

const activitiesArr = [
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
      id: 1,
      name: "Nate",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [
      {
        from: "Ari",
        text: "Me too!"
      }
    ]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up",
    user: {
      id: 2,
      name: "Ari",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [
      {
        from: "Nate",
        text: "Im so jealous!"
      }
    ]
  },
  {
    timestamp: new Date().getTime(),
    text: "Shop",
    user: {
      id: 3,
      name: "Jane",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [
      {
        from: "Nate",
        text: "Go with me!"
      }
    ]
  }
];

export const load = () => {
  // ReactDOM.render(
  //   <Header title='Timeline' />,
  //   document.getElementById('header'));

  ReactDOM.render(
    <div className="notificationsFrame">
      <div className="panel">
        <Header title="Timeline" />
        <Content activities={activitiesArr} />
      </div>
    </div>,
    document.getElementById("demo1")
  );
};

try {
  setTimeout(load, 100);
} catch (e) {
  console.log("e ->", e);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
