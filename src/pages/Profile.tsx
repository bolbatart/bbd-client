import React, { useState } from 'react'
import styled from 'styled-components';

import HeaderImage from 'assets/images/hpheader.jpg';
import Avatar from 'assets/images/avatar.jpg';

import Header from 'components/Header/Header';
import { Button } from 'reactstrap';


interface IProps { }

const Profile: React.FC<IProps> = (props) => {
  const isAuth = true;
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isPostedOpen, setIsPostedOpen] = useState(true);

  return (
    <StyledProfile>
      <Header image={HeaderImage}>
        <div className="prf-header__container">
          <img src={Avatar} alt="" className="prf-header__avatar _avatar" />

          <div className="prf-header__desc-wrapper">
            <h2 className="prf-header__name">Scott Johnson</h2>

            <span className="prf-header__position">Senior Devoloper</span>
            <span className="prf-header__location">London, United Kingdom</span>

            <p className="prf-header__bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facere molestias porro nihil, modi iste earum nostrum officiis veritatis sapiente rerum aspernatur corporis id molestiae, dolores veniam sed quos quod.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illo quaerat temporibus repellendus, ipsam sit nobis. Assumenda dolor dicta minus, maxime ut amet mollitia at. Eaque optio asperiores nobis distinctio.
              lore
              Looking for hardworking people to join my team! Enthusiasm & sports</p>

            <div className='prf-header__buttons'>
              {isAuth ? (
                <>
                  <Button outline>Edit information</Button>
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

        <div className="prf-projects__list">
          {/* List of projects */}
        </div>
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
        border-radius: 50%;
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

    @media(max-width: 620px) {

    }
  }
`;
