import SearchForm from "../../SearchForm/SearchForm.jsx";
import SearchTypeSelector from "../SearchTypeSelector/SearchTypeSelector.jsx";
import { SearchBarWrapper } from "./SearchBar.styled.js";

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchForm />
      <SearchTypeSelector />
    </SearchBarWrapper>
  );
};
export default SearchBar;
