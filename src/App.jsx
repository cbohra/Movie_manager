// src/App.jsx

import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import fetchMovies from "./fetchMovies";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  handleSearch = async (query) => {
    const movies = await fetchMovies(query);
    this.setState({ movies });
    console.log(this.state);
  };

  render() {
    return (
      <div className="app-container">
        <h1 className="app-title">Movie Manager</h1>
        <SearchBar onSearch={this.handleSearch} />
        {/* <SearchResults movies={this.state.movies} /> */}
      </div>
    );
  }
}

export default App;
