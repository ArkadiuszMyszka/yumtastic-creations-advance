import MainPageTitle from "../../components/MainPageTitle/MainPageTitle.jsx";
import SearchBar from "../../components/SearchPage/SearchBar/SearchBar.jsx";
import SearchedRecipesList from "../../components/SearchPage/SearchedRecipesList/SearchedRecipesList.jsx";

export function SearchPage() {
  return (
    <>
      <MainPageTitle title="Search" />
      <SearchBar />
      <SearchedRecipesList />
    </>
  );
}
