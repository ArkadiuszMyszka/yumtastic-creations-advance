import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100%;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: ${(p) => p.theme.media.tablet}) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: ${(p) => p.theme.media.desktop}) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;
