import styled from "styled-components";

export const AddContainer = styled.div`
  @media screen and (${(p) => p.theme.media.tablet}) {
    display: flex;
  }
  @media screen and (${(p) => p.theme.media.desktop}) {
    display: flex;
    flex-direction: column;
  }
`;

export const TitlePopular = styled.h2`
  line-height: 1;
  display: inline-block;
  padding-bottom: 32px;
  padding-top: 36px;
  font-weight: ${(p) => p.theme.fontWeights.semibold};
  font-size: ${(p) => p.theme.fontSizes.l};
  color: ${(p) =>
    p.mode === "light"
      ? p.theme.colors.subtitleTextColor
      : p.theme.colors.whiteTextColor};

  @media screen and (${(p) => p.theme.media.tablet}) {
    padding-bottom: 40px;
  }
`;
export const RecipeUl = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (${(p) => p.theme.media.tablet}) {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    gap: 32px;
  }

  @media screen and (${(p) => p.theme.media.desktop}) {
    display: flex;
    flex-direction: column;
  }
`;

export const RecipeListItem = styled.li`
  min-width: 343px;

  @media screen and (${(p) => p.theme.media.tablet}) {
    width: 334px;
  }

  @media screen and (${(p) => p.theme.media.desktop}) {
    width: 318px;
  }
`;

export const ImageBox = styled.div`
  border-radius: ${(p) => p.theme.radii.normal};
`;

export const Image = styled.img`
  display: block;
  width: 104px;
  height: 85px;

  @media screen and (${(p) => p.theme.media.tablet}) {
    width: 102px;
  }

  @media screen and (${(p) => p.theme.media.desktop}) {
    width: 97px;
  }
`;

export const AddRecipeCard = styled.div`
  display: flex;
  border-bottom: ${(p) => p.theme.borders.normal};
  border-color: ${(p) => p.theme.colors.popularRecBorder};
  padding-bottom: 13px;
  width: 340px;

  @media screen and (${(p) => p.theme.media.tablet}) {
    width: 330px;
  }

  @media screen and (${(p) => p.theme.media.desktop}) {
    width: 320px;
  }
`;

export const CardTitle = styled.h4`
  font-family: "Poppins", sans-serif;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(p) =>
    p.mode === "light"
      ? p.theme.colors.subtitleTextColor
      : p.theme.colors.whiteTextColor};
`;

export const CardText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: ${(p) => p.theme.fontWeights.regular};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: ${(p) =>
    p.mode === "light"
      ? p.theme.colors.lightGreyTextColor
      : p.theme.colors.whiteTextColor};
  opacity: 0.6;
`;

export const AboutAddRecipe = styled.div`
  padding: 0 13px;
`;
