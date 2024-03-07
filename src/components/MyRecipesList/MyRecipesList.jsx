// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchUserRecipes,
//   removeUserRecipeAsync,
// } from "../../redux/userRecipes/userRecipesSlice.js";
// import MyRecipesItem from "../MyRecipesItem/MyRecipesItem.jsx";

// const MyRecipesList = () => {
//   const dispatch = useDispatch();
//   const { recipes } = useSelector((state) => state.userRecipes);

//   useEffect(() => {
//     dispatch(fetchUserRecipes());
//   }, [dispatch]);

//   const handleRemoveRecipe = (recipeId) => {
//     dispatch(removeUserRecipeAsync(recipeId));
//   };

//   return (
//     <div>
//       {recipes.map((recipe) => (
//         <MyRecipesItem
//           key={recipe.id}
//           title={recipe.title}
//           description={recipe.description}
//           cookingTime={recipe.time}
//           backgroundImage={recipe.thumb || "../../images/graphics/recipe.jpg"}
//           onRemove={() => handleRemoveRecipe(recipe.id)}
//           recipeLink={`/recipes/${recipe.id}`}
//         />
//       ))}
//     </div>
//   );
// };

// export default MyRecipesList;

// Do stylowania pobieranie danych z pliku recipes json

import React, { useState, useEffect } from 'react';
import MyRecipesItem from '../MyRecipesItem/MyRecipesItem.jsx';
import recipesData from '../../recipes.json';

const MyRecipesList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData.slice(0, 4)); // Ograniczam do 4 przepisów
  }, []);

  return (
    <div>
      {recipes.length === 0 ? (
        <div>
          <img
            src="../images/graphics/look_for_sth_else_veggies.png"
            alt="Placeholder"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <p>No recipes yet. Go to add some recipes!</p>
        </div>
      ) : (
        recipes.map(recipe => (
          <MyRecipesItem
            key={recipe.id}
            title={recipe.title}
            description={recipe.description}
            cookingTime={recipe.time}
            backgroundImage={recipe.thumb || '../../images/graphics/recipe.jpg'}
            // onRemove={() => handleRemoveRecipe(recipe.id)}
            recipeLink={`/recipes/${recipe.id}`}
          />
        ))
      )}
    </div>
  );
};

export default MyRecipesList;
