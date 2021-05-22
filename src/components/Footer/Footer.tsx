import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className='_container'>
        <h4>Project Happens</h4>
        <p>Copyright © Project Happens, 2021</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  padding: 60px 0;

  h4 {
    margin-bottom: 16px;
  }
`;
