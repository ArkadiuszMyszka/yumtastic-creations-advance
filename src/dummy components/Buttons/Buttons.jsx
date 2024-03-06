import {
  Cancel,
  Logout,
  OtherCategories,
  SearchBlack,
  SearchGreen,
  SignIn,
  Subscribe,
} from './Buttons.styled';

export const CancelBtn = props => {
  return <Cancel>{props.text}</Cancel>;
};

export const LogoutBtn = props => {
  return <Logout>{props.text}</Logout>;
};

export const OtherCategoriesBtn = props => {
  return <OtherCategories>{props.text}</OtherCategories>;
};

export const SearchBtnGreen = props => {
  return <SearchGreen>{props.text}</SearchGreen>;
};

export const SearchBtnBlack = props => {
  return <SearchBlack>{props.text}</SearchBlack>;
};

export const SignInBtn = props => {
  return <SignIn>{props.text}</SignIn>;
};

export const SubscribeBtn = props => {
  return <Subscribe>{props.text}</Subscribe>;
};
