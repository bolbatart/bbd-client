import React from 'react'
import styled from 'styled-components';

import Avatar from 'assets/images/avatar.jpg';

import { Button, Input, Modal } from 'reactstrap';



interface IProps {
  isOpen: boolean;
  toogle: () => void;
}

const EditProfileDialog: React.FC<IProps> = (props) => {
  return (
    <Modal isOpen={props.isOpen} toogle={props.toogle} >
      <StyledEditProfileDialog>
        <div className="epd-avatar__container">
          <img src={Avatar} alt="" className='epd__avatar _avatar' />
          <Button outline>Change</Button>
        </div>

        <form className="epd-form">
          <div className="epd-form__item">
            <label htmlFor="">First name</label>
            <Input />
          </div>

          <div className="epd-form__item">
            <label htmlFor="">Last name</label>
            <Input />
          </div>

          <div className="epd-form__item">
            <label htmlFor="">Job position</label>
            <Input />
          </div>

          <div className="epd-form__item">
            <label htmlFor="">Location</label>
            <Input />
          </div>

          <div className="epd-form__item">
            <label htmlFor="">Website</label>
            <Input />
          </div>

          <div className="epd-form__item">
            <label htmlFor="">Bio</label>
            <Input />
          </div>

          <div className="epd-form__item">
            <label htmlFor="">Password</label>
            <Input />
          </div>

          <div className="epd-form__item">
            <label htmlFor="">Confirm password</label>
            <Input />
          </div>

          <div className="epd-form__buttons">
            <Button onClick={props.toogle}>
              Cancel
            </Button>
            <Button onClick={props.toogle}>
              Save changes
            </Button>
          </div>
        </form>

      </StyledEditProfileDialog>
    </Modal>
  )
}

export default EditProfileDialog;

const StyledEditProfileDialog = styled.div`
  padding: 60px;


`;
