import React, { useState } from 'react'
import styled from 'styled-components';

import HeaderImage from 'assets/images/hpheader.jpg';
import Avatar from 'assets/images/avatar.jpg';

import Header from 'components/Header/Header';
import { Button } from 'reactstrap';
import ProjectCard from 'components/Cards/ProjectCard';
import ListOfProjects from 'components/List/ListOfProjects';
import EditProfileDialog from 'components/Dialogs/EditProfileDialog';

interface IProps { }

const Profile: React.FC<IProps> = (props) => {
  const isAuth = true;
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isPostedOpen, setIsPostedOpen] = useState(true);

  const toogleEditModal = () => {
    setIsEditOpen(!isEditOpen);
  }

  return (
    <StyledProfile>
      <EditProfileDialog isOpen={isEditOpen} toogle={toogleEditModal} />

      <Header image={HeaderImage}>
        <div className="prf-header__container _container">
          <img src={Avatar} alt="" className="prf-header__avatar _avatar" />

          <div className="prf-header__desc-wrapper">
            <h2 className="prf-header__name">Scott Johnson</h2>

            <span className="prf-header__position">Senior Devoloper</span>
            <span className="prf-header__location">London, United Kingdom</span>

            <p className="prf-header__bio">
              Looking for hardworking people to join my team! Enthusiasm & sports
            </p>

            <div className='prf-header__buttons'>
              {isAuth ? (
                <>
                  <Button outline onClick={toogleEditModal}>Edit information</Button>
                  <Button>Post a new project</Button>
                </>
              ) : (
                <Button>Contact me</Button>
              )}
            </div>
          </div>
        </div>
      </Header>
    
      <section className="prf-projects">
        <div className="prf-projects-selector">
          <h3 className={`prf-projects-selector__item ${isPostedOpen ? '' : '_normal'}`} onClick={() => setIsPostedOpen(true)}>Posted projects</h3>
          <h3 className={`prf-projects-selector__item ${isPostedOpen ? '_normal' : ''}`} onClick={() => setIsPostedOpen(false)}>Liked projects</h3>
        </div>

        {/* <ListOfProjects /> */}
      </section>
    </StyledProfile>
  )
}

export default Profile;

const StyledProfile = styled.div`
  .prf {
    &-header {
      &__container {
        height: 100%;
        display:flex;
        align-items: center;
      }

      &__desc-wrapper {
        max-width: 500px;
        margin-left: 70px;
        color: white;
      }

      &__avatar {
        height: 300px;
      }

      &__name {
        //
      }

      &__position {
        display:inline-block;
        margin: 10px 16px 10px 0; 
      }

      &__bio {
        margin-bottom: 20px;
        max-height: 150px;
        text-overflow: ellipsis;
      }

      &__buttons {
        >:first-child {
          margin-right: 16px;
        }
      }
    }

    &-projects {
      padding: 60px;

      &-selector {
        display: flex;
        justify-content: center;
        margin-bottom: 50px;

        &__item {
          cursor: pointer;

          &:first-child {
            margin-right: 40px;
          }
        }
      }
    }


  
    @media(max-width: 920px) {
      &-header {
        &__avatar {
          height: 150px;
        }
        &__container {
          flex-direction: column;
          justify-content: center;
        }
        &__desc-wrapper {
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
`;
