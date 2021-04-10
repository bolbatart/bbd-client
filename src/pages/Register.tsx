import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { routePaths } from "services/router/routes";

import BackgroundImage from "assets/images/authbc.jpg";

import AuthBackground from "components/Backgrounds/AuthBackground";
import TextField from "@material-ui/core/TextField";
import { Button } from "reactstrap";

const Register: React.FC = () => {
  const history = useHistory();

  function onLogin() {
    history.push(routePaths.login);
  }

  return (
    <AuthBackground image={BackgroundImage}>
      {/* Dialog's container */}
      <StyledRegister>
        {/* Dialog */}
        <div className="ath__container">
          {/* Footer section */}
          <div className="ath-footer">
            <div className="ath-footer__content">
              <span>Already have an account?</span>
              <Button outline color="primary" type="button" onClick={onLogin}>
                Log in
              </Button>
            </div>
          </div>

          {/* Form section */}
          <div className="ath-form__wrapper">
            <h4>Sign up</h4>

            <form className="ath-form">
              <div className="ath-form__item">
                <TextField
                  id="outlined-basic"
                  label="First name"
                  variant="outlined"
                />
              </div>

              <div className="ath-form__item">
                <TextField
                  id="outlined-basic"
                  label="Last name"
                  variant="outlined"
                />
              </div>

              <div className="ath-form__item">
                <TextField
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                />
              </div>

              <div className="ath-form__item">
                <TextField
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                />
              </div>

              <Button color="primary" type="button">
                Create an account
              </Button>
            </form>
          </div>
        </div>
      </StyledRegister>
    </AuthBackground>
  );
};

export default Register;

const StyledRegister = styled.div`
  display: flex;

  margin: 60px 0;

  .ath {
    &__container {
      width: 460px;
      background: white;
    }

    &-form {
      &__wrapper {
        padding: 40px 80px 46px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h4 {
          margin-bottom: 20px;
        }
      }

      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      &__item {
        margin-top: 20px;

        &:nth-last-child(2) {
          margin-bottom: 40px;
        }

        &,
        > div {
          width: 100%;
        }
      }
    }

    &-footer {
      margin: 40px 50px 0;
      border-bottom: 1px solid black;
      &__content {
        padding-bottom: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }

  @media (max-width: 520px) {
    .ath__container {
      width: 100%;
    }
  }

  @media (max-width: 400px) {
    .ath-form__wrapper {
      padding-left: 40px;
      padding-right: 40px;
    }

    .ath-footer {
      &__content {
        flex-direction: column;
        > span {
          margin-bottom: 20px;
        }
      }
    }
  }
`;
