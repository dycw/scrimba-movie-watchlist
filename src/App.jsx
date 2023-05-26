import "./App.css";
import Search from "./components/Search";
import WatchList from "./components/WatchList";
import { AllPages } from "./enums";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState(AllPages.WatchList);
  return (
    <div>
      {page === AllPages.Search && <Search setPage={setPage} />}
      {page === AllPages.WatchList && <WatchList setPage={setPage} />}
    </div>
  );
}
