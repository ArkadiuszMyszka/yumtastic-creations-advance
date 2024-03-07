import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainPageTitle from '../../components/MainPageTitle/MainPageTitle.jsx';
import MyRecipesList from '../../components/MyRecipesList/MyRecipesList.jsx';
import Paginator from '../../components/Paginator/Paginator.jsx';
import {
  OwnerRecipesPage,
  MyRecipesEmpty,
  StyledLink,
} from './MyRecipesPage.styled.jsx';
import { getRecipes } from '../../redux/myRecipes/myRecipesOperations.jsx';

const MyRecipesPage = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.my_recipes.items);
  const totalRecipesCount = useSelector(state => state.my_recipes.total);

  useEffect(() => {
    dispatch(getRecipes({ page: 1, limit: 4 }));
  }, [dispatch]);

  return (
    <OwnerRecipesPage>
      <MainPageTitle title="My recipes" />
      {recipes.length > 0 ? (
        <>
          <MyRecipesList />
          {totalRecipesCount > 4 && (
            <Paginator totalRecipesCount={totalRecipesCount} />
          )}
        </>
      ) : (
        <MyRecipesEmpty>
          {/* <img
            src="../../images/graphics/recipe.jpg"
            alt="Placeholder"
            style={{ maxWidth: "100%", height: "auto" }}
          /> */}
          <p>
            No recipes yet. Go to{' '}
            <StyledLink to="/add">add some recipes</StyledLink>!
          </p>
        </MyRecipesEmpty>
      )}
    </OwnerRecipesPage>
  );
};

export default MyRecipesPage;
