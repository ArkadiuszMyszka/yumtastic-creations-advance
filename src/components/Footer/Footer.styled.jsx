import styled from "styled-components";
import footer_s from "../../images/graphics/footer_s.png";
import footer_m from "../../images/graphics/footer_m.png";
import footer_l from "../../images/graphics/footer_l.png";

export const About = styled.ul`
  color: ${p => p.theme.colors.whiteTextColor};
  display: none;

  @media screen and (${(p) => p.theme.media.tablet}) {
    display: block;
    font-size: ${p =>p.theme.fontSizes.s};
    letter-spacing: -2%;
    line-height: 1.29;
  }

  @media screen and (${(p) => p.theme.media.desktop}) {
    font-size: ${p =>p.theme.fontSizes.m};
    line-height: 1.33;
  }
`;

export const AboutBox = styled.div`
  @media screen and (${(p) => p.theme.media.tablet}) {
    padding-left: 35px;
  }

  @media screen and (${(p) => p.theme.media.desktop}) {
    padding-left: 0px;
  }
`;

export const AboutItem = styled.li`
  @media screen and (${(p) => p.theme.media.tablet})  {
    list-style: inside;
    margin-bottom: 10px;
  }
`;

export const Box = styled.div`
  @media screen and (${(p) => p.theme.media.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-bottom: 15px;
    padding-top: 35px;
  }
  @media screen and (${(p) => p.theme.media.desktop}) {
    justify-content: space-between;
    padding: 0;
    width: 51vw;
  }
`;

export const ErrorMsg = styled.p`
  color: #e74a3b;
  font-size: ${p =>p.theme.fontSizes.x};
  position: absolute;
  margin-left: -90px;
  margin-top: 25px;

  @media screen and (${(p) => p.theme.media.tablet}) {
    margin-left: -345px;
    margin-top: 65px;
  }

  @media screen and (${(p) => p.theme.media.desktop}) {
    margin-left: -230px;
    margin-top: 20px;
  }
`;

export const FooterBox = styled.div`
  font-family: Poppins;
  width: 100vw;
`;

export const FooterDiv = styled.div`
  @media screen and (${(p) => p.theme.media.desktop}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  @media screen and (${(p) => p.theme.media.tablet}) {
    flex-direction: row;
    gap: 10px;
    justify-content: center;
  }

  @media screen and (${(p) => p.theme.media.desktop}) {
    flex-direction: column;
    gap: 10px;
    justify-content: center;
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

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${p => p.theme.colors.whiteTextColor};
  border-radius: 6px;
  color: ${p => p.theme.colors.whiteTextColor};
  font-family: Poppins;
  font-size: ${p =>p.theme.fontSizes.s};
  height: 41px;
  line-height: 1.13;
  padding-left: 35px;
  outline: transparent;
  overflow: hidden;
  width: 204px;

  &::placeholder {
    color: ${p => p.theme.colors.whiteTextColor};
    font-size: ${p =>p.theme.fontSizes.x};
    letter-spacing: -2%;

    @media screen and (${(p) => p.theme.media.tablet}) {
      font-size: ${p =>p.theme.fontSizes.s};
    }

    @media screen and (${(p) => p.theme.media.desktop}) {
      font-size: ${p =>p.theme.fontSizes.xm};
    }
  }

  @media screen and (${(p) => p.theme.media.tablet}) {
    height: 51px;
    padding-left: 40px;
    width: 259px;
  }

  @media screen and (${(p) => p.theme.media.desktop}) {
    font-size: ${p =>p.theme.fontSizes.xm};
    height: 59px;
    padding-left: 40px;
    width: 338px;
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
    margin-top: 40px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding-top: 20px;

  @media screen and (${(p) => p.theme.media.tablet}) {
    align-items: flex-end;
    gap: 15px;
    justify-content: flex-start;
    margin-top: -12px;
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
    margin-bottom: -42px;
    margin-left: 10px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  gap: 15px;
  margin-bottom: 45px;
  margin-top: 20px;

  @media screen and (${(p) => p.theme.media.tablet}) {
    align-items: flex-start;
    gap: 20px;
    padding-right: 100px;
  }

  @media screen and (${(p) => p.theme.media.desktop}) {
    align-items: center;
    font-weight: ${p => p.theme.fontWeights.normal};;
    padding: 0;
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
    width: 339px;
  }
`;

export const NewsletterTitle = styled.h3`
  display: none;

  @media screen and (${(p) => p.theme.media.desktop}) {
    color: ${p => p.theme.colors.whiteTextColor};
    display: block;
    font-size: ${p =>p.theme.fontSizes.xm};
    margin-top: 50px;
  }
`;

export const NewsletterTxt = styled.p`
  display: none;

  @media screen and (${(p) => p.theme.media.desktop}) {
    color: ${p => p.theme.colors.whiteTextColor};
    display: block;
    font-size: ${p =>p.theme.fontSizes.s};
    margin-top: 30px;
    text-wrap: wrap;
  }
`;

export const StyledFooter = styled.footer`
  background-color: ${p => p.theme.colors.yummyColor};
`;