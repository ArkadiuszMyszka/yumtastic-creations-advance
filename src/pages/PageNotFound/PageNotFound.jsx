import NotFoundImg from "../../images/graphics/404.png";

import {
  PageWrapper,
  PictureWrapper,
  Img,
  Text,
  TextWrapper,
  Title,
} from "./PageNotFound.styled.js";

export const PageNotFound = () => {
  return (
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
  );
};
