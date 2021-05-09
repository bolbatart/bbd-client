import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { routePaths } from "services/router/routes";

import BackgroundImage from "assets/images/authbc.jpg";

import AuthBackground from "components/Backgrounds/AuthBackground";
import TextField from "@material-ui/core/TextField";
import { Button } from "reactstrap";
import { IRegisterCredentials } from "api/auth/types";
import { Controller, useForm } from "react-hook-form";
import AuthApi from "api/auth/authApi";
import { toast } from "react-toastify";

interface IFormInput extends IRegisterCredentials {}

const Register: React.FC = () => {
  const history = useHistory();
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  function onLogin() {
    history.push(routePaths.login);
  }

  function onSubmit(data: IFormInput) {
    AuthApi.register(data)
      .then(res => {
        // redirect to home page

        toast.success('You have successfully signed up!', {
          position: 'top-right',
          autoClose: 10000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        })
        history.push(routePaths.home)
      })
      .catch(err => {
        if (err.response?.status === 400) {
          const errMsg = err.response?.data.message 
            ? Array.isArray(err.response?.data.message)
              ? err.response?.data.message[0] 
                : err.response?.data.message
              : 'Bad request! Check if all the information is correct.'
          toast.error(errMsg)
        }
        else 
          toast.error('Sorry! Something went wrong...')
      })
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

            <form className="ath-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="ath-form__item">
                <Controller
                  name='firstName'
                  control={control}
                  rules={{ required: true }}
                  defaultValue=''
                  render={({field}) => <TextField label="First name" variant='outlined' {...field} error={!!errors.firstName} />}
                />
              </div>

              <div className="ath-form__item">
                <Controller
                  name='lastName'
                  control={control}
                  rules={{ required: true }}
                  defaultValue=''
                  render={({field}) => <TextField label="Last name" variant='outlined' {...field} error={!!errors.lastName} />}
                />
              </div>

              <div className="ath-form__item">
                <Controller
                  name='email'
                  control={control}
                  rules={{ required: true }}
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

              <div className="ath-form__item">
                <Controller 
                  name='passwordConfirm'
                  defaultValue=''
                  rules={{required: true}}
                  control={control}
                  render={({field}) => <TextField label="Confirm password" type="password" variant='outlined' {...field} error={!!errors.passwordConfirm} />}
                />
              </div>

              <Button color="primary">
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
