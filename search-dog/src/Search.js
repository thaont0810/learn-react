import React, { Component } from "react";
import ReactDom from "react-dom";
import DogList from "./DogList";
import axios from "axios";
import Suggestions from "./Suggestions";

const API_URL = "https://thedogapi.com/";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchWords: "",
      results: [],
      suggestions: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount = () => {
    axios
      .get(
        "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=100"
      )
      .then(({ data }) => {
        this.setState({
          results: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getSuggestions(searchWords) {
    let r = this.state.results.filter(
      item =>
        item.breeds[0].name.toLowerCase().indexOf(searchWords.toLowerCase()) !== -1
    );
    this.setState({
      results: r
    });
  }

  handleChange(event) {
    const searchWords = event.target.value;
    this.setState({
      searchWords
    });

    if (searchWords.length > 0) {
      const suggestions = this.getSuggestions(searchWords);
      this.setState({
        suggestions
      });
    } else {
      this.setState({
        suggestions: []
      });
    }
  }

  render() {
    // console.log(this.state.results);

    return (
      <div className='container'>
        <form action="">
          <input
            className="input"
            type="text"
            placeholder="Search for ..."
            value={this.state.searchWords}
            onChange={this.handleChange}
          />
          {/* <p>{this.state.inputVal}</p> */}
        </form>
        {/* <DogList doglist = {this.state.results}/> */}
        <Suggestions suggestions={this.state.results} />
      </div>
    );
  }
}

export default Search;
