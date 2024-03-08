import React from 'react';
import { useSelector } from 'react-redux';
import MyRecipesItem from '../MyRecipesItem/MyRecipesItem.jsx';

const MyRecipesList = () => {
  const recipes = useSelector(state => state.my_recipes.items);

  return (
    <div>
      {recipes.map(recipe => (
        <MyRecipesItem
          key={recipe.id}
          title={recipe.title}
          description={recipe.description}
          cookingTime={recipe.time}
          backgroundImage={recipe.thumb || '../../images/graphics/recipe.jpg'}
          // onRemove={() => handleRemoveRecipe(recipe.id)}
          recipeLink={`/recipes/${recipe.id}`}
        />
      ))}
    </div>
  );
};

export default MyRecipesList;

// Do stylowania pobieranie danych z pliku recipes json

// import React, { useState, useEffect } from 'react';
// import MyRecipesItem from '../MyRecipesItem/MyRecipesItem.jsx';
// import recipesData from '../../recipes.json';

// const MyRecipesList = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     setRecipes(recipesData.slice(0, 4)); // Ograniczam do 4 przepisów
//   }, []);

//   return (
//     <div>
//       {recipes.map(recipe => (
//         <MyRecipesItem
//           key={recipe.id}
//           title={recipe.title}
//           description={recipe.description}
//           cookingTime={recipe.time}
//           backgroundImage={recipe.thumb || '../../images/graphics/recipe.jpg'}
//           // onRemove={() => handleRemoveRecipe(recipe.id)}
//           recipeLink={`/recipes/${recipe.id}`}
//         />
//       ))}
//     </div>
//   );
// };

// export default MyRecipesList;
