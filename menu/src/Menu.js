import React, { Component } from "react";
import ReactDOM from "react-dom";
import SubMenu from "./SubMenu";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropDown: false
    };
  }

  showDropDown() {
    // console.log(11);

    this.setState({
      dropDown: !this.state.dropDown
    });
  }

  render() {
    const { menus } = this.props;
    // console.log(menus);
    // let caret = "nav-item";

    // let dropDownClass = "dropdown";
    // if (this.state.dropDown) {
    //   dropDownClass += " show";
    // }
    let thisMenu = this;

    return (
      <div className="container">
        <ul className="nav">
          {menus.map((menu) => {
            return (
              <li
                className="nav-item"
                onClick={thisMenu.showDropDown.bind(thisMenu)}
              >
                <a href="#" className="nav-link">
                  {menu.title}
                </a>

                <SubMenu menu={menu} />
                {/* <ul className={dropDownClass}>
                  <li className="">
                    <a>sss</a>
                  </li>
                </ul> */}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Menu;
