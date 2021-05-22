import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "components/Header/Header";
import image from "assets/images/hpheader.jpg";
import HomeHeaderContent from "components/Header/HeaderContents/HomeHeaderContent";
import AppDescCard from "components/Cards/AppDescCard";
import { Button } from "reactstrap";
import Carousel from "components/Carousel/Carousel";
import { useHistory } from "react-router-dom";
import { routePaths } from "services/router/routes";
import ProjectsApi from "api/projects/projectsApi";
import { IProjectsView } from "api/projects/types";

const Home: React.FC = () => {
  const history = useHistory();
  const [lastWeekProjects, setLastWeekProjects] = useState<IProjectsView[]>();

  function onSeeClick() {
    history.push(routePaths.projectsList);    
  }

  function onRegisterClick() {
    history.push(routePaths.register);
  }

  function onLoginClick() {
    history.push(routePaths.login);
  }

  useEffect(() => {
    ProjectsApi.getLastWeek()
      .then(res => {
        setLastWeekProjects(res.data);
      })
      .catch(err => {

      })
  }, []);

  return (
    <StyledHome>
      <Header image={image}>
        <HomeHeaderContent />
      </Header>

      {/* instruction */}
      <section className="hp-instructions">
        <div className="_container hp-instructions-container">
          <AppDescCard
            maxWidth="290px"
            title="Publish your idea"
            text="Have always dreamt of seeing your idea come to life? Post your project now and wait for your team or funders to find you!"
            buttonText="Post a project"
            buttonOutlined
            onClick={onSeeClick}
          />
          <AppDescCard
            maxWidth="270px"
            title="Connect with your team"
            text="Find developers, designers, engineers, other creatives for the project and start collaborating."
            buttonText="See available vacancies"
            buttonOutlined
            onClick={onSeeClick}
          />
          <AppDescCard
            maxWidth="245px"
            title="Find project funders"
            text="Help any project you believe in, by donating money and funding its expenses."
            buttonText="Find a project"
            buttonOutlined
            onClick={onSeeClick}
          />
        </div>
      </section>
      {/* /instruction */}

      {/* New this week */}
      {lastWeekProjects && lastWeekProjects.length > 0 &&
        <section className="hp-ntw">
          <div className="hp-ntw__container _container">
            <h2 className="hp-ntw__title bold">New this week</h2>
            <Carousel projects={lastWeekProjects} />
          </div>
        </section>
      }
      {/* /New this week */}

      {/* Join us */}
      <section className="hp-join">
        <div className="hp-join-container _container">
          <h2 className="hp-join__title">
            Join our website NOW and let your idea come to life!
          </h2>
          <div className="hp-join__buttons">
            <Button onClick={onRegisterClick} >Sign up</Button>
            <Button outline onClick={onLoginClick} >Log in</Button>
          </div>
        </div>
      </section>
      {/* /Join us */}
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  .hp {
    &-instructions {
      &-container {
        padding-top: 44px;
        padding-bottom: 44px;
        display: flex;
        /* flex-wrap: wrap; */
        justify-content: space-between;
      }
    }

    &-ntw {
      background-color: #f5f5f5;
      &__container {
        padding-top: 45px;
        padding-bottom: 45px;
      }

      &__title {
        margin: 0 0 33px 0;
      }
    }

    &-join {
      /* height: 200px; */
      background-color: #18a0fb;

      &-container {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &__title {
        margin: 68px 0;
        max-width: 470px;
        color: white;
      }

      &__buttons {
        button:first-child {
          margin: 0 25px 0 0;
        }
      }
    }

    // instructions
    @media (max-width: 900px) {
      &-instructions {
        &-container {
          flex-direction: column;
          > div {
            max-width: 600px;
            &:nth-child(-n + 2) {
              margin: 0 0 40px;
            }
          }
        }
      }
    }

    // join
    @media (max-width: 760px) {
      &-join {
        &-container {
          flex-direction: column;
        }

        &__title {
          margin-bottom: 40px;
          text-align: center;
        }

        &__buttons {
          margin-bottom: 68px;
        }
      }
    }
  }
`;
