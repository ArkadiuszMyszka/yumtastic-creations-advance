import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  min-height: 100%;
  min-width: 320px;
  max-width: 1440px;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;

  @media screen and (min-width: ${(p) => p.theme.media.tablet}) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: ${(p) => p.theme.media.desktop}) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;
