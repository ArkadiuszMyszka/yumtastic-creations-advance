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
    font-size: ${p =>p.theme.fontSize.m};
    height: 6vh;
    max-height: 45px;
    line-height: 1.13;
    padding: 0;
    margin: 0 auto;
    margin-top: 25px;
    width: 74vw;
    max-width: 322px;
    transition-duration: 0.5s;

    &:focus,
    &:hover {
        color: ${p => p.theme.colors.footerDarckTextColor};
    }

    @media screen and (${(p) => p.theme.media.tablet}) {
    height: 6vh;
    max-height: 59px;
    margin-top: 20px;
    width: 52vw;
    max-width: 448px;
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    font-size: ${p =>p.theme.fontSize.xm};
    height: 8vh;
    max-height: 59px;
    width: 32vw;
    max-width: 450px;
}
`

export const ErrorIconStyled = styled(Error)`
    position: relative;
    top: -38px;
    right: -290px;

    @media screen and (${(p) => p.theme.media.tablet}) {
    right: -435px;
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    top: -45px;
    right: -88%;
}
`;

export const WarnIconStyled = styled(Warning)`
  position: relative;
    top: -38px;
    right: -290px;

    @media screen and (${(p) => p.theme.media.tablet}) {
    right: -435px;
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    top: -45px;
    right: -88%;
}
`;

export const OkIconStyled = styled(Ok)`
  position: relative;
    top: -38px;
    right: -290px;

    @media screen and (${(p) => p.theme.media.tablet}) {
    right: -435px;
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    top: -45px;
    right: -88%;
}
`;

export const ErrorMessageStyled = styled.div`
    color: #E74A3B;
    font-family: Poppins;
    font-size: ${p =>p.theme.fontSize.xs};
    margin-left: 10px;


    @media screen and (${(p) => p.theme.media.tablet}) {
    margin-left: 25px;
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    margin-left: 20px;
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
    font-size: ${p =>p.theme.fontSize.l};
    font-weight: 600;
    letter-spacing: -2%;
    line-height: 1.17;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-top: 0;

    @media screen and (${(p) => p.theme.media.tablet}) {
    margin-left: 25px;
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    font-size: ${p =>p.theme.fontSize.xl};
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 25px;
    margin-left: 20px;
}
`

export const Icon = styled.svg`
    fill: transparent;
    height: 18px;
    width: 18px;
    position: absolute;
    top: 26px;
    left: 30px;
    margin-right: -50%;
    transform: translate(-50%, -50%);

    stroke: ${(props) => {
    if (props.strength === 'Very Weak') return '#E74A3B';
    if (props.strength === 'Weak') return '#E67E22';
    if (props.strength === 'Medium') return '#F1C40F';
    if (props.strength === 'Strong') return '#2ECC71';
    return '${p => p.theme.colors.whiteTextColor}';
  }};

    @media screen and (${(p) => p.theme.media.tablet}) {
    height: 24px;
    width: 24px;
    left: 10.5%;
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    height: 24px;
    width: 24px;
    left: 11%;
    top: 35px;
}
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    position: relative;
`;

export const Input = styled.input`
    background-color: ${p => p.theme.colors.lightDarckBgColor};
    border: 1px solid;
    border-radius: 6px;
    color: ${p => p.theme.colors.whiteTextColor};
    opacity: 0.4;
    font-size: ${p =>p.theme.fontSize.s};
    height: 6vh;
    max-height: 45px;
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
    return '${p => p.theme.colors.whiteTextColor}';
  }};

    &::placeholder {
        color: ${p => p.theme.colors.whiteTextColor};
        font-family: Poppins;
        font-size: ${p =>p.theme.fontSize.s};
    }

    &:focus,
    &:hover {
        border-color: ${props => {
    if (props.strength === 'Very Weak') return '#E74A3B';
    if (props.strength === 'Weak') return '#E67E22';
    if (props.strength === 'Medium') return '#F1C40F';
    if (props.strength === 'Strong') return '#2ECC71';
    return '${p => p.theme.colors.whiteTextColor}';
  }};
        opacity: 1;
        outline: 0;
    }

    @media screen and (${(p) => p.theme.media.tablet}) {
    font-size: ${p =>p.theme.fontSize.xm};
    height: 6vh;
    max-height: 59px;
    padding-left: 45px;
    width: 52vw;
    max-width: 400px;

    &::placeholder {
      font-size: ${p =>p.theme.fontSize.xm};
    }
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    font-size: ${p =>p.theme.fontSize.xm};
    height: 8vh;
    max-height: 59px;
    padding-left: 55px;
    width: 28vw;
    max-width: 400px;

    &::placeholder {
      font-size: ${p =>p.theme.fontSize.xm};
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
  font-family: Poppins;
  font-size: ${p =>p.theme.fontSize.xs};
  position: relative;
  margin-left: 10px;
  top: -13px;

  @media screen and (${(p) => p.theme.media.tablet}) {
    margin-left: 25px;
  }

  @media screen and (${(p) => p.theme.media.desktop}) {
    margin-left: 20px;
  }
`;