import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth.jsx';

const PrivateRoute = ({ component: Component, redirectTo = '/welcome' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
