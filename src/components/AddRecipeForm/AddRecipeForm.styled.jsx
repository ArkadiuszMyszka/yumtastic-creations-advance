import styled from 'styled-components';

export const AddRecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 100px;

  @media screen and (${p => p.theme.media.tablet}) {
    padding-top: 73px;
    padding-bottom: 200px;
  }

  @media screen and (${p => p.theme.media.desktop}) {
    padding-top: 102px;
  }
`;

// export const Title = styled.h1`
//   font-family: "Poppins", sans-serif;
//   font-weight: 600;
//   color: #001833;
//   font-size: 28px;
//   line-height: 1;
//   letter-spacing: -0, 02em;
//   text-align: left;
//   margin-bottom: 72px;

//   @media screen and (min-width: 768px) {
//     font-size: 32px;
//     margin-bottom: 100px;
//   }

//   @media screen and (min-width: 1440px) {
//     font-size: 44px;
//   }
// `;

export const AddWrap = styled.div`
  padding-top: 72px;

  @media screen and (${p => p.theme.media.tablet}) {
    padding-top: 100px;
  }

  @media screen and (${p => p.theme.media.desktop}) {
    gap: 100px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Form = styled.form`
  padding-bottom: 72px;

  @media screen and (${p => p.theme.media.tablet}) {
    padding-bottom: 100px;
  }

  @media screen and (${p => p.theme.media.desktop}) {
    padding-bottom: 0px;
  }
`;

export const FormImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  font-size: ${p => p.theme.fontSizes.m};
  padding-bottom: 44px;

  @media screen and (${p => p.theme.media.tablet}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: stretch;
    /* max-width: 704px; */
    padding-bottom: 104px;
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.normal};
    /* opacity: 0.5; */
  }

  @media screen and (${p => p.theme.media.desktop}) {
    display: flex;
    /* max-width: 800px; */
    gap: 50px;
    padding-bottom: 104px;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const Input = styled.input`
  border: none;
  display: flex;
  font-weight: ${p => p.theme.fontWeights.normal};
  border-bottom: ${p => p.theme.borders.normal};
  padding: 10px 0px;
  border-color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.greyColor
      : p.theme.colors.whiteTextColor};
  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.blackTextColor
      : p.theme.colors.whiteTextColor};
  font-size: ${p => p.theme.fontSizes.s};

  &::placeholder {
    color: ${p =>
      p.mode === 'light'
        ? p.theme.colors.blackTextColor
        : p.theme.colors.whiteTextColor};
    opacity: 0.5;
  }
`;

export const Camera = styled.svg`
  stroke: white;
  height: 50px;
  width: 50px;
  top: -50px;
  left: -50px;
  align-items: center;
  transform: translate(-50%, -50%);
`;

export const AddRecipeDescript = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (${p => p.theme.media.tablet}) {
    gap: 32px;
    min-width: 400px;
  }

  @media screen and (${p => p.theme.media.desktop}) {
    gap: 40px;
  }
`;
export const InputSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${p => p.theme.borders.normal};
  padding: 10px 0px;
  border-color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.greyColor
      : p.theme.colors.whiteTextColor};
  /* color: #0000;
  font-size: 12px; */
`;
export const InputSelectTitle = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  letter-spacing: -0.02em;
  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.blackTextColor
      : p.theme.colors.whiteTextColor};

  opacity: 0.5;
`;
export const SelectCategory = styled.select`
  border: none;
  outline: none;
  font-weight: ${p => p.theme.fontWeights.normal};
  padding: 8px 26px 8px 14px;
  line-height: 1;
  min-width: 132px;
  font-size: ${p => p.theme.fontSizes.xs};
  border-radius: ${p => p.theme.radii.light};
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
`;

export const SelectCooking = styled.select`
  border: none;
  min-width: 132px;
  text-align: center;
  line-height: 1;
  outline: none;
  border-radius: ${p => p.theme.radii.light};
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
`;

export const TextAreaContainer = styled.div`
  max-width: 360px;
  padding-bottom: 18px;

  @media screen and (${p => p.theme.media.tablet}) {
    max-width: 500px;

    padding-bottom: 32px;
  }
`;
export const AddRecipeBoxTitle = styled.h2`
  padding-bottom: 24px;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1;
  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.subtitleTextColor
      : p.theme.colors.whiteTextColor};

  @media screen and (${p => p.theme.media.tablet}) {
    padding-bottom: 32px;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  padding: 10px 16px;
  width: 100%;
  height: 100px;

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.light};
  border-color: ${p =>
    p.mode === 'light' ? 'transparent' : p.theme.colors.whiteColor};
  outline: none;
  scroll-behavior: auto;

  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.blackTextColor
      : p.theme.colors.whiteTextColor};

  background-color: ${p =>
    p.mode === 'light' ? p.theme.colors.textAreaBg : 'transparent'};

  &::placeholder {
    color: ${p => p.mode !== 'light' && p.theme.colors.whiteTextColor};
    opacity: 0.5;
  }

  @media screen and (${p => p.theme.media.tablet}) {
    height: 220px;
    padding: 16px 28px;
  }
  @media screen and (${p => p.theme.media.desktop}) {
    padding: 16px 22px;
  }
`;

export const AddRecipeFollowPopular = styled.div`
  @media screen and (${p => p.theme.media.desktop}) {
    max-width: 320px;
  }
`;

export const ButtonAdd = styled.button`
  padding: 12px 48px;

  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.5;

  color: ${p => p.theme.colors.whiteTextColor};
  background-color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.yummyColor
      : p.theme.colors.greenBgColor};

  border-radius: 35px 70px;

  transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)';

  &:hover,
  &:focus {
    color: ${p => p.mode !== 'light' && p.theme.colors.greenColor};
    background-color: ${p =>
      p.mode === 'light'
        ? p.theme.colors.greenBgColor
        : p.theme.colors.whiteColor};
  }

  @media screen and (${p => p.theme.media.tablet}) {
    padding: 14px 64px;
  }
`;
// export const Section = styled.section`
//   position: relative;
//   padding-top: 114px;
//   min-width: 320px;

//   @media screen and (min-width: 768px) {
//     padding-top: 136px;
//   }

//   @media screen and (min-width: 1440px) {
//     padding-top: 164px;
//   }
// `;

// export const SquareFirst = styled.div`
//   position: absolute;
//   top: 76px;
//   left: 104px;
//   width: 11px;
//   height: 11px;
//   transform: rotate(-25deg);
//   border-radius: 3px;
//   background-color: #8baa36;

//   @media screen and (min-width: 768px) {
//     left: 187px;
//     width: 14px;
//     height: 14px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 14px;
//     height: 14px;
//     top: 116px;
//     left: 228px;
//   }
// `;

// export const SquareSecond = styled(SquareFirst)`
//   top: 106px;
//   left: 490px;

//   @media screen and (min-width: 768px) {
//     top: 89px;
//     left: 694px;
//   }

//   @media screen and (min-width: 1024px) {
//     width: 13px;
//     height: 13px;
//     left: 805px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 13px;
//     height: 13px;
//     top: 129px;
//     left: 1149px;
//   }
// `;

// export const SquareBlack = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 401px;
//   width: 10px;
//   height: 10px;
//   top: 190px;
//   transform: rotate(-25deg);
//   border-radius: 3px;
//   background-color: #22252a;

//   @media screen and (min-width: 768px) {
//     top: 190px;
//     width: 13px;
//     height: 13px;
//     left: 555px;
//   }

//   @media screen and (min-width: 1024px) {
//     top: 190px;
//     width: 13px;
//     height: 13px;
//     left: 705px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 13px;
//     height: 13px;
//     top: 250px;
//     left: 752px;
//   }
// `;
