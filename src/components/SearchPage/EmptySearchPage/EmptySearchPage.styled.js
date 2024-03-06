import styled from "styled-components";

export const EmptyWrapper = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const EmptyImgWrapper = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 225px;
  }
`;

export const EmptyText = styled.p`
  font-family: Poppins, sans-serif;
  font-weight: 500;
  line-height: 1.5;
  font-size: 20px;
  text-align: center;
  color: #3e4462;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
