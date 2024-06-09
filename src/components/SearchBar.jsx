// src/components/SearchBar.jsx

import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.query);
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSearch} className="search-bar-form">
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
          placeholder="Search movie"
          className="search-bar-input"
        />
        <button type="submit" className="search-bar-button">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
