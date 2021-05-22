import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { routePaths } from "services/router/routes"; 

import BackgroundImage from "assets/images/authbc.jpg";

import AuthBackground from "components/Backgrounds/AuthBackground";
import TextField from "@material-ui/core/TextField";
import { Button } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import AuthApi from "api/auth/authApi";
import { ILoginCredentials } from "api/auth/types";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { login } from 'services/redux/actions/authAction';

interface IFormInput extends ILoginCredentials {}

const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  function onRegister() {
    history.push(routePaths.register);
  }

  function onForgotPassword() {
    history.push(routePaths.forgotPassword);
  }

  function onSubmit (data: IFormInput) {
    AuthApi.login(data)
      .then(res => {
        // redirect to home page
        dispatch(login(res.data._id))
        toast.success('You have successfully signed in!', {
          position: 'top-right',
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        })
        history.push(routePaths.home)
      })
      .catch(err => {
        if (err.response?.status === 400)
          toast.error('Bad request! Check if all the information is correct.', {
            position: 'top-right',
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true
          })
        else 
          toast.error('Sorry! Something went wrong...', {
            position: 'top-right',
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true
          })
      })
  };

  return (
    <AuthBackground image={BackgroundImage}>
      {/* Dialog's container */}
      <StyledLogin>
        {/* Dialog */}
        <div className="ath__container">
          {/* Form section */}
          <div className="ath-form__wrapper">
            <h4>Log in</h4>

            <form className="ath-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="ath-form__item">
                <Controller
                  name='email'
                  control={control}
                  rules={{required: true}}
                  defaultValue=''
                  render={({field}) => <TextField label="E-mail" variant='outlined' {...field} error={!!errors.email} />}
                />
              </div>

              <div className="ath-form__item">
                <Controller 
                  name='password'
                  defaultValue=''
                  rules={{required: true}}
                  control={control}
                  render={({field}) => <TextField label="Password" type="password" variant='outlined' {...field} error={!!errors.password} />}
                />
              </div>

              <span className="ath-form__fpw" onClick={onForgotPassword} >Forgot your password?</span>

              <Button color="primary">
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
                type='button'
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

        &:hover {
          color: #1276b8;
          cursor: pointer;
        }
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
