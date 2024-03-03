import React from 'react';
import { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Loader from '../Loader/Loader.jsx';
import { Layout } from './SharedLayout.styled.js';

const SharedLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
        {children && React.cloneElement(children, { navigate })}
      </Suspense>
      <Footer />
    </Layout>
  );
};

export default SharedLayout;
