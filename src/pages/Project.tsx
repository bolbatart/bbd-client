import React from 'react'
import styled from 'styled-components';

import HpHeaderImage from 'assets/images/hpheader.jpg';
import LikeRed from 'assets/icons/like-red.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import LinkedInIcon from 'assets/icons/linkedin.svg';
import FacebookIcon from 'assets/icons/facebook.svg';
import Avatar from 'assets/images/avatar.jpg';
import RedDot from 'assets/icons/offline.svg';
import GreenDot from 'assers/icons/online.svg';

import Header from 'components/Header/Header';
import { Button } from 'reactstrap';

interface IProps { }

const Project: React.FC<IProps> = (props) => {
  return (
    <StyledProject>
      <Header small image={HpHeaderImage}>
        <div className="pr-header">
          <div className="pr-header__container">
            <h1 className="pr-header__title">PopCorn</h1>
        
            <div className="pr-header-sub">
              <span className="hp-header-sub__area">IT</span>
              <span className='hp-header-sub__divider'>   •   </span>
              <span className="hp-header-sub__location">London, United Kingdom</span>
            </div>
        
            <p className="hp-header__desc">
              A mobile application for couples, helping them to match on one movie to watch together
            </p>
          </div>
        </div>
      </Header>

      <section className='pr-about'>
        <div className="pr-aboute__container _container">
          <h2 className="pr-about__title">About project</h2>
          
          <p className="pr-about__about">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium dolorem ea dolore quod magnam libero officia ex illo, animi quibusdam nulla quia beatae dignissimos nobis voluptatibus eligendi? Nemo, numquam unde?
          </p>

          <div className="pr-about-footer">
            <div className="pr-about-footer__likes">
              <img src={LikeRed} alt=""/>
              32 Likes
            </div>

            <div className="pr-about-footer__social">
              <img src={TwitterIcon} alt='' className='pr-about-footer__social-twitter' />
              <img src={LinkedInIcon} alt='' className='pr-about-footer__social-linkedid' />
              <img src={FacebookIcon} alt='' className='pr-about-footer__social-facebook' />
            </div>
          </div>
        </div>
      </section>

      <section className="pr-avpos">
        <div className="pr-avpos__container _container">
          <div className="pr-avpos-author">
            <img src={Avatar} alt="" className="pr-avpos-author__img"/>
            <h4 className="pr-avpos-author__name">Scott Johnson</h4>
            <span className="pr-avpos-author__position">Senior Developer</span>
            <span className="pr-avpos-author__location">London, United Kingdom</span>
            <Button>Contact me</Button>
          </div>

          <div className="pr-avpos-list">
            <h2 className="pr-avpos-list__title">Available positions</h2>
            <ul className="pr-avpos-list__list">
              <li className='pr-avpos-list__list-item'>
                <img src={GreenDot} alt=""/>
                {/*  */}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </StyledProject>
  )
}

export default Project;

const StyledProject = styled.div`
  .pr {
    &-header {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;

      &__container {
        max-width: 334px;
        text-align: center
      }

      &-sub {
        padding: 20px 0;
        font-size: 20px;
      }
    }
    
    &-about {
      padding: 120px 0 112px;

      &__title {
        margin-bottom: 20px;
      }

      &__about {
        padding-bottom: 48px;
      }

      &-footer {
        display: flex;
        justify-content: space-between;
        &__likes {
          /* display: flex; */
          img {
            display: inline-block;
            margin-right: 20px;
          }
        }

        &__social {
          display: flex;
          img:not(:last-child) {
            margin-right: 10px;
          }
        }
      }
      
    }
  }
`;
