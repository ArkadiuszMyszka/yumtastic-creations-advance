import React, { useState, useEffect } from 'react';
import MainPageTitle from '../../components/MainPageTitle/MainPageTitle.jsx';
import MyRecipesList from '../../components/MyRecipesList/MyRecipesList.jsx';
import Paginator from '../../components/Paginator/Paginator.jsx';
import { OwnerRecipesPage, MyRecipesEmpty } from './MyRecipesPage.styled.jsx';

const MyRecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [totalRecipesCount, setTotalRecipesCount] = useState(0);

  const fetchRecipes = async () => {
    try {
      const response = await fetch('../../recipes.json');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setRecipes(data);
      setTotalRecipesCount(data.length);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <OwnerRecipesPage>
      <MainPageTitle title="My recipes" />
      {recipes.length > 0 ? (
        <>
          <MyRecipesList recipes={recipes} />
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
          <p>No recipes yet. Go to add some recipes!</p>
        </MyRecipesEmpty>
      )}
    </OwnerRecipesPage>
  );
};

export default MyRecipesPage;
