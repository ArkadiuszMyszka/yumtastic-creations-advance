import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  @media screen and (${p => p.theme.media.tablet}) {
    gap: 28px;
  }
`;
