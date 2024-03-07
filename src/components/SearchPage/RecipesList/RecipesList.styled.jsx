import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (${p => p.theme.media.tablet}) {
    gap: 32px;
  }

  @media screen and (${p => p.theme.media.desktop}) {
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

  @media screen and (${p => p.theme.media.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 40px;
    padding-bottom: 50px;
  }

  @media screen and (${p => p.theme.media.desktop}) {
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
  background-color: ${p => p.theme.colors.whiteColor};

  @media screen and (${p => p.theme.media.tablet}) {
    width: 336px;
  }

  @media screen and (${p => p.theme.media.desktop}) {
    width: 300px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const Label = styled.h3`
  font-family: Poppins, sans-serif;
  font-weight: ${p => p.theme.media.semiBold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.5;
  color: ${p => p.theme.colors.subtitleTextColor};
`;
