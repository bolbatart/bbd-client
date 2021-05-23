import { TextField } from "@material-ui/core";
import { Button } from "reactstrap";

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { IFifthStepInput } from "./types";


interface IProps {
  onSubmit: (data: IFifthStepInput) => void;
}

const Step5: React.FC<IProps> = (props) => {
  const { control, handleSubmit, formState: { errors } } = useForm<IFifthStepInput>();

  const onSubmit = (data: IFifthStepInput) => {
    props.onSubmit(data);
  }

  return (
    <StyledStep5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-item">
          <Controller
            name='budgetGoal'
            rules={{ required: true }}
            control={control}            
            defaultValue=''
            render={({field}) => <TextField label="Project area" variant='outlined' type='number' {...field} error={!!errors.budgetGoal} />}
          />
        </div>

        <div className="form-btn">
          <Button color="primary" type='submit'>
            Continue
          </Button>
        </div>
      </form>
    </StyledStep5>
  );
};

export default Step5;


const StyledStep5 = styled.div`
  .form-item {
    width: 100%;
    margin-bottom: 20px;
    >div {
      width: 100%;
    }
  }

  .form-btn {
    display: flex;
    justify-content: center;
  }
`;
