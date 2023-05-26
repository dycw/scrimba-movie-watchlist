// @flow

export default function NavBar(props) {
  const { titleText, buttonText, setPage, targetPage } = props;
  return (
    <nav>
      <h1>{titleText}</h1>
      <button onClick={() => setPage(targetPage)}>{buttonText}</button>
    </nav>
  );
}
