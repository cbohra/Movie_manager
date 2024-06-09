// src/components/SearchResults.jsx

import React from "react";
import MovieCard from "./MovieCard";

class SearchResults extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="search-results-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default SearchResults;
