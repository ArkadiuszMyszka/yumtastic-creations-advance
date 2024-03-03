import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import register_rectangle_s from '../../images/RegisterPage/register_rectangle_s.png';
import register_rectangle_m from '../../images/RegisterPage/register_rectangle_m.png';
import register_rectangle_l from '../../images/RegisterPage/register_rectangle_l.png';
import registration_signin_s from '../../images/RegisterPage/registration_signin_s.png';
import registration_signin_m from '../../images/RegisterPage/registration_signin_m.png';
import registration_signin_l from '../../images/RegisterPage/registration_signin_l.png';

export const BgGraphics = styled.div`
    background-image: url(${registration_signin_s});
    background-repeat: no-repeat;
    background-size: contain;
    height: 31vh;
    max-height: 250px;
    margin-right: -50%;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -120%);
    width: 76vw;
    max-width: 285px;
    

    @media screen and (${(p) => p.theme.media.tablet}) {
    background-image: url(${registration_signin_m});
    height: 35vh;
    max-height: 359px;
    left: 52.5%;
    width: 53vw;
    max-width: 409px;
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    background-image: url(${registration_signin_l});
    height: 61vh;
    max-height: 468px;
    margin-right: -15%;
    top: 54%;
    left: 15%;
    transform: translate(-15%, -50%);
    width: 37vw;
    max-width: 532px;
}
`;

export const Container = styled.div`
    background-image: url(${register_rectangle_s});
    background-position: 58% 100%;
    background-repeat: no-repeat;
    background-size: 100% 58%;
    height: 100vh;

    @media screen and (${(p) => p.theme.media.tablet}) {
    background-image: url(${register_rectangle_m});
    background-size: 100% 59%;
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    background-image: url(${register_rectangle_l});
    background-size: 100% 40%;
}
`;

export const Link = styled(NavLink)`
    color: ${p => p.theme.colors.whiteTextColor};
    cursor: pointer;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    text-decoration: underline;
    transition-duration: 0.5s;

    &:hover,
    &:focus {
        color: ${p => p.theme.colors.greenTextColor};
    }

    @media screen and (${(p) => p.theme.media.tablet}) {
    bottom: 7%;

}

    @media screen and (${(p) => p.theme.media.desktop}) {
    bottom: 9%;
    left: 72%;
}
`;
