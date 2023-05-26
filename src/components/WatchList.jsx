import { AllPages } from "../enums";
import NavBar from "./NavBar";

export default function WatchList(props) {
  const { setPage } = props;
  return (
    <div>
      <NavBar
        titleText="My Watchlist"
        buttonText="Search for movies"
        setPage={setPage}
        targetPage={AllPages.Search}
      />
    </div>
  );
}
