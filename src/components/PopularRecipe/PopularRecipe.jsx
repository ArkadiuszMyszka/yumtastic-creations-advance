import { getRecipesPopular } from '../../redux/recipes/recipesOperations.jsx';
import { selectRecipesPopular } from '../../redux/recipes/recipesSelectors.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useMedia } from '../../hooks/useMedia.jsx';

import {
  AboutAddRecipe,
  AddContainer,
  AddRecipeCard,
  CardText,
  CardTitle,
  Image,
  ImageBox,
  RecipeListItem,
  RecipeUl,
  TitlePopular,
} from './PopularRecipe.styled.jsx';
import { Link } from 'react-router-dom';

const PopularRecipe = ({ mode }) => {
  const { isMobile, isTablet } = useMedia();
  let numCard;

  if (isMobile) {
    numCard = 4;
  } else if (isTablet) {
    numCard = 2;
  } else {
    numCard = 4;
  }

  const dispatch = useDispatch();
  const popular = useSelector(selectRecipesPopular);
  useEffect(() => {
    dispatch(getRecipesPopular());
  }, [dispatch]);

  return (
    <AddContainer>
      <div>
        <TitlePopular mode={mode}>Popular recipe</TitlePopular>
        <RecipeUl>
          {popular.length > 0 ? (
            popular
              .slice(0, numCard)
              .map(({ _id, title, description, thumb }) => (
                <RecipeListItem key={_id}>
                  <Link to={`/recipe/$(_id)`}>
                    <AddRecipeCard>
                      <ImageBox>
                        <Image src={thumb} alt={title} />
                      </ImageBox>

                      <AboutAddRecipe>
                        <CardTitle mode={mode}>
                          {title.length > 15
                            ? `${title.substring(0, 20)}...`
                            : title}
                        </CardTitle>
                        <CardText mode={mode}>
                          {description.length > 80
                            ? `${description.substring(0, 80)}...`
                            : description}
                        </CardText>
                      </AboutAddRecipe>
                    </AddRecipeCard>
                  </Link>
                </RecipeListItem>
              ))
          ) : (
            <p>Something went wrong</p>
          )}
        </RecipeUl>
      </div>
    </AddContainer>
  );
};

export default PopularRecipe;
