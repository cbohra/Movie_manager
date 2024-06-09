// src/components/MovieCard.jsx

import React from "react";
import "../MovieCard.css";

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card-container">
        <img src={movie.image} alt={movie.title} className="movie-card-image" />
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-release-date">{movie.releaseDate}</p>
      </div>
    );
  }
}

export default MovieCard;
