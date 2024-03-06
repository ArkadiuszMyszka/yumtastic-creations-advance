import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  max-width: 100%;
`;

export const SearchFormInput = styled.input`
  font-family: Poppins, sans-serif;
  margin: 0;
  height: 52px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  color: #3e4462;
  background-color: #ffffff;
  transition: border 0.3s ease;
  width: 100%;
  width: 295px;
  padding: 0 30px;
  border: 1px solid #d1cece87;
  border-radius: 24px 44px;
  box-shadow: 0px -1px 20px 3px #4546460a;
  outline: none;

  @media (min-width: 768px) {
    width: 362px;
    height: 57px;
    font-size: 16px;
  }
  @media (min-width: 1280px) {
    width: 510px;
    height: 70px;
    font-size: 18px;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0;
  cursor: pointer;
  width: 113px;
  height: 53px;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: #fafafa;
  background-color: #8baa36;
  border-radius: 24px 44px;
  border: none;
  transition: all 0.3s ease-out;

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 57px;
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 161px;
    height: 73px;
    font-size: 16px;
  }

  &:hover {
    background-color: #22252a;
  }
`;
