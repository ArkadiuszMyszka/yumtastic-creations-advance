import styled from "styled-components";

export const AddRecipeIngredientsContainer = styled.div`
  max-width: 345px;
  padding-bottom: 44px;

  @media screen and (${(p) => p.theme.media.tablet}) {
    max-width: 704px;
    padding-bottom: 100px;
  }
`;
export const AddBoxTitle = styled.h2`
  display: inline-block;
  font-weight: ${(p) => p.theme.fontWeights.semibold};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: 1;
  color: ${(p) =>
    p.mode === "light"
      ? p.theme.colors.subtitleTextColor
      : p.theme.colors.whiteTextColor};
  letter-spacing: -0.02em;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 92px;
  height: 28px;
  padding: 4px 10px;
  border: ${(p) => p.theme.borders.normal};
  border-color: ${(p) => p.theme.colors.lightGreyTextColor};
  border-radius: 18px;

  @media screen and (${(p) => p.theme.media.tablet}) {
    width: 110px;
  }
`;
export const IngredietsListSetting = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;

  @media screen and (${(p) => p.theme.media.tablet}) {
    padding-bottom: 32px;
  }
`;

export const InputFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (${(p) => p.theme.media.tablet}) {
    gap: 24px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SelectCust = styled.div`
  width: 200px;

  @media screen and (${(p) => p.theme.media.tablet}) {
    width: 398px;
  }
`;

export const Input = styled.input`
  max-width: 50px;
  border: none;
  text-align: end;
  border-radius: 6px 0 0 6px;
  background-color: ${(p) => p.theme.colors.inputBgColor};
  height: 50px;

  @media screen and (${(p) => p.theme.media.tablet}) {
    height: 60px;
  }
`;

export const SelectUnit = styled.select`
  max-width: 60px;

  border: none;
  height: 50px;
  padding: 4px;
  border-radius: 0 6px 6px 0;
  background-color: #${(p) => p.theme.colors.inputBgColor};

  @media screen and (${(p) => p.theme.media.tablet}) {
    height: 62px;
  }
`;
