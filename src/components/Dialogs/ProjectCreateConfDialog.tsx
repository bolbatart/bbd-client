import React, { useState } from 'react'
import styled from 'styled-components';

import Avatar from 'assets/images/avatar.jpg';

import { Button, Input, Modal } from 'reactstrap';
import { IProfileView } from 'api/profile/types';
import { IInputData } from 'components/CreateProject/types';



interface IProps {
  isOpen: boolean;
  toogle: () => void;
  data?: IInputData;
}

const ProjectCreateConfDialog: React.FC<IProps> = (props) => {
  const [formData, setFormData] = useState();

  const onConfirm = () => {
    
  }

  return (
    <Modal isOpen={props.isOpen} toogle={props.toogle} >
      {props.data &&
        <StyledProjectCreateConfDialog>
          <div className="item">
            <span className="semi-bold">
              Name:{' '}
            </span>
            {props.data.name}
          </div>
          <div className="item">
            <span className="semi-bold">
              Location:{' '}
            </span>
             {props.data.location}
          </div>
          <div className="item">
            <span className="semi-bold">
              Description:{' '}
            </span>
             {props.data.description}
          </div>
          <div className="item">
            <span className="semi-bold">
              Budget goal:{' '}
            </span>
             {props.data.budgetGoal}
          </div>
          <div className="item">
            <span className="semi-bold">
              Positions:{' '}
            </span>
             {props.data.positions
              && props.data.positions.map(item => 
                  <div className='list-item'>{item}</div>
                )}
          </div>
          <div className="item">
            <span className="semi-bold">
              Project area:{' '}
            </span> 
            {props.data.projectArea}
          </div>

          <div className="btns">
            <Button onClick={props.toogle}>
              Cancel
            </Button>
            <Button onClick={onConfirm}>
              Confirm
            </Button>
          </div>
        </StyledProjectCreateConfDialog>
      }
    </Modal>
  )
}

export default ProjectCreateConfDialog;

const StyledProjectCreateConfDialog = styled.div`
  padding: 60px;

  .item {
    margin-bottom: 24px;
  }

  .list-item {
    margin-left: 20px;
  }

  .btns {
    display: flex;
    align-items: center;
    margin-top: 30px;
    justify-content: center;
    >button:first-child {
      margin-right: 16px;
    }
  }
`;
