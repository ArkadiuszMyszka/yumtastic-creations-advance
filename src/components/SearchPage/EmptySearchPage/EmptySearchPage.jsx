import searchVegBg from '../../../images/graphics/look_for_sth_else_veggies.png';

import {
  EmptyImgWrapper,
  EmptyText,
  EmptyWrapper,
} from './EmptySearchPage.styled.jsx';

const EmptyPage = ({ children }) => {
  return (
    <EmptyWrapper>
      <EmptyImgWrapper>
        <picture>
          <source srcSet={`${searchVegBg}`} />
          <img
            src={searchVegBg}
            srcSet={`${searchVegBg}`}
            alt="no items found"
          />
        </picture>
      </EmptyImgWrapper>
      <EmptyText>{children}</EmptyText>
    </EmptyWrapper>
  );
};

export default EmptyPage;
