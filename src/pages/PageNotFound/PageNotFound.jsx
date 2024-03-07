import NotFoundImg from '../../images/graphics/404.png';
import MainPageTitle from '../../components/MainPageTitle/MainPageTitle.jsx';

import {
  Img,
  PageWrapper,
  PictureWrapper,
  Text,
  TextWrapper,
  Title,
} from './PageNotFound.styled.jsx';

export const PageNotFound = () => {
  return (
    <>
      <MainPageTitle />
      <PageWrapper>
        <PictureWrapper>
          <picture>
            <source srcSet={`${NotFoundImg}`} />
            <Img src={NotFoundImg} srcSet={`${NotFoundImg}`} alt="404 page" />
          </picture>
        </PictureWrapper>
        <TextWrapper>
          <Title>We are sorry,</Title>
          <Text>but the page you were looking for can’t be found..</Text>
        </TextWrapper>
      </PageWrapper>
    </>
  );
};
