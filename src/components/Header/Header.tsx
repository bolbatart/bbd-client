import React from "react";
import styled from "styled-components";
import { routePaths } from "services/router/routes";

import { Button } from "reactstrap";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div className="nh _container">
        <div className="nh-logo">
          <h1>LOGO</h1>
        </div>

        <div className="nh-menu">
          <nav className="nh-menu-navs">
            <a href={routePaths.home} title="Home">
              Home
            </a>
            <a href={routePaths.projectsList} title="Projects">
              Projects
            </a>
          </nav>

          {/* Login */}
          <Button outline color="info">
            Log In
          </Button>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  .nh {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-logo {
      //
    }

    &-menu {
      display: flex;
      align-items: center;

      a {
        text-decoration: none;
        color: #18a0fb;
        margin: 0 40px 0 0;
        &:hover {
          /* font-weight: bold; */
          text-stroke: 1px #18a0fb;
          -webkit-text-stroke: 1px #18a0fb;
        }
      }
    }
  }
`;
