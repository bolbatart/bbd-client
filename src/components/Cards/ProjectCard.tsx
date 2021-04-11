import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Button } from "reactstrap";

import LocationIcon from "assets/icons/location.svg";
import Image from "assets/images/hpheader.jpg";

interface IProps {}

const ProjectCard: React.FC<IProps> = (props) => {
  return (
    <StyledProjectCard>
      <div className="pc-img">
        <img src={Image} />
      </div>

      {/* absoulute */}

      {/* paddings */}
      <div className="pc-content">
        <div className="pc-area semi-bold">project area</div>

        <h3 className="pc-content__title bold">Name of the project</h3>

        <p className="pc-content__description">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur.
        </p>

        <div className="pc-content__professionals">
          <h6 className="prof__title bold">Professionals needed:</h6>

          <ul className="prof-list">
            <li className="prof-list__item">Graphic designer</li>
            <li className="prof-list__item">Back End developer</li>
          </ul>
        </div>

        <div className="pc-content-footer">
          <div className="pc-content-footer__location">Location</div>

          <Button color="primary">Find out more</Button>
        </div>
      </div>
    </StyledProjectCard>
  );
};

export default ProjectCard;

const StyledProjectCard = styled.div`
  max-width: 450px;
  /* border: 1px solid #808080; */
  // shadows
  -webkit-box-shadow: 0px 5px 6px -1px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 5px 6px -1px rgba(0, 0, 0, 0.3);

  .pc {
    &-img {
      height: 260px;
      img {
        height: 100%;
        object-fit: cover;
      }
    }

    &-area {
      width: 160px;
      height: 40px;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #c4c4c4;
      color: white;
      top: -20px;
      text-transform: uppercase;
    }

    &-content {
      position: relative;
      padding: 44px 30px;

      &__title {
        margin: 0 0 20px;
      }

      &__description {
        margin: 0 0 16px;
      }

      &__professionals {
        margin: 0 0 42px;
        .prof {
          &__title {
            //
          }
          &-list {
            //
            &__item {
              //
            }
          }
        }
      }

      &-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: -20px 0 0 0;
        flex-wrap: wrap-reverse;

        button {
          margin: 20px 0 0 0;
          flex-grow: 1;
          min-width: 192px;
        }

        &__location {
          margin: 20px 40px 0 0;
          max-width: 150px;
          flex-grow: 1;
          &::before {
            content: "";
            background: url(${LocationIcon}) no-repeat;
            display: inline-block;
            height: 15px;
            width: 11px;
            margin-right: 6px;
          }
        }
      }
    }
  }
`;
