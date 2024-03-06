import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const FollowUsContainer = styled.div`
  display: none;
  padding-bottom: 100px;

  @media screen and (${(p) => p.theme.media.desktop}) {
    display: block;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const BoxTitle = styled.h2`
  @media screen and (${(p) => p.theme.media.desktop}) {
    display: inline-block;
    font-weight: ${(p) => p.theme.fontWeights.semibold};
    font-size: ${(p) => p.theme.fontSizes.l};
    line-height: 1;
    padding-bottom: 40px;

    color: ${(p) =>
      p.mode === "light"
        ? p.theme.colors.subtitleTextColor
        : p.theme.colors.whiteTextColor};
  }
`;

export const IconList = styled.ul`
  @media screen and (${(p) => p.theme.media.desktop}) {
    display: flex;
    margin-top: 0;
    margin-bottom: 0;
    gap: 20px;
  }
`;
export const IconItem = styled.li`
  list-style: none;
`;

export const NavItem = styled(NavLink)`
  @media screen and (${(p) => p.theme.media.desktop}) {
    color: ${(p) => p.theme.colors.greenTextColor};
    text-decoration: none;
    & > svg {
      width: 25px;
      height: 25px;
    }
  }

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${(p) =>
      p.mode === "light"
        ? p.theme.colors.yummyColor
        : p.theme.colors.whiteColor};
  }
`;
