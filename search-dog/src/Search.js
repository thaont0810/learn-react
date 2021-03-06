import React, { Component } from "react";
import ReactDom from "react-dom";
import DogList from './DogList';
import axios from "axios";
import Suggestion from './Suggestion';


// const { API_KEY } = "777a0fdf-667f-4194-af4c-53299dd7a360";
const API_URL = "https://thedogapi.com/";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filtered: "",
      // loading: false
    };
  }

  getInfo = () => {
    axios
      .get(
        "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=100"
      )
      .then(({ data }) => {
        this.setState({
          results: data,
          loading: true
        });
      })
      .catch((err) => {
        console.log(err);
      })

  }

  handleSearch = () => {
    this.setState(
      {
        filtered: this.inputValue.value
      },
      () => {
        if (this.state.filtered && this.state.filtered.length > 1) {
          if (this.state.filtered.length % 2 === 0) {
            this.getInfo()
          }
        } else if (!this.state.inputValue) {}
      }
    );
  };

  render() {
      // if(this.state.loading) {
      // console.log(this.state.results);  

        return (
          <div>
            <form action="">
              <input
                className="input"
                type="text"
                placeholder="Search for ..."
                ref={input => (this.inputValue = input)}
                onChange={this.handleSearch.bind(this)}
              />
              <p>{this.state.filtered}</p>
            </form>
            {/* <DogList doglist = {this.state.results}/> */}
            <Suggestion results={this.state.results}/>

          </div>
        )
      // } else {
        // return (
        //   <p>loading</p>
        // )
      // }
  }
}

export default Search;
