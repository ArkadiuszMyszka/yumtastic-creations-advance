import styled from 'styled-components';

export const OwnerRecipesPage = styled.div`
  background-color: ${p => p.theme.colors.whiteColor};
`;

export const MyRecipesEmpty = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  gap: 20px;
  align-items: center;
  justify-content: center;
  font-size: ${p => p.theme.fontSizes.xm};
  font-weight: ${p => p.theme.media.semiBold};
  padding: 20px;

  @media screen and (${p => p.theme.media.tablet}) {
    font-size: ${p => p.theme.fontSizes.l};
  }
  @media screen and (${p => p.theme.media.normal}) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;
