// src/fetchMovies.js

const fetchMovies = async (query) => {
  const url =
    "https://online-movie-database.p.rapidapi.com/v2/search-advance?country=US&language=en-US";
  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "85f71a4447msh611af711af0d237p199daajsn5d76932ca783",
      "x-rapidapi-host": "online-movie-database.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first: 100,
      after: "",
      includeReleaseDates: false,
      sort: {
        sortBy: "USER_RATING_COUNT",
        sortOrder: "DESC",
      },
      allGenreIds: [
        "Comedy",
        "Horror",
        "Romance",
        "Thriller",
        "Sci-Fi",
        "Drama",
        "Action",
        "Adventure",
        "Animation",
      ],
      anyPrimaryLanguages: ["en"],
      anyPrimaryCountries: ["US"],
      releaseDateRange: {
        end: "2024-12-31",
        start: "2000-01-01",
      },
      aggregateRatingRange: { min: 7 },
      ratingsCountRange: { min: 10000 },
      anyTitleTypeIds: ["movie"],
    }),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Fetch error: ", error);
    return [];
  }
};

export default fetchMovies;
