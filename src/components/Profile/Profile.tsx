import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

import HeaderImage from 'assets/images/hpheader.jpg';
import Avatar from 'assets/images/avatar.jpg';

import Header from 'components/Header/Header';
import { Button } from 'reactstrap';
import ProjectCard from 'components/Cards/ProjectCard';
import ListOfProjects from 'components/List/ListOfProjects';
import EditProfileDialog from 'components/Dialogs/EditProfileDialog';
import ProfileApi from 'api/profile/profileApi';
import { IProfileView } from 'api/profile/types';
import { profile } from 'console';
import { IProjectsView } from 'api/projects/types';
import { useHistory } from 'react-router-dom';
import { routePaths } from 'services/router/routes';

interface IProps { 
    my?: boolean;
    profileData: IProfileView;
    projects?: IProjectsView[];
}

const Profile: React.FC<IProps> = ({my, profileData, projects}) => {
  const history = useHistory();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isPostedOpen, setIsPostedOpen] = useState(true);

  
  const toogleEditModal = () => {
    setIsEditOpen(!isEditOpen);
  }

  return (
    <StyledProfile>
      <EditProfileDialog isOpen={isEditOpen} toogle={toogleEditModal} profileData={profileData} />

      <Header image={HeaderImage}>
        <div className="prf-header__container _container">
          <img src={Avatar} alt="" className="prf-header__avatar _avatar" />

          <div className="prf-header__desc-wrapper">
            {profileData?.firstName && profileData.lastName && 
                <h2 className="prf-header__name">{`${profileData?.firstName} ${profileData?.lastName}`}</h2>
            }
            {profileData?.jobPosition && 
                <span className="prf-header__position">{`${profileData?.jobPosition}`}</span>
            }
            {profileData?.location && 
                <span className="prf-header__location">{`${profileData?.location}`}</span>
            }

            {profileData?.bio && 
                <p className="prf-header__bio">
                {`${profileData?.bio}`}
                </p>
            }

            <div className='prf-header__buttons'>
              {my ? (
                <>
                  <Button onClick={() => history.push(routePaths.createProject)}>Post a new project</Button>
                  <Button outline onClick={toogleEditModal}>Edit information</Button>
                </>
              ) : (
                profileData && profileData.website && profileData.website.length > 0 &&
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
