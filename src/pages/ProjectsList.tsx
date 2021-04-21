import React from "react";
import styled from "styled-components";

import ProjectsHeaderImage from "assets/images/projectsheader.jpg";

import Header from "components/Header/Header";
import ProjectsHeaderContent from "components/Header/HeaderContents/ProjectsHeaderContent";
import ProjectCard from "components/Cards/ProjectCard";
import { Dropdown } from "semantic-ui-react";
import ListOfProjects from "components/List/ListOfProjects";

const ProjectsList: React.FC = () => {
  return (
    <StyledProjectsList>
      {/* Header */}
      <section className="prl-header">
        <Header image={ProjectsHeaderImage}>
          <ProjectsHeaderContent />
        </Header>
      </section>

    {/* Sort by / projects list  */}
      <section className="prl-projects">
        <div className="_container">
          {/* Sort by */}
          <div className="prl-projects-sortby">
            <span>Sort by:</span>
            <div className="prl-projects-sortby__wrapper">
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
          </div>

          <h2 className="bold">Find an existing project to work on!</h2>

          {/* Projects */}
          {/* <div className="prl-projects__container">
            {Array(30).fill(
              <div className="prl-projects__item">
                <ProjectCard />
              </div>
            )}
          </div> */}
          <ListOfProjects />
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
    &-sortby {
      margin: 42px 0 58px;
      display: flex;
      align-items:center;

      &__wrapper {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }

      span {
        margin-right: 80px;
      }
    }
  }

// sort by
  @media (max-width: 980px) {
    .prl-projects-sortby {
      display: block;
      
      &__wrapper {
        >div {
          flex: 34%;
          margin-top: 20px;

          &:nth-child(odd) {
            margin-right: 20px;
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    .prl-projects-sortby {
      &__wrapper {
        display: block;
        >div {
          display:block !important;
          margin: 20px 0px 0px 0px !important;
        }
      }
    }
  }
`;
