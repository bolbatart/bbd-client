import React from "react";
import styled from "styled-components";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const Layout: React.FC = (props) => {
  return (
    <StyledLayout>
      <Header />
      {props.children}
      <Footer />
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.div``;
