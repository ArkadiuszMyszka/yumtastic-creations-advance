import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as TrashIcon } from '../../images/icons/trash.svg';
import {
  RecipeItemContainer,
  RecipeTitle,
  CookingTime,
  BackgroundImage,
  RecipeDetails,
  RemoveButton,
  SeeRecipeButton,
  RecipeDescription,
  RecipeHeader,
  RecipeFooter,
} from './MyRecipesItem.styled.jsx';

const truncateText = (text, maxWords) => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return text;
};

const MyRecipesItem = ({
  title,
  description,
  cookingTime,
  backgroundImage,
  onRemove,
  recipeLink,
}) => {
  const truncatedDescription = truncateText(description, 15);
  return (
    <RecipeItemContainer>
      <BackgroundImage src={backgroundImage} alt={title} />
      <RecipeDetails>
        <RecipeHeader>
          <RecipeTitle>{title}</RecipeTitle>
          <RemoveButton onClick={onRemove}>
            <TrashIcon />
          </RemoveButton>
        </RecipeHeader>
        <RecipeDescription>{truncatedDescription}</RecipeDescription>
        <RecipeFooter>
          <CookingTime>{cookingTime} min</CookingTime>
          <SeeRecipeButton>
            <Link to={recipeLink}>See Recipe</Link>
          </SeeRecipeButton>
        </RecipeFooter>
      </RecipeDetails>
    </RecipeItemContainer>
  );
};

export default MyRecipesItem;
