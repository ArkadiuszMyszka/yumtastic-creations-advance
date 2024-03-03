import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  @media screen and (min-width: ${p => p.theme.media.desktop}) {
    margin-top: 40px;
  }
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-top: 44px;
`;

const buttonStyles = `
@media screen and (min-width: ${p => p.theme.media.desktop}) {
    font-size: ${p => p.theme.fontSize.m};
    line-height: 24px;
}
border-top-left-radius: ${p => p.theme.radii.borderTopLeft};
border-top-right-radius: ${p => p.theme.radii.borderTopRight};
border-bottom-left-radius: ${p => p.theme.radii.borderTopLeft};
border-bottom-right-radius: ${p => p.theme.radii.borderBotRight};
// font-family: Poppins;
font-weight: ${p => p.theme.media.normal};
font-size: ${p => p.theme.fontSize.s};
line-height: 21px;
transition: 0.3s;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
color: ${p => p.theme.colors.whiteColor};
`;

export const RegistrationButton = styled(Link)`
  @media screen and (min-width: ${p => p.theme.media.desktop}) {
    width: 184px;
    height: 67px;
  }
  border: none;
  background-color: ${p => p.theme.colors.greenBgColor};
  width: 132px;
  height: 45px;
  ${buttonStyles}

  &:hover {
    background-color: ${p => p.theme.colors.btnDarkBgColor};
  }
`;

export const SignInButton = styled(Link)`
  @media screen and (min-width: ${p => p.theme.media.desktop}) {
    width: 141px;
    height: 67px;
  }
  background-color: transparent;
  border-color: ${p => p.theme.colors.whiteColor};
  border: 2px solid;
  width: 95px;
  height: 45px;
  ${buttonStyles}

  &:hover {
    border-color: ${p => p.theme.colors.greenBgColor};
    color: ${p => p.theme.colors.greenColor};
  }
`;
