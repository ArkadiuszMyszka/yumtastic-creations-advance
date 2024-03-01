import styled from "styled-components";

export const Cancel = styled.button`
    background-color: ${p => p.theme.colors.textAreaBg};
    border: 1px ${p => p.theme.colors.textAreaBg};
    border-radius: 6px;
    color: ${p => p.theme.colors.mainTextColor};
    font-size: ${p =>p.theme.fontSize.s};
    height: 49px;
    transition-duration: 0.5s;
    width: 137px;

    &:hover,
    &:focus {
        background-color: transparent;
        border: 1px solid ${p => p.theme.colors.mainTextColor};
    }

    @media screen and (${(p) => p.theme.media.tablet}) {
    font-size: ${p =>p.theme.fontSize.m};
    height: 59px;
    width: 192px; 
    }

    @media screen and (${(p) => p.theme.media.desktop}) {
    height: 59px;
    width: 135px; 
    }
`;

export const Logout = styled.button`
    background-color: ${p => p.theme.colors.greenTextColor};
    border: 1px ${p => p.theme.colors.greenTextColor};
    border-radius: 6px;
    color: ${p => p.theme.colors.mainTextColor};
    font-size: ${p =>p.theme.fontSize.s};
    height: 49px;
    transition-duration: 0.5s;
    width: 137px;

    &:hover,
    &:focus {
        background-color: ${p => p.theme.colors.yummyColor};
        border: 1px solid ${p => p.theme.colors.yummyColor};
    }

    @media screen and (${(p) => p.theme.media.tablet}) {
    font-size: ${p =>p.theme.fontSize.m};
    height: 59px;
    width: 192px; 
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    height: 59px;
    width: 135px; 
}
`;

export const OtherCategories = styled.button`
    background-color: transparent;
    border: 2px solid ${p => p.theme.colors.greenTextColor};
    border-radius: 24px 44px;
    color: ${p => p.theme.colors.yummyColor};
    font-size: ${p =>p.theme.fontSize.s};
    height: 46px;
    transition-duration: 0.5s;
    width: 195px;

    &:hover,
    &:focus {
        background-color: ${p => p.theme.colors.greenTextColor};
        color: ${p => p.theme.colors.whiteTextColor};
    }

    @media screen and (${(p) => p.theme.media.tablet}) {
    font-size: ${p =>p.theme.fontSize.m};
    height: 61px;
    width: 239px;
}
`;

export const SearchBlack = styled.button`
    background-color: ${p => p.theme.colors.yummyColor};
    border: 1px ${p => p.theme.colors.yummyColor};
    border-radius: 24px 44px;
    color: ${p => p.theme.colors.whiteTextColor};
    font-size: ${p =>p.theme.fontSize.s};
    height: 52px;
    transition-duration: 0.5s;
    width: 113px;

    &:hover,
    &:focus {
        background-color: ${p => p.theme.colors.greenTextColor};
    }

    @media screen and (${(p) => p.theme.media.tablet}) {
    font-size: ${p =>p.theme.fontSize.m};
    height: 59px;
    width: 116px;
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    height: 70px;
    width: 161px;
}
`;

export const SearchGreen = styled.button`
    background-color: ${p => p.theme.colors.greenTextColor};
    border: 1px ${p => p.theme.colors.greenTextColor};
    border-radius: 24px 44px;
    color: ${p => p.theme.colors.whiteTextColor};
    font-size: ${p =>p.theme.fontSize.s};
    height: 70px;
    transition-duration: 0.5s;
    width: 161px;

    &:hover,
    &:focus {
        background-color: ${p => p.theme.colors.yummyColor};
    }

    @media screen and (${(p) => p.theme.media.tablet}) {
    font-size: ${p =>p.theme.fontSize.m};
    height: 59px;
    width: 116px;
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    height: 70px;
    width: 161px;
}
`;

export const SignIn = styled.button`
    background-color: ${p => p.theme.colors.greenTextColor};
    border: 2px solid ${p => p.theme.colors.whiteTextColor};
    border-radius: 24px 44px;
    color: ${p => p.theme.colors.whiteTextColor};
    font-size: ${p =>p.theme.fontSize.s};
    height: 45px;
    transition-duration: 0.5s;
    width: 95px;

    &:hover,
    &:focus {
        background-color: transparent;
        border: 2px solid ${p => p.theme.colors.greenTextColor};
        color: ${p => p.theme.colors.greenTextColor};
    }

    @media screen and (${(p) => p.theme.media.tablet}) {
    font-size: ${p =>p.theme.fontSize.m};
    height: 67px;
    width: 141px;
}
`;

export const Subscribe = styled.button`
    background-color: ${p => p.theme.colors.greenTextColor};
    border: 1px ${p => p.theme.colors.greenTextColor};
    border-radius: 6px;
    color: ${p => p.theme.colors.whiteTextColor};
    font-size: ${p =>p.theme.fontSize.s};
    height: 38px;
    transition-duration: 0.5s;
    width: 204px;

    &:hover,
    &:focus {
        color: ${p => p.theme.colors.yummyColor};
    }

    @media screen and (${(p) => p.theme.media.tablet}) {
    font-size: ${p =>p.theme.fontSize.m};
    height: 50px;
    width: 187px;
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    height: 135px;
    width: 339px;
}
`;