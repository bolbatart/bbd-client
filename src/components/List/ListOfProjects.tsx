import ProjectsApi from 'api/projects/projectsApi';
import { IFilterQuery, IPaginationMeta, IProjectsView } from 'api/projects/types';
import ProjectCard from 'components/Cards/ProjectCard';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import styled from 'styled-components';

interface IProps {
  projects: IProjectsView[];
}

const ListOfProjects: React.FC<IProps> = ({ projects }) => {
  return (
    <StyledListOfProjects>
      {projects && projects.length > 0 && projects.map((project, i) => (
        <div className="pr-list__item" key={i}>
          <ProjectCard project={project} />
        </div>
      ))}

    </StyledListOfProjects>
  )
}

export default ListOfProjects;

const StyledListOfProjects = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .pr-list__item {
    margin-bottom: 80px;
    display: flex;
    flex: 34%;
    
    >div {
      /* display: flex; */
    }

    &:nth-child(odd) {
      margin-right: 40px;
    }
    
    &:nth-child(even) {
      justify-content: flex-end;
    }
    
  }

  @media (max-width: 780px) {
    display: block;
      
    .pr-list__item{
      display: flex;
      justify-content: center !important;
      margin-right: 0 !important;
    }
  }
`;
