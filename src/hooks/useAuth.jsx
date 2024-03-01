import {
  selectError,
  selectIsLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectisRegistered,
  selectUser,
} from "../redux/auth/authSelectors.jsx";

import { useSelector } from "react-redux";

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectError);
  const isRegistered = useSelector(selectisRegistered);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isLoading,
    errorMessage,
    isRegistered,
  };
};

export default useAuth;
