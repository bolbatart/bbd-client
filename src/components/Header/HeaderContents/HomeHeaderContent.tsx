import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

const HomeHeaderContent: React.FC = () => {
  return (
    <StyledHomeHeaderContent>
      <div className="home-header-content">
        <h1>Make your project come alive with the help of others</h1>
        <Button color="primary">Find a project</Button>
      </div>
    </StyledHomeHeaderContent>
  );
};

export default HomeHeaderContent;

const StyledHomeHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  h1 {
    max-width: 606px;
    font-weight: 600;
    color: white;
    margin: 0 0 17px 0;
  }
`;
