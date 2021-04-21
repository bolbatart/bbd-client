import ProjectCard from 'components/Cards/ProjectCard';
import React from 'react'
import styled from 'styled-components';

interface IProps {
  // get projects
}

const ListOfProjects: React.FC<IProps> = (props) => {
  return (
    <StyledListOfProjects>
      {Array(30).fill(
        <div className="pr-list__item">
          <ProjectCard />
        </div>
      )}
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
