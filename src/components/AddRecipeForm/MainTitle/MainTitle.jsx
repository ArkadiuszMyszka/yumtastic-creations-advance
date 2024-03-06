import React from "react";

import { Section, Title } from "../../AddRecipeForm/AddRecipeForm.styled.jsx";

import { SquareFirst } from "../AddRecipeForm.styled.jsx";
import { SquareBlack } from "../../AddRecipeForm/AddRecipeForm.styled.jsx";
import { SquareSecond } from "../../AddRecipeForm/AddRecipeForm.styled.jsx";
export const MainTitle = ({ title }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <SquareFirst />
      <SquareBlack />
      <SquareSecond />
    </Section>
  );
};
