import styled from 'styled-components';

export const BoxSelector = styled.div`
  height: 34px;
  display: flex;
  position: relative;
  align-items: center;
  gap: 15px;
  padding: 20px;

  @media screen and (${p => p.theme.media.tablet}) {
    height: 41px;
    gap: 18px;
  }

  @media screen and (${p => p.theme.media.desktop}) {
    height: 47px;
    gap: 25px;
  }
`;

export const Label = styled.label`
  font-family: Poppins, sans-serif;
  font-weight: ${p => p.theme.media.semiBold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.5;
  color: ${p => p.theme.colors.mainTextColor};

  @media screen and (${p => p.theme.media.tablet}) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (${p => p.theme.media.desktop}) {
    font-size: ${p => p.theme.fontSizes.xm};
  }
`;
