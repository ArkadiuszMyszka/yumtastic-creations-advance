import styled from "styled-components";

export const PositionWrapper = styled.div`
  position: relative;
`;

export const StyledFormControl = styled.div`
  border: 1px solid #d9d9d9;
  color: #7d7d7d;
  background-color: #e8e8e8;
  position: relative;
  width: 146px;
  border-radius: 6px;
  position: relative;
  text-align: left;
  padding: 10px 14px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.24px;
  cursor: pointer;

  :hover,
  :focus,
  :activ {
    border: 1px solid black;
  }

  svg {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    fill: #8baa36;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    width: 175px;
  }

  @media screen and (min-width: 1280px) {
    width: 198px;
  }
`;

export const OptionWrapper = styled.div`
  position: absolute;
  top: 34px;
  left: 0;
  z-index: 5;
`;

export const StyledSelect = styled.ul`
  background-color: #e8e8e8;
  padding: 4px 0;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border: 1px solid #d9d9d9;
  list-style-type: none;
  color: #7d7d7d;
  text-align: left;
  border-radius: 0px 0px 6px 6px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    width: 100%;
  }
`;

export const StyledMenuItem = styled.li`
  background-color: #e8e8e8;
  width: 146px;
  padding: 8px 14px;
  cursor: pointer;
  border-radius: 3px;

  @media screen and (min-width: 768px) {
    width: 175px;
  }

  @media screen and (min-width: 1280px) {
    width: 198px;
  }

  &:hover {
    color: #393838c9;
    background-color: #f2f2f2b0;
    transition: all 0.2s ease-out;
    box-shadow: 0px 0px 4px 1px #f2f2f2b0;
  }
`;
