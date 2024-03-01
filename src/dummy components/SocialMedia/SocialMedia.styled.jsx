import styled from "styled-components";

export const SocialMediaBox = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  padding-bottom: 20px;
  padding-top: 45px;

  @media screen and (${(p) => p.theme.media.desktop}) {
    gap: 20px;
    padding-bottom: 30px;
  }
`;

export const SvgW = styled.svg`
  fill: ${p => p.theme.colors.greenTextColor};
  height: 20px;
  width: 20px;
  transition: 0.5s;

  &:focus,
  &:hover {
    fill: ${p => p.theme.colors.whiteTextColor};
  }
`;

export const SvgB = styled.svg`
  fill: ${p => p.theme.colors.greenTextColor};
  height: 20px;
  width: 20px;
  transition: 0.5s;

  &:focus,
  &:hover {
    fill: ${p => p.theme.colors.bgMainDark};
  }
`;