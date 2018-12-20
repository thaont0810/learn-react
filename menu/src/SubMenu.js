import React, { Component } from "react";
import ReactDOM from "react-dom";

class SubMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropDown: false
    };
  }
  
  render() {
    const { menu } = this.props;

    let dropDownClass = "dropdown";
    if (this.state.dropDown) {
      dropDownClass += " show";
    }

    if (!menu.dropdown) {
      return null;
    } else {
      return (
        <ul className={dropDownClass}>
          {menu.dropdown.map((sub) => {
            return (
              <li className="">
                <a>{sub.title}</a>
              </li>
            );
          })}
        </ul>
      );
    }
  }
}

export default SubMenu;
