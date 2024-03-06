import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../styles/theme';

export const Container = styled.div`
  @media screen and (${theme.media.desktop}) {
    margin-top: 40px;
  }
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-top: 44px;
`;

const buttonStyles = `
@media screen and (${theme.media.desktop}) {
    font-size: ${theme.fontSizes.m};
    line-height: 24px;
}
border-top-left-radius: ${theme.radii.borderTopLeft};
border-top-right-radius: ${theme.radii.borderTopRight};
border-bottom-left-radius: ${theme.radii.borderBotLeft};
border-bottom-right-radius: ${theme.radii.borderBotRight};
font-weight: ${theme.fontWeights.normal};
font-size: ${theme.fontSizes.s};
line-height: 21px;
transition: 0.3s;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
color: ${theme.colors.whiteColor};
`;

export const RegistrationButton = styled(Link)`
  @media screen and (${theme.media.desktop}) {
    width: 184px;
    height: 67px;
  }
  border: none;
  background-color: ${theme.colors.greenBgColor};
  width: 132px;
  height: 45px;
  ${buttonStyles}

  &:hover {
    background-color: ${theme.colors.btnDarkBgColor};
  }
`;

export const SignInButton = styled(Link)`
  @media screen and (${theme.media.desktop}) {
    width: 141px;
    height: 67px;
  }
  background-color: transparent;
  border-color: ${theme.colors.whiteColor};
  border: 2px solid;
  width: 95px;
  height: 45px;
  ${buttonStyles}

  &:hover {
    border-color: ${theme.colors.greenBgColor};
    color: ${theme.colors.greenColor};
  }
`;
