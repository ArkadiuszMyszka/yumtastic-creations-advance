import styled from 'styled-components';

export const RecipeItemContainer = styled.div`
  max-height: 152px;
  border-radius: 8px;
  margin: 18px 16px;
  padding: 14px 9px;
  font-family: Poppins;
  font-weight: 500;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 124px auto;
  gap: 0 14px;

  @media (min-width: 768px) {
    grid-template-columns: 232px auto;
    gap: 0 24px;
    max-height: 288px;
    padding: 28px 24px;
    margin: 32px 40px;
  }

  @media (min-width: 1200px) {
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
  border-radius: 8px;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 228px;
    height: 232px;
  }

  @media (min-width: 1200px) {
    width: 318px;
    height: 324px;
  }
`;

export const RecipeDetails = styled.div`
  display: grid;
  gap: 14px 0;
  flex-direction: column;
  flex: 1;

  @media (min-width: 768px) and (max-width: 1199px) {
    max-height: 232px;
  }

  @media (min-width: 1200px) {
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
  font-size: 14px;
  color: #3e4462;
  font-family: Poppins;
  font-weight: 500;
  line-height: 1em;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding-top: 0;
    font-size: 24px;
    line-height: 1.2em;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
  }
`;

export const RemoveButton = styled.button`
  background-color: #8baa36;
  width: 24px;
  height: 24px;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 38px;
    height: 38px;
  }

  @media (min-width: 1200px) {
    width: 44px;
    height: 44px;
  }

  svg {
    width: 14px;
    height: 14px;

    @media (min-width: 768px) and (max-width: 1199px) {
      width: 22px;
      height: 22px;
    }

    @media (min-width: 1200px) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const RecipeDescription = styled.p`
  margin: 0;
  font-size: 10px;
  color: #3e4462;
  font-family: Poppins;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1.2em;

  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 14px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const RecipeFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CookingTime = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1em;
  color: #3e4462;
  align-self: flex-end;
`;

export const SeeRecipeButton = styled.button`
  margin: 0;
  height: 27px;
  width: 87px;
  background-color: #8baa36;
  text-decoration: none;
  font-family: Poppins;
  text-align: center;
  font-size: 10px;
  border: none;
  align-self: flex-end;
  border-radius: 24px 44px;
  cursor: pointer;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 138px;
    height: 45px;
    font-size: 14px;
  }

  @media (min-width: 1200px) {
    width: 172px;
    height: 59px;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;
