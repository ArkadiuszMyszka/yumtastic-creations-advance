import styled from "styled-components";

export const List = styled.ul`
  align-items: center;
  margin-bottom: 50px;
  li {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
    li {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 100px;
    column-gap: 14px;
  }
`;
