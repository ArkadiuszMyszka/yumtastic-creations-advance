import styled from 'styled-components';
import { InfinitySpin } from 'react-loader-spinner';

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledInfinitySpin = styled(InfinitySpin)`
  color: ${({ theme }) => theme.greenBgColor || '#8baa36'};
`;
