import { AllPages } from "../enums";
import NavBar from "./NavBar";

export default function Search(props) {
  const { setPage } = props;
  return (
    <div>
      <NavBar
        titleText="Find your film"
        buttonText="My Watchlist"
        setPage={setPage}
        targetPage={AllPages.WatchList}
      />
    </div>
  );
}
