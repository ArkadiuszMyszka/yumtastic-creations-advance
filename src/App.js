import { refreshUser } from './redux/auth/authOperations.jsx';
import useAuth from './hooks/useAuth.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'; // dodac lazy
// import SharedLayout from './components/SharedLayout/SharedLayout.jsx'; // do zmiany jak dojdzie plik
import PrivateRoute from './components/PrivateRoute.jsx';
import React from 'react';
import RestrictedRoute from './components/RestrictedRoute.jsx';
import { Route, Routes } from 'react-router-dom';

// do zmiany sciezki na bieżąco jak bedą pojawiac sie pliki

// const AddRecipesPage = React.lazy(() => import('pages/AddRecipes'));
// const CategoriesPage = React.lazy(() => import('pages/Categories'));
// const FavoritesPage = React.lazy(() => import('pages/Favorites'));
// const MainPage = React.lazy(() => import('pages/Main'));
// const MyRecipesPage = React.lazy(() => import('pages/MyRecipes'));
// const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
// const RecipesPage = React.lazy(() => import('pages/Recipe'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const SearchPage = React.lazy(() => import('pages/Search/Search'));
// const ShoppingListPage = React.lazy(() => import('pages/ShoppingList'));
// const SigninPage = lazy(() => import('../pages/Signin'));
// const WelcomePage = lazy(() => import('../pages/Welcome'));

const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    'refreshing'
  ) : (
    <Routes>
      <>
        <Route
          path="/welcome"
          element={
            <RestrictedRoute
            // component={<WelcomePage />}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
            // component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute
            // component={<SigninPage />}
            />
          }
        />
      </>

      <Route
        path="/"
        // element={<SharedLayout />}
      >
        <Route
          index
          // element={<PrivateRoute component={<MainPage />} />}
        />

        <Route
          path="categories/:categoryName"
          element={
            <PrivateRoute
              redirectTo="/welcome"
              // component={<CategoriesPage />}
            />
          }
        />

        <Route
          path="add"
          element={
            <PrivateRoute
            // component={<AddRecipesPage />}
            />
          }
        />
        <Route
          path="my"
          element={
            <PrivateRoute
            // component={<MyRecipesPage />}
            />
          }
        />
        <Route
          path="favorite"
          element={
            <PrivateRoute
            // component={<FavoritesPage />}
            />
          }
        />
        <Route
          path="shopping-list"
          element={
            <PrivateRoute
            // component={<ShoppingListPage />}
            />
          }
        />
        <Route
          path="search"
          element={
            <PrivateRoute
            // component={<SearchPage />}
            />
          }
        />
        <Route
          path="recipe/:recipeId"
          element={
            <PrivateRoute
            // component={<RecipesPage />}
            />
          }
        />
        <Route
          path="*"
          // element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
