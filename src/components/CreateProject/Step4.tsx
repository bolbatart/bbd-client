import { Button as MaterialButton, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styled from "styled-components";
import { IFourthStepInput } from "./types";
import { Button } from "reactstrap";
import { Icon } from 'semantic-ui-react'

interface IProps {
  onSubmit: (data: IFourthStepInput) => void;
}

const Step4: React.FC<IProps> = (props) => {
  const [positions, setPositions] = useState<string[]>();
  const [input, setInput] = useState<string>('');
  const [err, setErr] = useState(false);

  const onAdd = () => {
    if (positions && positions.length > 0) {
      const exist = positions.findIndex(i => i === input) > -1;
      setErr(exist);
      if (!exist && input) {
        setErr(false);
        setPositions(prev => {
          if(prev) return [...prev, input]
        })
      } else setErr(true);
    } else if(input) {
      setPositions([input])
      setErr(false);
    } else setErr(true);
  }

  const onSubmit = () => {
    if (positions && positions.length > 0)
      props.onSubmit({positions: positions});
    // else error
  }

  const onChange = (value: string) => {
    setInput(value);
  }

  const onDelete = (i: number) => {
    setPositions(prev => {
      if (prev){
        prev.splice(i, 1);
        return [...prev];
      }
    })
  }

  return (
    <StyledStep4>
        {positions 
        && positions.length > 0 
        && positions.map((item, i) => 
          <div className='form-item icon'>
            <span>
              {item}
            </span>
            <span className="clickable-icon" onClick={() => onDelete(i)}>
              <Icon name='delete' color='red' size='large' />
            </span>

            {/* <i className="trash alternate outline"></i> */}
          </div>
          )}
        <div className="form-item icon">
          <TextField 
            label="Available position" 
            variant='outlined' 
            error={err}
            defaultValue={input}
            onChange={({currentTarget}) => onChange(currentTarget.value)}
          />
          <span className="clickable-icon" onClick={onAdd}>
            <Icon name='add' size='large' color='blue' />
          </span>
        </div>

        <div className="form-btn">
          <Button color="primary" onClick={onSubmit}>
            Continue
          </Button>
        </div>
    </StyledStep4>
  );
};

export default Step4;


const StyledStep4 = styled.div`
  .form-item.icon {
    display: flex;
    align-items: center;
    justify-content: space-between;

    >span {
      margin-left: 16px;
    }
  }
`;
