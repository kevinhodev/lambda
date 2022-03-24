import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import "./index.css";

const SearchBar = ({ placeholder = "Digite algo" }) => {
  return (
    <div className="search-bar">
      <SearchIcon className="search-bar__icon" />
      <input
        className="search-bar__input"
        type="search"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
