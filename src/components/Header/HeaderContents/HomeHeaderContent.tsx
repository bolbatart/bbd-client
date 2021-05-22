import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import styled from "styled-components";
import { routePaths } from 'services/router/routes';

const HomeHeaderContent: React.FC = () => {
  const history = useHistory();

  function onFindClick() {
    history.push(routePaths.projectsList);
  }

  return (
    <StyledHomeHeaderContent>
      <div className="home-header-content">
        <h1>Make your project come alive with the help of others</h1>
        <Button color="primary" onClick={onFindClick}>Find a project</Button>
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
