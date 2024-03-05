export const theme = {
  //color: ${p => p.theme.colors.whiteColor};
  colors: {
    yummyColor: '#22252A',
    mainTextColor: '#23262A',
    titleTextColor: '#001833',
    subtitleTextColor: '#3E4462',
    whiteTextColor: '#FAFAFA',
    greyTextColor: '#BDBDBD',
    middleGreyTextColor: '#3E4462',
    lightGreyTextColor: '#7E7E7E',
    greenTextColor: '#8BAA36',
    blackTextColor: '#000000',
    lightTextColor: '#333333',
    paginationColor: '#656565',
    footerDarckTextColor: '#22252A',
    greySelectColor: '#F5F5F5',
    bgMain: '#FAFAFA',
    bgMainDark: '#1E1F28',
    bgMobileMenu: '#EBF3D4',
    bgModalDark: '#2A2C36',

    lightBgColor: '#ECECEC',
    lightDarckBgColor: '#2A2C36',
    darckBgColor: '#1E1F28',
    btnDarkBgColor: '#22252A',
    greenBgColor: '#8BAA36',
    footerLogoBgColor: '#EBF3D4',

    whiteColor: '#FAFAFA',
    bcgWhiteColor: '#FFFFFF',
    greyColor: '#BDBDBD',
    searchBorderColor: '#F0F0F0',
    greenColor: '#8BAA36',
    inputBgColor: '#F5F5F5',
    textAreaBg: '#D9D9D9',
    popularRecBorder: '#707070',
    paginationBgColor: '#FAFAFA',
    closeBtnColor: '#333333',
    borderBtnColor: '#23262A',
  },

  media: {
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1200px)',
  },
  /* use
   @media screen and (${(p) => p.theme.media.tablet}) {
   font-weights: ${p => p.theme.media.normal};
    ...
  }
  */

  // font-weights: ${p => p.theme.media.normal};
  fontWeights: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  // font-size: ${p =>p.theme.fontSize.m};
  fontSizes: {
    xxs: '8px',
    x: '10px',
    xs: '12px',
    s: '14px',
    m: '16px',
    xm: '18px',
    l: '24px',
    xl: '28px',
    xxl: '32px',
    sb: '44px',
    mb: '60px',
    lb: '72px',
    b: '100px',
  },
  // border: ${p=>p.theme.borders.normal}
  borders: {
    none: 'none',
    normal: '1px solid',
    medium: '2px solid',
  },
  // border-radius: ${p =>p.theme.radii.light};
  radii: {
    none: '0',
    superLight: '4px',
    light: '6px',
    normal: '8px',
    pagination: '26px',
    modalProfile: '30px',
    switch: '50px',
    round: '100px',
    borderTopLeft: '30px',
    borderTopRight: '80px',
    borderBotLeft: '80px',
    borderBotRight: '30px',
    image: '8px',
    btnIcon: '4px',
  },
};
