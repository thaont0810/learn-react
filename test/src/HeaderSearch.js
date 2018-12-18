import React, { Component } from "react";
import "./styles/header.css";
import SearchForm from './SearchForm';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVisible: false
    };
  }

  showSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible
    });
  }

  render() {
    let searchInputClasses = ["searchInput"];
    if (this.state.searchVisible) {
      searchInputClasses.push("active");
    }
    return (
      <div className="header">
        <div className="menuIcon">
          <div className="dashTop" />
          <div className="dashBottom" />
          <div className="circle" />
        </div>
        <span className="title">{this.props.title}</span>
        {/* <input
          type="text"
          className={searchInputClasses.join(" ")}
          placeholder="Search..."
        /> */}
        <SearchForm
          searchVisible={this.state.searchVisible}
          onSubmit={this.props.onSubmit} />
        <div
          onClick={this.showSearch.bind(this)}
          className="fa fa-search searchIcon"
        />
      </div>
    );
  }
}

Header.defaultProps = {
  title: "aaaa"
};
export default Header;
