import styled from "styled-components";
import footer_s from "../../images/graphics/footer_s.png";
import footer_m from "../../images/graphics/footer_m.png";
import footer_l from "../../images/graphics/footer_l.png";

export const FooterBox = styled.div`
  font-family: Poppins;
  width: 100vw;
`;

export const StyledFooter = styled.footer`
  background-color: ${p => p.theme.colors.yummyColor};
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 8px;
  align-items: center;
  justify-content: center;

  @media screen and (${(p) => p.theme.media.tablet}) {
    align-items: flex-end;
    gap: 15px;
    justify-content: flex-start;
    margin-top: -12px;
    padding-left: 22px;
  }
`;

export const LogoSvg = styled.svg`
  fill: ${p => p.theme.colors.bgMobileMenu};
  height: 32px;
  stroke: ${p => p.theme.colors.greenTextColor};
  width: 32px;

  @media screen and (${(p) => p.theme.media.tablet}) {
    height: 44px;
    width: 44px;
  }
`;

export const LogoName = styled.p`
  color: ${p => p.theme.colors.bgMain};
  font-size: ${p =>p.theme.fontSizes.xm};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: 1.5%;

  @media screen and (${(p) => p.theme.media.tablet})  {
    font-size: ${p =>p.theme.fontSizes.xl};
    margin-bottom: 8px;
  }
`;

export const Box = styled.div`
  @media screen and (${(p) => p.theme.media.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 15px;
    padding-top: 35px;
  }
`;

export const AboutBox = styled.div`
  padding-left: 30px;
`;

export const About = styled.div`
  color: ${p => p.theme.colors.whiteTextColor};
  display: none;

  @media screen and (${(p) => p.theme.media.tablet}) {
    display: block;
    font-size: ${p =>p.theme.fontSizes.s};
    letter-spacing: -2%;
    line-height: 1.29;
  }

  @media screen and (${(p) => p.theme.media.desktop}) {
    font-size: ${p =>p.theme.fontSizes.xm};
    line-height: 1.33;
  }
`;

export const AboutItem = styled.li`
  @media screen and (${(p) => p.theme.media.tablet})  {
    margin-bottom: 10px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 45px;
  margin-top: 15px;

  @media screen and (${(p) => p.theme.media.tablet}) {
    align-items: flex-start;
    gap: 15px;
    padding-right: 100px;
  }

  @media screen and (${(p) => p.theme.media.desktop}) {
    gap: 20px;
    position: absolute;
    bottom: -65%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
`;

export const NavItem = styled.a`
  color: ${p => p.theme.colors.whiteTextColor};
  cursor: pointer;
  font-size: ${p =>p.theme.fontSizes.s};
  text-decoration: none;
  transition-duration: 0.5s;

  &:focus,
  &:hover {
    color: ${p => p.theme.colors.greenTextColor};
  }
`;

export const Newsletter = styled.div`
  @media screen and (${(p) => p.theme.media.desktop}) {
    display: flex;
    flex-direction: column;
    margin-right: 55px;
    margin-top: 45px;
    position: absolute;
    bottom: -56%;
    right: -0%;
    width: 339px;
  }
`;

export const NewsletterTitle = styled.h3`
  display: none;

  @media screen and (${(p) => p.theme.media.desktop}) {
    color: ${p => p.theme.colors.whiteTextColor};
    display: block;
    font-size: ${p =>p.theme.fontSizes.xm};
    margin: 0;
  }
`;

export const NewsletterTxt = styled.p`
  display: none;

  @media screen and (${(p) => p.theme.media.desktop}) {
    color: ${p => p.theme.colors.whiteTextColor};
    display: block;
    font-size: ${p =>p.theme.fontSizes.s};
    padding-bottom: 30px;
    text-wrap: wrap;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;

  @media screen and (${(p) => p.theme.media.tablet}) {
    flex-direction: row;
    gap: 10px;
    justify-content: center;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media screen and (${(p) => p.theme.media.tablet}) {
    margin: 0;
    margin-top: 15px;
  }

  @media screen and (${(p) => p.theme.media.desktop}) {
    margin: 0;
  }
`;

export const MailSvg = styled.svg`
  fill: ${p => p.theme.colors.yummyColor};
  height: 12px;
  margin-bottom: -28px;
  margin-left: 15px;
  stroke: ${p => p.theme.colors.whiteTextColor};
  width: 16px;

  @media screen and (${(p) => p.theme.media.tablet}) {
    height: 20px;
    margin-bottom: -35px;
    margin-left: 12px;
    width: 25px;
  }

  @media screen and (${(p) => p.theme.media.desktop}) {
    height: 25px;
    margin-bottom: -45px;
    margin-left: 10px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${p => p.theme.colors.whiteTextColor};
  border-radius: 6px;
  color: ${p => p.theme.colors.whiteTextColor};
  font-family: Poppins;
  font-size: ${p =>p.theme.fontSizes.s};
  height: 38px;
  line-height: 1.13;
  padding-left: 35px;
  outline: transparent;
  overflow: hidden;
  width: 54vw;
  max-width: 165px;

  &::placeholder {
    color: ${p => p.theme.colors.whiteTextColor};
    font-size: ${p =>p.theme.fontSizes.x};
    letter-spacing: -2%;

    @media screen and (${(p) => p.theme.media.desktop}) {
      font-size: ${p =>p.theme.fontSizes.xm};
    }
  }

  @media screen and (${(p) => p.theme.media.tablet}) {
    height: 46px;
    padding-left: 40px;
    width: 259px;
    max-width: 250px;
  }

  @media screen and (${(p) => p.theme.media.desktop}) {
    font-size: ${p =>p.theme.fontSizes.xm};
    height: 59px;
    padding-left: 40px;
    width: 297px;
    max-width: 297px;
  }
`;

export const ErrorMsg = styled.p`
  color: #e74a3b;
  font-size: ${p =>p.theme.fontSizes.x};
  position: absolute;
  top: 57%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-93%, -50%);

  @media screen and (${(p) => p.theme.media.tablet}) {
    top: 64%;
    transform: translate(-220%, 50%);
  }

  @media screen and (${(p) => p.theme.media.desktop}) {
    top: 61%;
    transform: translate(-155%, 50%);
  }
`;

export const Info = styled.div`
  background: url(${footer_s});
  background-repeat: no-repeat;
  background-position: right -40px bottom -60px;
  background-size: 216px 222px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: ${p => p.theme.colors.yummyColor};
  font-size: ${p =>p.theme.fontSizes.x};
  height: 67px;

  @media screen and (${(p) => p.theme.media.tablet}) {
    background: url(${footer_m});
    background-position: right -70px bottom -150px;
    background-repeat: no-repeat;
    background-size: 393px 404px;
  }

  @media screen and (${(p) => p.theme.media.desktop}) {
    background: url(${footer_l});
    background-position: right -70px bottom -240px;
    background-repeat: no-repeat;
    background-size: 593px 611px;
    font-size: ${p =>p.theme.fontSizes.s};
    gap: 25px;
  }
`;

export const InfoTextBold = styled.div`
  font-weight: ${p => p.theme.fontWeights.medium};
`;