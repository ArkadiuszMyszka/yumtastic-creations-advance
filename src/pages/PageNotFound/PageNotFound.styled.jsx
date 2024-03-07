import styled from 'styled-components';

export const PageWrapper = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media screen and (${p => p.theme.media.tablet}) {
    gap: 32px;
  }
`;

export const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 14px;

  @media screen and (${p => p.theme.media.tablet}) {
    margin-bottom: 32px;
  }
`;
export const Img = styled.img`
  width: 300px;

  @media screen and (${p => p.theme.media.tablet}) {
    width: 500px;
  }
`;

export const TextWrapper = styled.div`
  text-align: center;
  min-width: 206px;

  @media screen and (${p => p.theme.media.tablet}) {
    width: 450px;
  }

  @media screen and (${p => p.theme.media.desktop}) {
    min-width: 500px;
  }
`;

export const Title = styled.h2`
  font-family: Poppins, sans-serif;
  margin-bottom: 8px;
  font-weight: ${p => p.theme.media.medium};
  font-size: ${p => p.theme.fontSizes.xm};
  line-height: 20px;
  color: #000000;

  @media screen and (${p => p.theme.media.tablet}) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const Text = styled.p`
  font-family: Poppins, sans-serif;
  font-weight: ${p => p.theme.media.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 18px;
  color: ${p => p.theme.colors.greyTextColor};

  @media screen and (${p => p.theme.media.tablet}) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 24px;
  }

  @media screen and (${p => p.theme.media.desktop}) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
