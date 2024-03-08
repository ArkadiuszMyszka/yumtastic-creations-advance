import styled from 'styled-components';

export const PositionWrapper = styled.div`
  position: relative;
`;

export const StyledFormControl = styled.div`
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.textAreaBg};
  color: ${p => p.theme.colors.middleGreyTextColor};
  background-color: ${p => p.theme.colors.greySelectColor};
  position: relative;
  width: 146px;
  border-radius: 6px;
  position: relative;
  text-align: left;
  padding: 10px 14px;
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.media.normal};
  letter-spacing: -0.24px;
  cursor: pointer;

  :hover,
  :focus,
  :activ {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.btnDarkBgColor};
  }

  svg {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    fill: ${p => p.theme.colors.greenTextColor};
  }

  @media screen and (${p => p.theme.media.tablet}) {
    font-size: ${p => p.theme.fontSizes.m};
    width: 175px;
  }

  @media screen and (${p => p.theme.media.desktop}) {
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
  background-color: ${p => p.theme.colors.greySelectColor};
  padding: 4px 0;
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.media.normal};
  letter-spacing: -0.24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border: 1px solid ${p => p.theme.colors.textAreaBg};
  list-style-type: none;
  color: ${p => p.theme.colors.popularRecBorder};
  text-align: left;
  border-radius: 0px 0px 6px 6px;

  @media screen and (${p => p.theme.media.tablet}) {
    font-size: ${p => p.theme.fontSizes.s};
    width: 100%;
  }

  @media screen and (${p => p.theme.media.desktop}) {
    font-size: ${p => p.theme.fontSizes.m};
    width: 100%;
  }
`;

export const StyledMenuItem = styled.li`
  background-color: ${p => p.theme.colors.greySelectColor};
  width: 146px;
  padding: 8px 14px;
  cursor: pointer;
  border-radius: 3px;

  @media screen and (${p => p.theme.media.tablet}) {
    width: 175px;
  }

  @media screen and (${p => p.theme.media.desktop}) {
    width: 198px;
  }

  &:hover {
    color: ${p => p.theme.colors.middleGreyTextColor};
    background-color: ${p => p.theme.colors.lightBgColor};
    transition: all 0.2s ease-out;
    box-shadow: 0px 0px 4px 1px #f2f2f2b0;
  }
`;
