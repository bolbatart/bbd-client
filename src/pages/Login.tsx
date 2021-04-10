import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { routePaths } from "services/router/routes";

import BackgroundImage from "assets/images/authbc.jpg";

import AuthBackground from "components/Backgrounds/AuthBackground";
import TextField from "@material-ui/core/TextField";
import { Button } from "reactstrap";

const Login: React.FC = () => {
  const history = useHistory();

  function onRegister() {
    history.push(routePaths.register);
  }

  return (
    <AuthBackground image={BackgroundImage}>
      {/* Dialog's container */}
      <StyledLogin>
        {/* Dialog */}
        <div className="ath__container">
          {/* Form section */}
          <div className="ath-form__wrapper">
            <h4>Log in</h4>

            <form className="ath-form">
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
                  variant="outlined"
                  type="password"
                />
              </div>

              <span className="ath-form__fpw">Forgot your password?</span>

              <Button color="primary" type="button">
                Log In
              </Button>
            </form>
          </div>
          {/* Footer section */}
          <div className="ath-footer">
            <div className="ath-footer__content">
              <span>Don’t have an account?</span>
              <Button
                outline
                color="primary"
                type="button"
                onClick={onRegister}
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </StyledLogin>
    </AuthBackground>
  );
};

export default Login;

const StyledLogin = styled.div`
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

        &,
        > div {
          width: 100%;
        }
      }
      //
      &__fpw {
        margin: 20px 0;
        display: block;
        color: #18a0fb;
      }
    }
    //
    &-footer {
      margin: 0 50px 40px;
      border-top: 1px solid black;
      &__content {
        padding-top: 40px;
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
