import React from 'react';
import {
  Background,
  Container,
  LogoSVG,
  Title,
  Paragraph,
} from './WelcomePage.styled.jsx';
import { AuthNav } from '../../components/WelcomePage/AuthNav/AuthNav';
import logoSVG from '../../images/ui/logo/logo_desktop_tablet.svg';

export const WelcomePage = () => {
  return (
    <Background>
      <Container>
        <LogoSVG src={logoSVG} />
        <Title>Welcome to the app!</Title>
        <Paragraph>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </Paragraph>
        <AuthNav />
      </Container>
    </Background>
  );
};

export default WelcomePage;
