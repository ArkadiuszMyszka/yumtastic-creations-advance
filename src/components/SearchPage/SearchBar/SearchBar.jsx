import SearchForm from '../../SearchForm/SearchForm.jsx';
import { SearchBarWrapper } from './SearchBar.styled.jsx';
import SearchTypeSelector from '../SearchTypeSelector/SearchTypeSelector.jsx';

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchForm />
      <SearchTypeSelector />
    </SearchBarWrapper>
  );
};
export default SearchBar;
