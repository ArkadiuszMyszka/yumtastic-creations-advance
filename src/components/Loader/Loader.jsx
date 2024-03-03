import React from 'react';
import { LoaderContainer, StyledInfinitySpin } from './Loader.styled.jsx';

const Loader = () => {
  return (
    <LoaderContainer>
      <StyledInfinitySpin width={400} />
    </LoaderContainer>
  );
};

export default Loader;
