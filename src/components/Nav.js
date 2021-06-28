import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
const Nav = ({ libraryStatus, setLibraryStatus }) => {
  const changeLibraryStatusHandler = () => {
    if (libraryStatus) {
      setLibraryStatus(false);
    } else {
      setLibraryStatus(true);
    }
  };
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={changeLibraryStatusHandler}>
        Library
        <FontAwesomeIcon className="nav-button" size={'lg'} icon={faMusic} />
      </button>
    </nav>
  );
};
export default Nav;
