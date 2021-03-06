import React from "react";
import styled from "styled-components";

import { Button } from "reactstrap";
import { Input } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import { IFilterInput, IFilterQuery } from "api/projects/types";

interface IProps {
  onFilter: () => void;
  setFilterQuery: React.Dispatch<React.SetStateAction<IFilterQuery>>;
  filterParams?: IFilterInput;
}

const ProjectsHeaderContent: React.FC<IProps> = ({ setFilterQuery, filterParams, onFilter }) => {
  return (
    <StyledProjectsHeaderContent>
      <h1>Find a project</h1>

      <div className="prlh-filter">
        <form className="prlh-filter__form">
          {/* col */}
          <div className="prlh-filter__container">
            <div className="prlh-filter__col">
              <Input 
                placeholder="Key words" 
                value={filterParams?.name} 
                onChange={({currentTarget}) => 
                  setFilterQuery(prev => ({ ...prev, name: currentTarget.value }))
                } 
              />
              <Input 
                placeholder="Project area" 
                value={filterParams?.area} 
                onChange={({currentTarget}) => 
                  setFilterQuery(prev => ({ ...prev, area: currentTarget.value }))
                } 
              />
            </div>

            <div className="prlh-filter__col sm">
              <Input 
                placeholder="Location" 
                value={filterParams?.location} 
                onChange={({currentTarget}) => 
                  setFilterQuery(prev => ({ ...prev, location: currentTarget.value }))
                } 
              />
              {/* <Dropdown
                placeholder="Country"
                multiple
                selection
                options={undefined}
              /> */}
            </div>
          </div>
          <Button color="primary" onClick={onFilter}>
            Search
          </Button>
          {/* col */}
          {/* button */}
        </form>
      </div>
    </StyledProjectsHeaderContent>
  );
};

export default ProjectsHeaderContent;

const StyledProjectsHeaderContent = styled.div`
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

  .prlh-filter {
    max-width: 620px;
    background: rgba(255, 255, 255, 0.7);
    padding: 40px 40px 30px;

    &__container {
      display: flex;
      margin-bottom: 20px;
      /* justify-content: space-between; */
    }

    &__col {
      width: 310px;
      display: flex;
      flex-direction: column;

      &.sm {
        width: 180px;
        margin: 0 70px 0 20px;
      }

      > div:first-child {
        margin-bottom: 20px;
      }
    }
  }

  @media (max-width: 650px) {
    h1 {
      padding: 0 16px 0;
    }
    .prlh-filter {
      max-width: 100%;
      width: 100%;
      &__col {
        flex: 1;
        &.sm {
          margin: 0 0 0 20px;
          /* width: 100%; */
        }
      }
    }
  }

  @media (max-width: 500px) {
    .prlh-filter {
      &__container {
        display: block;
      }

      &__col {
        width: 100%;
        &.sm {
          margin: 20px 0 0 0;
          width: 100%;
        }
      }
    }
  }
`;
