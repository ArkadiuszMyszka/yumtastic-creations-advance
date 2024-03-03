import React from 'react';
import {
  StyledTitle,
  SquareFirst,
  SquareSecond,
  SquareBlack,
  Section,
} from './MainPageTitle.Styled.jsx';

const MainPageTitle = ({ title }) => {
  return (
    <Section>
      <StyledTitle>{title}</StyledTitle>
      <SquareFirst />
      <SquareBlack />
      <SquareSecond />
    </Section>
  );
};

export default MainPageTitle;
