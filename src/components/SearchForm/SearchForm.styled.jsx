import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  max-width: 100%;
`;

export const SearchFormInput = styled.input`
  font-family: Poppins, sans-serif;
  margin: 0;
  height: 52px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.media.normal};
  line-height: 1.5;
  text-align: left;
  color: ${p => p.theme.colors.subtitleTextColor};
  background-color: ${p => p.theme.colors.whiteColor};
  transition: border 0.3s ease;
  width: 100%;
  width: 295px;
  padding: 0 30px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.textAreaBg};
  border-radius: 24px 44px;
  box-shadow: 0px -1px 20px 3px #4546460a;
  outline: none;

  @media screen and (${p => p.theme.media.tablet}) {
    width: 362px;
    height: 57px;
    font-size: ${p => p.theme.fontSizes.m};
  }
  @media screen and (${p => p.theme.media.desktop}) {
    width: 510px;
    height: 70px;
    font-size: ${p => p.theme.fontSizes.xm};
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0;
  cursor: pointer;
  width: 113px;
  height: 53px;
  font-family: Poppins, sans-serif;
  font-weight: ${p => p.theme.media.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.5;
  color: ${p => p.theme.colors.bgMain};
  background-color: ${p => p.theme.colors.greenBgColor};
  border-radius: 24px 44px;
  border: ${p => p.theme.borders.none};
  transition: all 0.3s ease-out;

  @media screen and screen and (${p => p.theme.media.tablet}) {
    width: 161px;
    height: 57px;
    font-size: ${p => p.theme.fontSizes.m};
  }

  @media screen and (${p => p.theme.media.desktop}) {
    width: 161px;
    height: 73px;
    font-size: ${p => p.theme.fontSizes.m};
  }

  &:hover {
    background-color: ${p => p.theme.colors.yummyColor};
  }
`;
