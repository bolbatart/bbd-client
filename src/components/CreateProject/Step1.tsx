import { TextField } from "@material-ui/core";
import { Button } from "reactstrap";

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { IFirstStepInput } from "./types";


interface IProps {
  onSubmit: (data: IFirstStepInput) => void;
}

const Step1: React.FC<IProps> = (props) => {
  const { control, handleSubmit, formState: { errors } } = useForm<IFirstStepInput>();

  const onSubmit = (data: IFirstStepInput) => {
    props.onSubmit(data);
  }

  return (
    <StyledStep1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-item">
          <Controller
            name='projectArea'
            rules={{ required: true }}
            control={control}
            defaultValue=''
            render={({field}) => <TextField label="Project area" variant='outlined' {...field} error={!!errors.projectArea} />}
          />
        </div>

        <div className="form-item">
          <Controller
            name='location'
            rules={{ required: true }}
            defaultValue=''
            control={control}
            render={({field}) => <TextField label="Location" variant='outlined' {...field} error={!!errors.location} />}
          />
        </div>

        <div className="form-btn">
          <Button color="primary" type='submit'>
            Continue
          </Button>
        </div>
      </form>
    </StyledStep1>
  );
};

export default Step1;


const StyledStep1 = styled.div`
  /* .form-item {
    width: 100%;
    margin-bottom: 20px;
    >div {
      width: 100%;
    }
  }

  .form-btn {
    display: flex;
    justify-content: center;
  } */
`;
