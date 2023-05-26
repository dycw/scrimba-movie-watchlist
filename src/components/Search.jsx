import { AllPages } from "../enums";
import MainArea from "./MainArea";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { useEffect, useState } from "react";

export default function Search(props) {
  const { setPage, favourites, setFavourites } = props;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log("search results:", searchResults);
  }, [searchResults]);

  return (
    <div>
      <NavBar
        titleText="Find your film"
        buttonText="My Watchlist"
        setPage={setPage}
        targetPage={AllPages.WatchList}
      />
      <MainArea>
        <SearchBar setSearchResults={setSearchResults} />
        <SearchResults
          favourites={favourites}
          setFavourites={setFavourites}
          searchResults={searchResults}
        />
      </MainArea>
    </div>
  );
}
