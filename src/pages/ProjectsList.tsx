import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ProjectsHeaderImage from "assets/images/projectsheader.jpg";

import Header from "components/Header/Header";
import ProjectsHeaderContent from "components/Header/HeaderContents/ProjectsHeaderContent";
import ProjectCard from "components/Cards/ProjectCard";
import { Button, Dropdown } from "semantic-ui-react";
import ListOfProjects from "components/List/ListOfProjects";
import { IFilterInput, IFilterQuery, IPaginationMeta, IPaginationQuery, IProjectsView } from "api/projects/types";
import ProjectsApi from "api/projects/projectsApi";
import { toast } from "react-toastify";
import { CircularProgress } from "@material-ui/core";
import { AxiosResponse } from "axios";


const ProjectsList: React.FC = () => {
  const [projects, setProjects] = useState<IProjectsView[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [filterQuery, setFilterQuery] = useState<IFilterQuery>({ skip: '0', limit: '4' }); // { skip, limit, area?, name?, location? }
  const [totalProjects, setTotalProjects] = useState(0);

  function onFilter() {
    fetchProjects({ ...filterQuery, skip: '0'}, (res) => {
      setProjects(res.data.results);
    })
  }

  function onLoadMore() {
    if (projects) fetchProjects(filterQuery, (res) => {
      setProjects(prev => ([ ... prev, ...res.data.results]))
    })
  }

  function getNextFilterQuery(meta: IPaginationMeta): IFilterQuery {
    return {
      ...filterQuery,
      skip: (parseInt(meta.skip) + parseInt(meta.limit)).toString(),
      limit: meta.limit
    }
  }

  function fetchProjects(filterQuery: IFilterQuery, callback?: (res: AxiosResponse<any>) => void) {
    setIsFetching(true);
    ProjectsApi.get(filterQuery)
      .then(res => {
        setIsFetching(false);
        setFilterQuery(getNextFilterQuery(res.data.meta))
        setTotalProjects(res.data.meta.total);
        if (callback) callback(res);
      })
      .catch(err => {
        toast.error('Ops! Something went wrong!')
        setIsFetching(false);
      })
  }

  useEffect(() => {
    fetchProjects(filterQuery, (res) => {
      setProjects(res.data.results)
    })
  }, []);

  return (
    <StyledProjectsList>
      {/* Header */}
      <section className="prl-header">
        <Header image={ProjectsHeaderImage}>
          <ProjectsHeaderContent setFilterQuery={setFilterQuery} filterParams={filterQuery} onFilter={onFilter} />
        </Header>
      </section>

    {/* Sort by / projects list  */}
      <section className="prl-projects">
        <div className="_container">
          {/* Sort by */}
          <div className="prl-projects-sortby">
            {/* <span>Sort by:</span>
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
            </div> */}
          </div>

          <h2 className="bold">Find an existing project to work on!</h2>
          {isFetching && <CircularProgress />} 
          {projects && projects.length > 0 ? (
            <>
              <ListOfProjects projects={projects} />
              {!isFetching && projects.length > 0 && projects.length < totalProjects &&
                <div className="pr-list__load-wrapper">
                  <Button onClick={onLoadMore} >+ Load more</Button>
                </div>
              }
            </>
          ) : (
            <p className="noprojects">
              There is no projects
            </p>
          )}

        </div>
      </section>
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

  .noprojects {
    margin-top: 30px;
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
