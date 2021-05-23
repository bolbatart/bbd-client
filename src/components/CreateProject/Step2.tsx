import {  TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styled from "styled-components";
import { ISecondStepInput } from "./types";

import { Button } from "reactstrap";

interface IProps {
    onSubmit: (data: ISecondStepInput) => void;
}

const Step2: React.FC<IProps> = (props) => {
  const { control, handleSubmit, formState: { errors } } = useForm<ISecondStepInput>();

  const onSubmit = (data: ISecondStepInput) => {
    props.onSubmit(data);
  }

  return (
    <StyledStep2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-item">
          <Controller
            name='name'
            rules={{ required: true }}
            defaultValue=''
            control={control}
            render={({field}) => <TextField label="Project name" variant='outlined' {...field} error={!!errors.name} />}
          />
        </div>

        <div className="form-item">
          <Controller
            name='shortDescription'
            rules={{ required: true }}
            defaultValue=''
            control={control}
            render={({field}) => <TextField label="Short description" variant='outlined' {...field} error={!!errors.shortDescription} />}
          />
        </div>

        <div className="form-btn">
          <Button color="primary" type='submit'>
            Continue
          </Button>
        </div>
      </form>
    </StyledStep2>
  );
};

export default Step2;


const StyledStep2 = styled.div``;
