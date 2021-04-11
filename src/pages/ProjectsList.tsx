import React from "react";
import styled from "styled-components";

import ProjectsHeaderImage from "assets/images/projectsheader.jpg";

import BigHeader from "components/Header/BigHeader";
import ProjectsHeaderContent from "components/Header/HeaderContents/ProjectsHeaderContent";
import ProjectCard from "components/Cards/ProjectCard";
import { Dropdown } from "semantic-ui-react";

const ProjectsList: React.FC = () => {
  return (
    <StyledProjectsList>
      <section className="prl-header">
        <BigHeader image={ProjectsHeaderImage}>
          <ProjectsHeaderContent />
        </BigHeader>
      </section>

      <section className="prl-projects">
        <div className="_container">
          <div className="prl-projects-sortby">
            <span>Sort by:</span>
            <Dropdown
              placeholder="Project area"
              multiple
              selection
              options={undefined}
            />
            <Dropdown
              placeholder="Available positions"
              multiple
              selection
              options={undefined}
            />
            <Dropdown
              placeholder="Country"
              multiple
              selection
              options={undefined}
            />
            <Dropdown
              placeholder="Data published"
              multiple
              selection
              options={undefined}
            />
          </div>

          <h2 className="bold">Find an existing project to work on!</h2>

          <div className="prl-projects__container">
            {Array(30).fill(
              <div className="prl-projects__item">
                <ProjectCard />
              </div>
            )}
          </div>
        </div>
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

  .prl-projects {
    &__container {
      margin-top: 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__item {
      margin-bottom: 80px;
    }

    &-sortby {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 42px 0 58px;
      span {
        margin-right: 80px;
      }
    }
  }
`;
