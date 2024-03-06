import { Container, RegistrationButton, SignInButton } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Container>
      <RegistrationButton to="register">Registration</RegistrationButton>
      <SignInButton to="signin">Sign In</SignInButton>
    </Container>
  );
};
