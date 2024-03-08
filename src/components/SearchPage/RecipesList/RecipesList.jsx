import { Link } from 'react-router-dom';
import { Thumb, Label, Image, List, ListItem } from './RecipesList.styled.jsx';
import React, { useState, useLayoutEffect } from 'react';

const MAX_TITLE_LENGTH = 25;

const RecipesList = ({ category, title }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const cardsToShow = calculateCardsToShow(windowWidth);

  let displayedTitle = title;

  if (title.length > MAX_TITLE_LENGTH) {
    displayedTitle = `${title.slice(0, MAX_TITLE_LENGTH)}...`;
  }

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function calculateCardsToShow(width) {
    if (width < 768) {
      return 1;
    } else if (width >= 768 && width < 1280) {
      return 2;
    } else {
      return 4;
    }
  }

  return (
    <List>
      {category?.slice(0, cardsToShow).map(({ _id: id, title, thumb }) => {
        return (
          <ListItem key={id}>
            <Link to={`/recipes/${id}`}>
              <Thumb>
                <Image src={thumb} title={title} />
                <Label>{displayedTitle}</Label>
              </Thumb>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export default RecipesList;
