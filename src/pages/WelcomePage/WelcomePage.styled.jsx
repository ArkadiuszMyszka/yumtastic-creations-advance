import styled from 'styled-components';
import backgroundImage from '../../images/graphics/start-salad-full.png';

export const Background = styled.main`
  @media (min-width: 1200px) {
    background-position: 50% 65%;
    background-size: 115%;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
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
  @media (min-width: 1200px) {
    width: 544px;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 520px;
  }
  width: 305px;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  font-family: Poppins;
  font-style: normal;
  isolation: isolate;
`;

export const LogoSVG = styled.img`
  @media (min-width: 768px) {
    width: 68px;
  }
  width: 54px;
  align-self: center;
`;

export const Title = styled.h1`
  @media (min-width: 768px) {
    height: 35px;
    margin-top: 44px;
    font-size: 28px;
    line-height: 28px;
  }
  height: 24px;
  margin: 0;
  margin-top: 28px;
  color: white;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
`;

export const Paragraph = styled.p`
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.28;
  }
  margin: 0;
  margin-top: 14px;
  color: white;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28;
  text-align: center;
`;
