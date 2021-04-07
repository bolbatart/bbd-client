import React from "react";
import styled from "styled-components";

import ProjectCard from "components/Cards/ProjectCard";

const ProjectsList: React.FC = () => {
  return (
    <StyledProjectsList>
      <h4>Projects' List Page</h4>

      <div className="_container">
        <ProjectCard />
      </div>
    </StyledProjectsList>
  );
};

export default ProjectsList;

const StyledProjectsList = styled.div`
  h4 {
    margin: 0 0 100px;
  }
`;
