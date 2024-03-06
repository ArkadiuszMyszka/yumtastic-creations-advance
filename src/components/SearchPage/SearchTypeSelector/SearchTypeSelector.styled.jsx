import styled from "styled-components";

export const BoxSelector = styled.div`
  height: 34px;
  display: flex;
  position: relative;
  align-items: center;
  gap: 15px;
  padding: 20px;

  @media screen and (min-width: 768px) {
    height: 41px;
    gap: 18px;
  }

  @media screen and (min-width: 1280px) {
    height: 47px;
    gap: 25px;
  }
`;

export const Label = styled.label`
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  color: #001833;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

// export const Select = styled.div`
//   width: 146px;
//   height: 100%;
//   font-family: Poppins, sans-serif;
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 1.5;
//   color: #7d7d7d;
//   border-radius: 6px;
//   border: 1px solid #d9d9d9;
//   background-color: #e8e8e8;
//   cursor: pointer;
//   opacity: 0.5;

//   @media screen and (min-width: 768px) {
//     width: 175px;
//     height: 40px;
//     font-size: 14px;
//   }

//   @media screen and (min-width: 1280px) {
//     font-size: 14px;
//     width: 198px;
//     height: 40px;
//   }

//   &:focus,
//   &:hover {
//     outline: none;
//   }
// `;
