import React from "react";
import styled from "styled-components";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "components/Header/NavHeader/NavHeader";
import Footer from "components/Footer/Footer";

import RenderRoutes from "services/router/RenderRoutes";

const Layout: React.FC = () => {
  return (
    <StyledLayout>
      <ToastContainer 
        position='top-right'
        autoClose={10000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
      />
      <Header />
      <main>
        <RenderRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.div`
  position: relative;
  min-height: 100vh;

  main {
    // same as footer's height
    padding: 0 0 80px 0;
  }

  footer {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 80px;
  }
`;
