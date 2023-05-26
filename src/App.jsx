// @flow
import "./App.css";
import Search from "./components/Search";
import WatchList from "./components/WatchList";
import { AllPages } from "./enums";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState(AllPages.Search);
  const [favourites, setFavourites] = useState(new Set());

  return (
    <div>
      {page === AllPages.Search && (
        <Search
          setPage={setPage}
          favourites={favourites}
          setFavourites={setFavourites}
        />
      )}
      {page === AllPages.WatchList && (
        <WatchList setPage={setPage} favourites={favourites} />
      )}
    </div>
  );
}
