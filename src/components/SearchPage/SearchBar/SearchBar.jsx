import SearchForm from '../../SearchForm/SearchForm.jsx';
import SearchTypeSelector from '../SearchTypeSelector/SearchTypeSelector.jsx';
import { SearchBarWrapper } from './SearchBar.styled.jsx';

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchForm />
      <SearchTypeSelector />
    </SearchBarWrapper>
  );
};
export default SearchBar;
