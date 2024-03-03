import styled from 'styled-components';

export const StyledTitle = styled.h1`
  color: ${p => p.theme.colors.titleTextColor};
  font-family: Poppins;
  font-size: ${p => p.theme.fontSize.xl};
  font-weight: ${p => p.theme.media.semiBold};
  letter-spacing: -0.02em;
  line-height: 28px;
  margin-left: 16px;
  text-align: left;

  @media (${p => p.theme.media.tablet}) {
    font-size: ${p => p.theme.fontSize.xxl};
    line-height: 32px;
    margin-left: 32px;
  }

  @media (min-width: 1200px) {
    font-size: ${p => p.theme.fontSize.sb};
    line-height: 44px;
    margin-left: 100px;
  }
`;

export const Section = styled.section`
  position: relative;
  padding-top: 114px;
  min-width: 320px;

  @media screen and (${p => p.theme.media.tablet}) {
    padding-top: 136px;
  }

  @media screen and (${p => p.theme.media.desktop}) {
    padding-top: 164px;
  }
`;

export const SquareFirst = styled.div`
  position: absolute;
  top: 76px;
  left: 104px;
  width: 11px;
  height: 11px;
  transform: rotate(-25deg);
  border-radius: 3px;
  background-color: ${p => p.theme.colors.greenTextColor};

  @media screen and (${p => p.theme.media.tablet}) {
    left: 187px;
    width: 14px;
    height: 14px;
  }

  @media screen and (${p => p.theme.media.desktop}) {
    width: 14px;
    height: 14px;
    top: 116px;
    left: 228px;
  }
`;

export const SquareSecond = styled(SquareFirst)`
  top: 106px;
  left: 490px;

  @media screen and (${p => p.theme.media.tsblet}) {
    top: 89px;
    left: 694px;
  }

  @media screen and (min-width: 1024px) {
    width: 13px;
    height: 13px;
    left: 805px;
  }

  @media screen and (${p => p.theme.media.desktop}) {
    width: 13px;
    height: 13px;
    top: 129px;
    left: 1149px;
  }
`;

export const SquareBlack = styled.div`
  position: absolute;
  bottom: 0;
  left: 401px;
  width: 10px;
  height: 10px;
  top: 190px;
  transform: rotate(-25deg);
  border-radius: 3px;
  background-color: ${p => p.theme.colors.yummyColor};

  @media screen and (${p => p.theme.media.tablet}) {
    top: 190px;
    width: 13px;
    height: 13px;
    left: 555px;
  }

  @media screen and (min-width: 1024px) {
    top: 190px;
    width: 13px;
    height: 13px;
    left: 705px;
  }

  @media screen and (min-width: 1200px) {
    width: 13px;
    height: 13px;
    top: 250px;
    left: 752px;
  }
`;
