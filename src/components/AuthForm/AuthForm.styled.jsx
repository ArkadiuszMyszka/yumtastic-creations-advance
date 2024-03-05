import styled from "styled-components";
import { ReactComponent as Error } from '../../images/icons/input_error.svg';
import { ReactComponent as Ok } from '../../images/icons/input_ok.svg';
import { ReactComponent as Warning } from '../../images/icons/input_warning.svg';

export const Button = styled.button`
    background-color: ${p => p.theme.colors.greenTextColor};
    border: 1px solid ${p => p.theme.colors.greenTextColor};
    border-radius: 6px;
    color: ${p => p.theme.colors.whiteTextColor};
    cursor: pointer;
    font-size: ${p =>p.theme.fontSizes.m};
    height: 45px;
    line-height: 1.13;
    padding: 0;
    margin: 0 auto;
    margin-top: 25px;
    width: 74vw;
    max-width: 279px;
    transition-duration: 0.5s;

    &:focus,
    &:hover {
        color: ${p => p.theme.colors.footerDarckTextColor};
    }

    @media screen and (${(p) => p.theme.media.tablet}) {
    height: 59px;
    margin-top: 20px;
    width: 52vw;
    max-width: 400px;
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    font-size: ${p =>p.theme.fontSizes.xm};
    width: 28vw;
    max-width: 400px;
}
`

export const ErrorIconStyled = styled(Error)`
    position: absolute;
    top: 12px;
    left: 85%;

    @media screen and (${(p) => p.theme.media.tablet}) {
    top: 22px;
}
`;

export const WarnIconStyled = styled(Warning)`
  position: absolute;
  top: 12px;
  left: 85%;

    @media screen and (${(p) => p.theme.media.tablet}) {
    top: 22px;
}
`;

export const OkIconStyled = styled(Ok)`
  position: absolute;
  top: 12px;
  left: 85%;

    @media screen and (${(p) => p.theme.media.tablet}) {
    top: 22px;
}
`;

export const ErrorMessageStyled = styled.div`
    position: absolute;
    color: #E74A3B;
    font-size: ${p =>p.theme.fontSizes.xs};
    margin-left: 10px;
    margin-top: 45px;


    @media screen and (${(p) => p.theme.media.tablet}) {
    margin-left: 35px;
    margin-top: 60px;
}
`;

export const Form = styled.form`
    background-color: ${p => p.theme.colors.lightDarckBgColor};
    border-radius: 30px;
    color: ${p => p.theme.colors.whiteTextColor};
    display: flex;
    flex-direction: column;
    padding: 25px 20px 25px 20px;
    width: 89vw;
    max-width: 335px;
    position: absolute;
    top: 93.5%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -120%);

    @media screen and (${(p) => p.theme.media.tablet}) {
    padding: 50px 15px 50px 15px;
    width: 65vw;
    max-width: 500px;
    top: 96%;
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    padding: 15px 15px 50px 15px;
    width: 35vw;
    max-width: 500px;
    left: 72%;
}
`;

export const Header = styled.h3`
    font-size: ${p =>p.theme.fontSizes.l};
    font-weight: 600;
    letter-spacing: -2%;
    line-height: 1.17;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-top: 0;

    @media screen and (${(p) => p.theme.media.tablet}) {
    margin-left: 35px;
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    font-size: ${p =>p.theme.fontSizes.xl};
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 25px;
    margin-left: 30px;
}
`

export const Icon = styled.svg`
    fill: transparent;
    height: 18px;
    width: 18px;
    position: absolute;
    top: 15px;
    left: 20px;


    stroke: ${(props) => {
    if (props.strength === 'Very Weak') return '#E74A3B';
    if (props.strength === 'Weak') return '#E67E22';
    if (props.strength === 'Medium') return '#F1C40F';
    if (props.strength === 'Strong') return '#2ECC71';
    return '#FAFAFA';
  }};

    @media screen and (${(p) => p.theme.media.tablet}) {
    height: 24px;
    top: 19px;
    left: 48px;
    width: 24px;
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    height: 24px;
    width: 24px;
}
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    position: relative;
`;

export const Input = styled.input`
    background-color: transparent;
    border: 1px solid;
    border-radius: 6px;
    color: ${p => p.theme.colors.whiteTextColor};
    opacity: 0.4;
    font-size: ${p =>p.theme.fontSizes.s};
    height: 45px;
    letter-spacing: -2%;
    margin: 0 auto;
    margin-bottom: 3px;
    padding-left: 40px;
    padding-top: 4px;
    width: 74vw;
    max-width: 279px;

    
    border-color: ${props => {
    if (props.strength === 'Very Weak') return '#E74A3B';
    if (props.strength === 'Weak') return '#E67E22';
    if (props.strength === 'Medium') return '#F1C40F';
    if (props.strength === 'Strong') return '#2ECC71';
    return '#FAFAFA';
  }};

    &::placeholder {
        color: ${p => p.theme.colors.whiteTextColor};
        font-size: ${p =>p.theme.fontSizes.s};
    }

    &:focus,
    &:hover {
        border-color: ${props => {
    if (props.strength === 'Very Weak') return '#E74A3B';
    if (props.strength === 'Weak') return '#E67E22';
    if (props.strength === 'Medium') return '#F1C40F';
    if (props.strength === 'Strong') return '#2ECC71';
    return '#FAFAFA';
  }};
        opacity: 1;
        outline: 0;
    }

    @media screen and (${(p) => p.theme.media.tablet}) {
    font-size: ${p =>p.theme.fontSizes.xm};
    height: 59px;
    padding-left: 45px;
    width: 52vw;
    max-width: 400px;

    &::placeholder {
      font-size: ${p =>p.theme.fontSizes.xm};
    }
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    font-size: ${p =>p.theme.fontSizes.xm};
    height: 59px;
    padding-left: 55px;
    width: 28vw;
    max-width: 400px;

    &::placeholder {
      font-size: ${p =>p.theme.fontSizes.xm};
    }
}
`;

export const PasswordStrength = styled.div`
  color: ${(props) => {
    if (props.strength === 'Very Weak') return '#E74A3B';
    if (props.strength === 'Weak') return '#E67E22';
    if (props.strength === 'Medium') return '#F1C40F';
    if (props.strength === 'Strong') return '#2ECC71';
    return 'transparent';
  }};
  font-size: ${p =>p.theme.fontSizes.xs};
  position: absolute;
  margin-left: 10px;
  margin-top: 55px;

  @media screen and (${(p) => p.theme.media.tablet}) {
  margin-left: 35px;
  margin-top: 70px;
  }

  @media screen and (${(p) => p.theme.media.desktop}) {
    margin-left: 30px;
  }
`;