import {
  useEffect,
  useLayoutEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router";
import { toast } from "react-toastify";

import { List } from "./SearchedRecipesList.styled.js";

import RecipesList from "../RecipesList/RecipesList.jsx";
import EmptyPage from "../EmptySearchPage/EmptySearchPage.jsx";
import Loader from "../../Loader/Loader.jsx";
import Paginator from "../../Paginator/Paginator.jsx";

import {
  selectRecipeByTitle,
  selectRecipesByIngredient,
  selectCurrentPage,
  selectIsLoading,
  selectError,
} from "../../../redux/search/searchSelectors.js";

import { getRecipesByTitle } from "../../../redux/search/searchOperations.js";

import {
  resetRecipeByIngredient,
  setCurrentPage,
  resetCurrentPage,
} from "../../../redux/search/searchSlice.js";

export default function SearchedRecipesList() {
  const searchedList = useSelector(selectRecipeByTitle);
  const serchedIngredList = useSelector(selectRecipesByIngredient);
  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleRecipes, setVisibleRecipes] = useState([]);
  const [searchedForRecipe, setSearchedForRecipe] = useState(false);

  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const listRef = useRef(null);
  const itemsPerPage = 6;

  useEffect(() => {
    if (error) toast.warning("Error:", error);
  }, [error]);

  useEffect(() => {
    if (location.state && location.state.from === "/main") {
      const params = Object.fromEntries(searchParams.entries());
      const { q } = params;
      const title = searchParams.get("q");
      if (q && q !== "") {
        dispatch(resetCurrentPage());
        dispatch(resetRecipeByIngredient());
        dispatch(getRecipesByTitle(title)).then(() => {
          setSearchedForRecipe(true);
        });
        console.log("searchRecipeList empty q");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleRecipeList = useCallback(() => {
    let visibleList =
      searchedList?.length > 0
        ? searchedList
        : serchedIngredList?.map((i) => i);
    setVisibleRecipes(visibleList);
  }, [searchedList, serchedIngredList]);

  useEffect(() => {
    visibleRecipeList();
  }, [visibleRecipeList]);

  const handlePageChange = useCallback(
    (pageNumber) => {
      dispatch(setCurrentPage(pageNumber));
      listRef.current?.scrollIntoView({ behavior: "smooth" });
      console.log("page change");
    },
    [dispatch]
  );

  const currentPageData = visibleRecipes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {(windowWidth >= 1280 ? visibleRecipes : currentPageData)?.length ||
          0 ? (
            <List ref={listRef}>
              {(windowWidth >= 1280 ? visibleRecipes : currentPageData)
                .slice(
                  0,
                  windowWidth >= 1280
                    ? 12
                    : (windowWidth >= 1280 ? visibleRecipes : currentPageData)
                        .length
                )
                .map(({ _id: recipeId, title }) => (
                  <RecipesList key={recipeId} id={recipeId} title={title} />
                ))}
            </List>
          ) : searchedForRecipe ? (
            <EmptyPage>Try looking for something else...</EmptyPage>
          ) : (
            <EmptyPage>Search for recipe</EmptyPage>
          )}
          {windowWidth < 1280 && visibleRecipes.length !== 0 && (
            <Paginator
              totalItems={visibleRecipes}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </>
  );
}

/* <>
      {isLoading && !error && <Loader />}
      {!isLoading && recipes && recipes.length !== 0 ? (
        <RecipesList recipes={recipes} />
      ) : (
        <EmptyPage text="Try looking for something else..." />
      )}
    </> */
