export default function SearchResult(props) {
  const { favourites, setFavourites, poster, title, type, year, imdbID } =
    props;

  const isFavourite = favourites.contains;
  const handleClick = () => {};

  return (
    <div>
      <img src={poster} alt="poster" />
      <p>{title}</p>
      <p>type: {type}</p>
      <p>year: {year}</p>
      <p>imdbID: {imdbID}</p>
      <button>Add to favourite</button>
    </div>
  );
}
