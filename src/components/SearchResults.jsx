// @flow
import SearchResult from "./SearchResult";

export default function SearchResults(props) {
  const { favourites, setFavourites, searchResults } = props;
  return (
    <div>
      {searchResults.map((r) => (
        <SearchResult
          favourites={favourites}
          setFavourites={setFavourites}
          poster={r.poster}
          title={r.title}
          type={r.type}
          year={r.year}
          imdbID={r.imdbID}
        />
      ))}
    </div>
  );
}
