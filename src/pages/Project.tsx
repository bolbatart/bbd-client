import React, { useEffect, useState } from "react";
import styled from "styled-components";

import HpHeaderImage from "assets/images/hpheader.jpg";
import LikeRed from "assets/icons/like-red.svg";
import TwitterIcon from "assets/icons/twitter.svg";
import LinkedInIcon from "assets/icons/linkedin.svg";
import FacebookIcon from "assets/icons/facebook.svg";
import Avatar from "assets/images/avatar.jpg";
import RedDot from "assets/icons/offline.svg";
import GreenDot from "assets/icons/online.svg";

import Header from "components/Header/Header";
import { Button, Progress } from "reactstrap";
import { IProjectsView } from "api/projects/types";
import ProjectsApi from "api/projects/projectsApi";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const positions = [
  {
    name: "Backend developer",
    available: true,
  },
  {
    name: "Frontend developer",
    available: false,
  },
  {
    name: "Graphic designer",
    available: false,
  },
  {
    name: "Marketing specialist",
    available: true,
  },
  {
    name: "Project manager",
    available: true,
  },
  {
    name: "Data analytic",
    available: true,
  },
];

const comments = [
  {
    avatar: Avatar,
    name: "Paul Brown",
    comment: "Amazing project! Hopefully everything works out :)",
    ago: "1 hour ago",
    likes: 32,
  },
  {
    avatar: Avatar,
    name: "Jessica Gale",
    comment: "What about adding movie genre feature?",
    ago: "1 day ago",
    likes: 65,
  },
  {
    avatar: Avatar,
    name: "Dom Russell",
    comment: "Can we super-like a movie?",
    ago: "2 day ago",
    likes: 3,
  },
  {
    avatar: Avatar,
    name: "Mantas Petraitis",
    comment: "Wow! Good luck!",
    ago: "2 day ago",
    likes: 49,
  },
];

interface IProps {}

const Project: React.FC<IProps> = (props) => {
  // const { id } = useParams<{id: string}>();
  // const [project, setProject] = useState<IProjectsView>();


  // useEffect(() => {
  //   ProjectsApi.getById(id)
  //     .then(res => {
  //       setProject(res.data);
  //     })
  //     .catch(err => {
  //       toast.error('Oops... Something went wrong.')
  //     })
  // }, []);

  return (
    <StyledProject>
      <Header small image={HpHeaderImage}>
        <div className="pr-header">
          <div className="pr-header__container">
            <h1 className="pr-header__title">PopCorn</h1>

            <div className="pr-header-sub">
              <span className="hp-header-sub__area">IT</span>
              <span className="hp-header-sub__divider"> • </span>
              <span className="hp-header-sub__location">
                London, United Kingdom
              </span>
            </div>

            <p className="hp-header__desc">
              A mobile application for couples, helping them to match on one
              movie to watch together
            </p>
          </div>
        </div>
      </Header>

      <section className="pr-about">
        <div className="pr-aboute__container _container">
          <h2 className="pr-about__title">About project</h2>

          <p className="pr-about__about">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium dolorem ea dolore quod magnam libero officia ex illo,
            animi quibusdam nulla quia beatae dignissimos nobis voluptatibus
            eligendi? Nemo, numquam unde?
          </p>

          <div className="pr-about-footer">
            <div className="pr-about-footer__likes _likes">
              <img src={LikeRed} alt="" />
              32 Likes
            </div>

            <div className="pr-about-footer__social">
              <img
                src={TwitterIcon}
                alt=""
                className="pr-about-footer__social-twitter"
              />
              <img
                src={LinkedInIcon}
                alt=""
                className="pr-about-footer__social-linkedid"
              />
              <img
                src={FacebookIcon}
                alt=""
                className="pr-about-footer__social-facebook"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pr-avpos">
        <div className="pr-avpos__container _container">
          <div className="pr-avpos-author">
            <img src={Avatar} alt="" className="pr-avpos-author__img" />
            <h4 className="pr-avpos-author__name">Scott Johnson</h4>
            <span className="pr-avpos-author__position">Senior Developer</span>
            <span className="pr-avpos-author__location">
              London, United Kingdom
            </span>
            <Button>Contact me</Button>
          </div>

          <div className="pr-avpos-list">
            <h2 className="pr-avpos-list__title">Available positions</h2>
            <ul className="pr-avpos-list__list">
              <li className="pr-avpos-list__list-item">
                {/* as component */}
                {positions.map((pos, i) => (
                  <div className="pr-pos" key={i}>
                    <div className="pr-pos-ls">
                      <img src={pos.available ? GreenDot : RedDot} alt="" />

                      <div className="pr-pos-ls__text-container">
                        <h4
                          className={`pr-pos-ls__name ${
                            pos.available ? "available" : ""
                          }`}
                        >
                          {pos.name}
                        </h4>
                        <p className="pr-pos-ls__desc">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Mollitia asperiores hic placeat dolore esse
                          nihil voluptates modi vero amet unde quam, provident
                          similique? Veniam aliquam ea laudantium quos soluta
                          voluptatum!
                        </p>
                      </div>
                    </div>

                    <Button>Apply</Button>
                  </div>
                ))}
                {/*  */}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pr-budget">
        <div className="pr-budget__container _container">
          <h2 className="pr-budget__title">Budget goal</h2>

          <div className="pr-budget-progress">
            <Progress color="success" value={50}>
              15 000 $
            </Progress>
  
            <h2 className="pr-budget-progress__sum">30 000 $</h2>
          </div>


          <Button>Support now</Button>
        </div>
      </section>

      <section className="pr-comments">
        <div className="pr-comments__container _container">
          <h2 className="pr-comments__title">Comments</h2>

          <ul className="pr-commnets-list">
            {comments.map((com, i) => (
              // comment item
              <div className="pr-comment">
                <img
                  className="pr-comment__avatar _avatar"
                  src={com.avatar}
                  alt=""
                />
                <div className="pr-comment__content-wrapper">
                  <div className="pr-comment__header">
                    <h4 className="pr-comment__name">{com.name}</h4>
                    <span className="pr-comment__ago">{com.ago}</span>
                  </div>

                  {/* <p className="pr-comment__text">{com.comment}</p> */}
                  <p className="pr-comment__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ratione quae quasi sequi quibusdam voluptatem labore dignissimos et est molestias nemo in voluptates ex unde deleniti harum, consequatur doloribus hic?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore esse eligendi inventore consequuntur atque sunt reprehenderit doloremque enim officiis id culpa rem temporibus quibusdam numquam, quaerat aut at, placeat unde!
                  </p>

                  <div className="pr-comment-footer">
                    <span className="_link">Reply</span>
                    <span className="_likes">
                      <img src={LikeRed} alt="" />
                      {com.likes}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </section>
    </StyledProject>
  );
};

export default Project;

const StyledProject = styled.div`
  .pr {
    /* Header */
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
        text-align: center;
      }

      &-sub {
        padding: 20px 0;
        font-size: 20px;
      }
    }

    /* About project */
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
          /* img {
            display: inline-block;
            margin-right: 20px;
          } */
        }

        &__social {
          display: flex;
          img:not(:last-child) {
            margin-right: 10px;
          }
        }
      }
    }

    /* Available positions */
    &-avpos {
      background: #f5f5f5;

      &__container {
        padding-top: 80px;
        padding-bottom: 80px;
        display: flex;
        justify-content: space-around;
      }

      &-author {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 192px;

        > button {
          width: 100%;
        }

        &__img {
          border-radius: 50%;
          height: 150px;
          width: 150px;
        }

        &__name {
          padding: 30px 0 25px;
        }

        &__position {
          //
        }

        &__location {
          padding-bottom: 30px;
        }
      }

      &-list {
        max-width: 525px;

        &__title {
          margin-bottom: 60px;
        }

        &__list {
          height: 270px;
          overflow: auto;
          padding-right: 10px;

          &-item {
            //
          }
        }
      }
    }

    &-pos {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 25px;

      &-ls {
        display: flex;
        align-items: baseline;

        &__text-container {
          margin-left: 10px;
        }

        &__name {
          //
        }

        &__desc {
          display: inline-block;
          white-space: nowrap;
          width: 350px;
          overflow: hidden !important;
          text-overflow: ellipsis;
        }
      }
    }

    /* Budget goal */
    &-budget {
      background: #18a0fb;
      color: white;

      &__container {
        padding-top: 80px;
        padding-bottom: 80px;
        display: flex;
        align-items: center;
      }

      &__title {
        //
      }

      &-progress {
        display: flex;
        flex: 1;
        margin: 0 25px;
        align-items: center;

        >.progress {
          margin-right: 20px;
          flex: 1;
        }
       
        &__sum {
          margin-right: 40px;
        }
      }

    }

    /* Comments */
    &-comments {
      padding: 80px 0;

      &__title {
        margin-bottom: 40px;
      }
    }

    &-comment {
      padding: 16px;
      border: 1px solid #cccccc;
      border-radius: 5px;
      display: flex;
      align-items: flex-start;
      margin-right: 20px;
      margin-bottom: 16px;

      &__avatar {
        width: 106px;
        height: 106px;
        margin-right: 20px;
      }

      &__content-wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      &__ago {
        font-size: 12px;
      }

      &__text {
        flex: 1;
        margin-top: 16px;
      }

      &-footer {
        margin-top: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  
    /* Media queries */
    @media(max-width: 850px) {
      &-avpos {
        &__container {
          flex-direction: column;
          align-items: center;
        }
        
        &-author {
          margin-bottom: 60px;
        }
      }

      &-budget {
        &__container {
          flex-direction: column;
          align-items: normal;

          button{
            margin-top: 40px;
            align-self: center;
          }
        }

        &__title {
          margin-bottom: 20px;
          align-self: center;
        }

        &-progress {
          margin: 0;
          

          &__sum {
            margin: 0;
          }
        }
      }
    }

    @media(max-width: 550px) {
      &-pos {
        flex-direction: column;

        button {
          width: 100%;
        }
      }

      &-comment {
        &__avatar {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
`;
