import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styled from "styled-components";
import { IThirdStepInput } from "./types";
import { Button } from "reactstrap";


interface IProps {
    onSubmit: (data: IThirdStepInput) => void;
}

const Step3: React.FC<IProps> = (props) => {
  const { control, handleSubmit, formState: { errors } } = useForm<IThirdStepInput>();

  const onSubmit = (data: IThirdStepInput) => {
    props.onSubmit(data);
  }

  return (
    <StyledStep3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-item">
          <Controller 
            name='description'
            rules={{ required: true }}
            defaultValue=''
            control={control}
             render={({field}) => <TextField label="About project" variant='outlined' {...field} error={!!errors.description} />}
          />
        </div>

        {/* IMAGE */}
        <div className="form-btn">
            <Button color="primary" type='submit'>
                Continue
            </Button>
        </div>
      </form>
    </StyledStep3>
  );
};

export default Step3;


const StyledStep3 = styled.div``;
