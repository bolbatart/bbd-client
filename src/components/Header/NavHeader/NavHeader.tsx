import React, { useState } from "react";
import styled from "styled-components";
import { routePaths } from "services/router/routes";
import { useHistory } from "react-router-dom";

import { Button } from "reactstrap";
import { Squash as Hamburger } from "hamburger-react";

const Header: React.FC = () => {
  const history = useHistory();
  const [isMenuOpen, setMenuOpen] = useState(false);

  function onHamburger() {
    setMenuOpen(!isMenuOpen);
  }

  function onLink(path: string) {
    history.push(path);
  }

  return (
    <StyledHeader>
      <div className="nh _container">
        <div className="nh-logo">
          <h2>LOGO</h2>
        </div>

        <div className="nh-menu__hamburger">
          <Hamburger
            toggle={onHamburger}
            toggled={isMenuOpen}
            color="#18a0fb"
          />
        </div>

        <nav className={`nh-menu-navs mobile ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li
              className="nh-nav-item _link mobile _container"
              onClick={() => onLink(routePaths.home)}
            >
              Home
            </li>
            <li
              className="nh-nav-item _link mobile _container"
              onClick={() => onLink(routePaths.projectsList)}
            >
              Projects
            </li>
            <li className="nh-nav-item _link mobile _container">
              Post a project
            </li>
            <li
              className="nh-nav-item _link mobile _container"
              onClick={() => onLink(routePaths.login)}
            >
              Log in
            </li>
          </ul>
        </nav>

        <nav className="nh-menu-navs desktop">
          <ul>
            <li
              className="nh-nav-item _link"
              onClick={() => onLink(routePaths.home)}
            >
              Home
            </li>
            <li
              className="nh-nav-item _link"
              onClick={() => onLink(routePaths.projectsList)}
            >
              Projects
            </li>
            <li className="nh-nav-item _link">Post a project</li>
          </ul>
          <Button
            outline
            color="primary"
            onClick={() => onLink(routePaths.login)}
          >
            Log In
          </Button>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  position: relative;

  .nh {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-logo {
      //
    }

    /* DESKTOP */
    &-menu-navs.desktop {
      ul,
      li {
        display: inline;
      }

      li {
        /* color: #18a0fb; */
        margin: 0 30px 0 0;
        /* &:hover {
          cursor: pointer;
          text-stroke: 1px #18a0fb;
          -webkit-text-stroke: 1px #18a0fb;
        } */
      }
    }
    /* / DESKTOP */

    /* MOBILE */
    &-menu-navs.mobile {
      position: absolute;
      left: 0;
      right: 0;
      top: 80px;
      background-color: white;
      display: flex;
      flex-direction: column;
    }

    &-nav-item.mobile {
      height: 40px;
      display: flex;
      align-items: center;
      color: #18a0fb;
      &:hover {
        background-color: #e5e5e5;
        cursor: pointer;
        text-stroke: 1px #18a0fb;
        -webkit-text-stroke: 1px #18a0fb;
      }
    }
    /* / MOBILE */

    &-menu__hamburger,
    &-menu-navs.mobile {
      display: none;
    }

    @media (max-width: 600px) {
      &-menu__hamburger,
      &-menu-navs.mobile.open {
        display: block;
      }

      &-menu-navs.desktop {
        display: none;
      }
    }
  }
`;
