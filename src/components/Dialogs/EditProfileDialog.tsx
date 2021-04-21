import React from 'react'
import styled from 'styled-components';

import Avatar from 'assets/images/avatar.jpg';

import { Button, Modal } from 'reactstrap';



interface IProps {
  isOpen: boolean;
  toogle: () => void;
}

const EditProfileDialog: React.FC<IProps> = (props) => {
  return (
    <Modal isOpen={props.isOpen} toogle={props.toogle} >
      <StyledEditProfileDialog>
        <img src={Avatar} alt="" className='_avatar' />


        <div className="epd-buttons">
          <Button onClick={props.toogle}>
            Cancel
          </Button>
        </div>
      </StyledEditProfileDialog>
    </Modal>
  )
}

export default EditProfileDialog;

const StyledEditProfileDialog = styled.div`
  padding: 60px;


`;
