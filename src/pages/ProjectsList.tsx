import React from "react";
import styled from "styled-components";

import ProjectsHeaderImage from "assets/images/projectsheader.jpg";

import BigHeader from "components/Header/BigHeader";
import ProjectsHeaderContent from "components/Header/HeaderContents/ProjectsHeaderContent";
import ProjectCard from "components/Cards/ProjectCard";

const ProjectsList: React.FC = () => {
  return (
    <StyledProjectsList>
      <section className="prl-header">
        <BigHeader image={ProjectsHeaderImage}>
          <ProjectsHeaderContent />
        </BigHeader>
      </section>

      {/* <div className="_container">
        <ProjectCard />
      </div> */}
    </StyledProjectsList>
  );
};

export default ProjectsList;

const StyledProjectsList = styled.div`
  h4 {
    margin: 0 0 100px;
  }
`;
