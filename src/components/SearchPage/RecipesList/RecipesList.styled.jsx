import styled from "styled-components";

export const List = styled.ul`
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    gap: 14px;
  }
`;

export const ListItem = styled.li`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 42px;
  padding-bottom: 40px;
  border-radius: 8px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 40px;
    padding-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 90px;
  }

  &:focus,
  &:hover {
    transform: scale(1.05);
  }
`;

export const Thumb = styled.div`
  position: relative;
  width: 343px;
  height: 323px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 300px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

// export const TextBox = styled.div`
//   position: absolute;
//   bottom: 26px;
//   right: 18px;
//   padding-left: 16px;
//   height: 52px;
//   width: 307px;
//   display: flex;
//   align-items: center;
//   background-color: #ffffff;
//   border-radius: 8px;

//   @media screen and (min-width: 768px) {
//     width: 300px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 268px;
//   }
// `;

export const Label = styled.h3`
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: #3e4462;
`;
