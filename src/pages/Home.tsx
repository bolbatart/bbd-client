import React from "react";
import styled from "styled-components";

const Home: React.FC = () => {
  return (
    <StyledHome>
      <h1>heading</h1>
      <p>paragraph</p>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div``;
