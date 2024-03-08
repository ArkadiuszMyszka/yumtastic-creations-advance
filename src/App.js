// import { refreshUser } from './redux/auth/authOperations.jsx';
// import useAuth from './hooks/useAuth.jsx';
// import { useDispatch } from 'react-redux';
// import { lazy, useEffect } from 'react'; // dodac lazy
// import SharedLayout from './components/SharedLayout/SharedLayout.jsx'; // do zmiany jak dojdzie plik

import PrivateRoute from './components/PrivateRoute.jsx';
import React, { lazy, Suspense } from 'react';
import RestrictedRoute from './components/RestrictedRoute.jsx';
import { Route, Routes } from 'react-router-dom';

// do zmiany sciezki na bieżąco jak bedą pojawiac sie pliki

const AddRecipesPage = lazy(
  () => import('./pages/AddRecipePage/AddRecipePage.jsx'),
);
// const CategoriesPage = React.lazy(() => import('pages/Categories'));
// const FavoritesPage = React.lazy(() => import('pages/Favorites'));
// const MainPage = lazy(() => import('pages/Main'));
// const MyRecipesPage = lazy(() => import('pages/MyRecipes'));
const PageNotFound = lazy(
  () => import('./pages/PageNotFound/PageNotFound.jsx'),
);
// const RecipesPage = lazy(() => import('pages/Recipe'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const SearchPage = lazy(() => import('./pages/SearchPage/SearchPage.jsx'));
// const ShoppingListPage = React.lazy(() => import('pages/ShoppingList'));
const SigninPage = lazy(() => import('./pages/SigninPage/SigninPage'));
const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage.jsx'));

const App = () => {
  // const dispatch = useDispatch();

  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  // return isRefreshing ? (
  //   'refreshing'
  // ) : (
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <>
        {/* <Route
          path="/welcome"
          element={<RestrictedRoute component={<WelcomePage />} />}
        /> */}
        <Route index element={<WelcomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />

        <Route
          path="/register"
          element={<RestrictedRoute component={<RegisterPage />} />}
        />
        <Route
          path="/signin"
          element={<RestrictedRoute component={<SigninPage />} />}
        />
      </>

      {/* <Route path="/" element={<SharedLayout />} /> */}
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
        element={<PrivateRoute component={<AddRecipesPage />} />}
      />
      {/* <Route
        path="my"
        element={<PrivateRoute component={<MyRecipesPage />} />}
      /> */}
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
        element={<PrivateRoute component={<SearchPage />} />}
      />
      <Route
        path="recipe/:recipeId"
        element={
          <PrivateRoute
          // component={<RecipesPage />}
          />
        }
      />
      <Route path="*" element={<PageNotFound />} />
      {/* </Route> */}
      </Routes>
      </Suspense>
  );
};

// const App = () => {
//   const dispatch = useDispatch();

//   const { isRefreshing } = useAuth();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     'refreshing'
//   ) : (
//   <Routes>
//     <>
//       <Route
//           path="/welcome"
//           element={<RestrictedRoute component={<WelcomePage />} />}
//         />

//       <Route
//           path="/register"
//           element={
//             <RestrictedRoute
//             // component={<RegisterPage />}
//             />
//           }
//         />
//         <Route
//           path="/signin"
//           element={
//             <RestrictedRoute
//             // component={<SigninPage />}
//             />
//           }
//         />
//     </>

//     <Route
//       path="/"
//       //   element={<SharedLayout />}
//     >
//       <Route
//         index
//         // element={<PrivateRoute component={<MainPage />} />}
//       />

//       <Route
//         path="categories/:categoryName"
//         element={
//           <PrivateRoute
//             redirectTo="/welcome"
//             // component={<CategoriesPage />}
//           />
//         }
//       />

//       <Route
//         path="add"
//         element={
//           <PrivateRoute
//           // component={<AddRecipesPage />}
//           />
//         }
//       />
//       <Route
//         path="my"
//         element={
//           <PrivateRoute
//           // component={<MyRecipesPage />}
//           />
//         }
//       />
//       <Route
//         path="favorite"
//         element={
//           <PrivateRoute
//           // component={<FavoritesPage />}
//           />
//         }
//       />
//       <Route
//         path="shopping-list"
//         element={
//           <PrivateRoute
//           // component={<ShoppingListPage />}
//           />
//         }
//       />
//       <Route
//         path="search"
//         element={
//           <PrivateRoute
//           // component={<SearchPage />}
//           />
//         }
//       />
//       <Route
//         path="recipe/:recipeId"
//         element={
//           <PrivateRoute
//           // component={<RecipesPage />}
//           />
//         }
//       />
//       <Route
//         path="*"
//         // element={<NotFoundPage />}
//       />
//     </Route>
//   </Routes>;
//   );
// };

export default App;
