import React from 'react'
import styled from 'styled-components';

import HeaderImage from 'assets/images/hpheader.jpg';
import Avatar from 'assets/images/avatar.jpg';

import Header from 'components/Header/Header';
import { Button } from 'reactstrap';


interface IProps { }

const Profile: React.FC<IProps> = (props) => {
  return (
    <StyledProfile>
      <Header image={HeaderImage}>
        <div className="prf-header__container">
          <img src={Avatar} alt="" className="prf-header__avatar _avatar" />

          <div className="prf-header__desc-wrapper">
            <h2 className="prf-header__name">Scott Johnson</h2>

            <span className="prf-header__position">Senior Devoloper</span>
            <span className="prf-header__location">London, United Kingdom</span>

            <p className="prf-header__bio">Looking for hardworking people to join my team! Enthusiasm & sports</p>

            <Button>Contact me</Button>
          </div>
        </div>
      </Header>
    
      <section className="prf-projects">
        <div className="prf-projects-selector">
          <h3 className="prf-projects-selector__posted">Posted projects</h3>
          <h3 className="prf-projects-selector__liked">Liked projects</h3>
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
      }
    }

    &-projects {
      padding: 60px;

      &-selector {
        display: flex;
        justify-content: center;
        margin-bottom: 50px;

        &__posted {
          margin-right: 40px;
        }
      }
    }
  }
`;
