import React from 'react';
import { LoaderContainer, StyledInfinitySpin } from './LoaderStyles.jsx';

const Loader = () => {
  return (
    <LoaderContainer>
      <StyledInfinitySpin width={400} />
    </LoaderContainer>
  );
};

export default Loader;
