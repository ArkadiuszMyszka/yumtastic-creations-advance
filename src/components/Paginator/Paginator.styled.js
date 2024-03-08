import styled from "styled-components";

export const PaginatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 767px) {
    width: 275px;
    height: 51px;
  }
`;

export const PaginatorList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  &.pagination {
    &.break {
      display: none;
    }
    &.previous,
    &.next {
      margin: 0 5px;
      cursor: pointer;
    }
  }
`;

export const PaginatorLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${({ isActive }) => (isActive ? "#ebf3d4" : "#fafafa")};
  border-radius: 50%;
  border: none;
  box-shadow: ${({ isActive }) =>
    isActive ? "0px 4px 8px rgba(0, 0, 0, 0.1)" : "none"};
  color: ${({ isActive }) => (isActive ? "#22252a" : "#656565")};
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ebf3d4;
  }
`;
// import styled from "styled-components";

// export const PaginatorContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 20px;

//   @media (max-width: 767px) {
//     width: 275px;
//     height: 51px;
//   }
// `;

// export const PaginatorList = styled.ul`
//   display: flex;
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   &.pagination {
//     &.break {
//       display: none;
//     }
//     &.previous,
//     &.next {
//       margin: 0 5px;
//       cursor: pointer;
//     }
//   }
// `;

// export const PaginatorLink = styled.a`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 40px;
//   height: 40px;
//   background-color: ${({ isActive }) => (isActive ? "#ebf3d4" : "#fafafa")};
//   border-radius: 50%;
//   border: none;
//   box-shadow: ${({ isActive }) =>
//     isActive ? "0px 4px 8px rgba(0, 0, 0, 0.1)" : "none"};
//   color: ${({ isActive }) => (isActive ? "#22252a" : "#656565")};
//   font-size: 16px;
//   font-weight: bold;
//   text-decoration: none;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #ebf3d4;
//   }
// `;
