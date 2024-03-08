import styled from 'styled-components';

export const RecipeItemContainer = styled.div`
  max-height: 152px;
  border-radius: ${p => p.theme.radii.normal};
  margin: 18px 16px;
  padding: 14px 9px;
  font-family: Poppins;
  font-weight: ${p => p.theme.media.medium};
  background-color: ${p => p.theme.colors.bcgWhiteColor};
  display: grid;
  grid-template-columns: 124px auto;
  gap: 0 14px;

  @media screen and (${p => p.theme.media.tablet}) {
    grid-template-columns: 232px auto;
    gap: 0 24px;
    max-height: 288px;
    padding: 28px 24px;
    margin: 32px 40px;
  }

  @media screen and (${p => p.theme.media.normal}) {
    padding: 40px 40px;
    grid-template-columns: 324px auto;
    max-height: 404px;
    gap: 0 54px;
    margin: 50px 100px;
  }
`;
export const BackgroundImage = styled.img`
  width: 124px;
  height: 124px;
  border-radius: ${p => p.theme.radii.normal};

  @media screen and (${p => p.theme.media.tablet}) {
    width: 228px;
    height: 232px;
  }

  @media screen and (${p => p.theme.media.normal}) {
    width: 318px;
    height: 324px;
  }
`;

export const RecipeDetails = styled.div`
  display: grid;
  gap: 14px 0;
  flex-direction: column;
  flex: 1;

  @media screen and (${p => p.theme.media.tablet}) {
    max-height: 232px;
  }

  @media screen and (${p => p.theme.media.normal}) {
    max-height: 100%;
  }
`;

export const RecipeHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RecipeTitle = styled.h3`
  padding-top: 6px;
  margin: 0 10px 0 0;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.middleGreyTextColor};
  font-family: Poppins;
  font-weight: ${p => p.theme.media.medium};
  line-height: 1em;

  @media screen and (${p => p.theme.media.tablet}) {
    padding-top: 0;
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 1.2em;
  }

  @media screen and (${p => p.theme.media.normal}) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const RemoveButton = styled.button`
  background-color: ${p => p.theme.colors.greenBgColor};
  width: 24px;
  height: 24px;
  border: none;
  color: ${p => p.theme.colors.bcgWhiteColor};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (${p => p.theme.media.tablet}) {
    width: 38px;
    height: 38px;
  }

  @media screen and (${p => p.theme.media.normal}) {
    width: 44px;
    height: 44px;
  }

  svg {
    width: 14px;
    height: 14px;

    @media screen and (${p => p.theme.media.tablet}) {
      width: 22px;
      height: 22px;
    }

    @media screen and (${p => p.theme.media.normal}) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const RecipeDescription = styled.p`
  margin: 0;
  font-size: ${p => p.theme.fontSizes.x};
  color: ${p => p.theme.colors.middleGreyTextColor};
  font-family: Poppins;
  font-weight: ${p => p.theme.media.normal};
  letter-spacing: 0.02em;
  line-height: 1.2em;

  @media screen and (${p => p.theme.media.tablet}) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (${p => p.theme.media.normal}) {
    font-size: ${p => p.theme.fontSizes.xm};
  }
`;

export const RecipeFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CookingTime = styled.p`
  margin: 0;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1em;
  color: ${p => p.theme.colors.middleGreyTextColor};
  align-self: flex-end;
`;

export const SeeRecipeButton = styled.button`
  margin: 0;
  height: 27px;
  width: 87px;
  background-color: ${p => p.theme.colors.greenBgColor};
  text-decoration: none;
  font-family: Poppins;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.x};
  border: none;
  align-self: flex-end;
  border-radius: 24px 44px;
  cursor: pointer;

  @media screen and (${p => p.theme.media.tablet}) {
    width: 138px;
    height: 45px;
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (${p => p.theme.media.normal}) {
    width: 172px;
    height: 59px;
    font-size: ${p => p.theme.fontSizes.m};
  }

  a {
    text-decoration: none;
    color: ${p => p.theme.colors.bcgWhiteColor};
  }
`;
