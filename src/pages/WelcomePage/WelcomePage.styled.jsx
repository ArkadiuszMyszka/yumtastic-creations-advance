import styled from 'styled-components';
import backgroundImage from '../../images/graphics/start-salad-full.png';
import { theme } from '../../styles/theme';

export const Background = styled.main`
  @media screen and (${theme.media.desktop}) {
    background-position: 50% 65%;
    background-size: 115%;
  }
  @media screen and (${theme.media.tablet}) {
    background-position: 60% 70%;
    background-size: 180%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.3) 78.98%,
      transparent
    ),
    url(${backgroundImage});
  background-size: 200%;
  background-position: bottom;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  @media screen and (${theme.media.desktop}) {
    width: 544px;
  }
  @media screen and (${theme.media.tablet}) {
    width: 520px;
  }
  width: 305px;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  isolation: isolate;
`;

export const LogoSVG = styled.img`
  @media screen and (${theme.media.tablet}) {
    width: 68px;
  }
  width: 54px;
  align-self: center;
`;

export const Title = styled.h1`
  @media screen and (${theme.media.tablet}) {
    height: 35px;
    margin-top: 44px;
    font-size: ${theme.fontSizes.xl};
    line-height: 28px;
  }
  height: 24px;
  margin: 0;
  margin-top: 28px;
  color: ${theme.colors.whiteColor};
  font-weight: ${theme.fontWeights.semiBold};
  font-size: ${theme.fontSizes.l};
  line-height: 24px;
`;

export const Paragraph = styled.p`
  @media screen and (${theme.media.tablet}) {
    font-size: ${theme.fontSizes.xm};
    line-height: 1.28;
  }
  margin: 0;
  margin-top: 14px;
  color: ${theme.colors.whiteColor};
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.s};
  line-height: 1.28;
  text-align: center;
`;
