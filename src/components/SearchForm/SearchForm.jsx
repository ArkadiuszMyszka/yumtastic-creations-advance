import { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";

import { toast } from "react-toastify";
import { Form, SearchFormInput, SearchButton } from "./SearchForm.styled.js";

import { selectSearchFilter } from "../../redux/search/searchSelectors.js";

import {
  getRecipesByTitle,
  getRecipesByIngredient,
} from "../../redux/search/searchOperations.js";

import {
  resetRecipeByTitle,
  resetRecipeByIngredient,
  resetCurrentPage,
} from "../../redux/search/searchSlice.js";

import { selectOption } from "../SearchPage/SearchTypeSelector/SearchTypeSelector.jsx";

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const selectedOption = useSelector(selectSearchFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.state && location.state.from === "/main") {
      const query = searchParams.get("q");
      setSearchValue(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateQueryString = useCallback(() => {
    if (location.pathname === "/search" && searchValue === "") {
      setSearchParams({});
    }

    if (location.pathname === "/search" && searchValue !== "") {
      switch (selectedOption) {
        case "Title":
          setSearchParams({ q: searchValue });
          break;
        case "Ingredient":
          setSearchParams({ ing: searchValue });
          break;
        default:
          break;
      }
    }
  }, [location.pathname, searchValue, selectedOption, setSearchParams]);

  useEffect(() => {
    updateQueryString();
  }, [updateQueryString]);

  const handleInputChange = (e) => {
    const trimvalue = e.target.value.trim();
    setSearchValue(trimvalue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetCurrentPage());

    if (location.pathname === "/main" && searchValue !== "") {
      dispatch(selectOption("Title"));
      navigate(`/search?q=${searchValue}`, {
        state: { from: "/main" },
      });
      return;
    }

    const params = Object.fromEntries(searchParams.entries());
    const { q, ing } = params;

    const title = searchParams.get("q");
    const ingredient = searchParams.get("ing");

    if (searchValue === "") {
      setSearchParams({});
      toast.info("Enter your query");
      return;
    }

    if (q && q !== "") {
      dispatch(resetRecipeByIngredient());
      dispatch(getRecipesByTitle(title)).then((result) => {
        if (
          result.payload.code === 200 &&
          result.payload.data?.recipe?.length === 0
        ) {
          toast.info(`On request "${title}" found nothing`);
        }
      });
    }
    if (ing && ing !== "") {
      dispatch(resetRecipeByTitle());
      dispatch(getRecipesByIngredient(ingredient)).then((result) => {
        if (
          result.payload.code === 200 &&
          result.payload.data?.recipe?.length === 0
        ) {
          toast.info(`On request "${ingredient}" found nothing`);
        }
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        name="search"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Enter query"
        autoComplete="off"
      />
      <SearchButton type="submit">Search</SearchButton>
    </Form>
  );
};

export default SearchForm;
