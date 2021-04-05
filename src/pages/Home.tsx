import React from "react";
import styled from "styled-components";

import BigHeader from "components/Header/BigHeader";
import image from "assets/images/hpheader.jpg";
import HomeHeaderContent from "components/Header/HeaderContents/HomeHeaderContent";
import AppDescCard from "components/Cards/AppDescCard";
import { Button } from "reactstrap";
import Carousel from "components/Carousel/Carousel";

const Home: React.FC = () => {
  return (
    <StyledHome>
      <BigHeader image={image}>
        <HomeHeaderContent />
      </BigHeader>

      {/* instruction */}
      <section className="hp-instructions">
        <div className="_container hp-instructions-container">
          <AppDescCard
            maxWidth="290px"
            title="Publish your idea"
            text="Have always dreamt of seeing your idea come to life? Post your project now and wait for your team or funders to find you!"
            buttonText="Post a project"
            buttonOutlined
          />
          <AppDescCard
            maxWidth="270px"
            title="Connect with your team"
            text="Find developers, designers, engineers, other creatives for the project and start collaborating."
            buttonText="See available vacancies"
            buttonOutlined
          />
          <AppDescCard
            maxWidth="245px"
            title="Find project funders"
            text="Help any project you believe in, by donating money and funding its expenses."
            buttonText="Find a project"
            buttonOutlined
          />
        </div>
      </section>
      {/* /instruction */}

      {/* New this week */}
      <section className="hp-ntw">
        <div className="hp-ntw__container _container">
          <h2 className="hp-ntw__title bold">New this week</h2>
          <Carousel />
        </div>
      </section>
      {/* /New this week */}

      {/* Join us */}
      <section className="hp-join">
        <div className="hp-join-container _container">
          <h2 className="hp-join__title">
            Join our website NOW and let your idea come to life!
          </h2>
          <div className="hp-join__buttons">
            <Button>Sign up</Button>
            <Button outline>Log in</Button>
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

    &-join {
      height: 200px;
      background-color: #18a0fb;

      &-container {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &__title {
        max-width: 470px;
        color: white;
      }

      &__buttons {
        button:first-child {
          margin: 0 25px 0 0;
        }
      }
    }

    &-ntw {
      background-color: #f5f5f5;
      &__container {
        padding: 45px 0;
      }

      &__title {
        margin: 45px 0 33px 0;
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
  }
`;
