import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <h4>Footer</h4>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  // height must be set in the components/Layout.tsx footer { }
  height: 100%;
`;
