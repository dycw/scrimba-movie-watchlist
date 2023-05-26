// @flow
import { useEffect, useState } from "react";

export default function SearchBar(props) {
  const { setSearchResults } = props;
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const url =
    //   "http://www.omdbapi.com/?" +
    //   new URLSearchParams({ apikey: "1f19cf3a", s: searchText });
    // const resp = await fetch(url);
    // const data = await resp.json();
    const rawData = [
      {
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNTVjNTI3NjUtYTBhZS00OWQzLWJmOTctZjc2MmI0Mjk4Mzc2XkEyXkFqcGdeQXVyMTgxOTUwMTI@._V1_SX300.jpg",
        Title: "Sta se zgodi kad se ljubav rodi",
        Type: "movie",
        Year: "1984",
        imdbID: "tt0088175",
      },
    ];
    const searchResults = rawData.map(rawDatumToSearchResult);
    setSearchResults(searchResults);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search for a movie"
        value={searchText}
      />
      <button>Search</button>
    </form>
  );
}

const rawDatumToSearchResult = (datum) => ({
  poster: datum.Poster,
  title: datum.Ttile,
  type: datum.Type,
  year: datum.Year,
  imdbID: datum.imdbID,
});
