import React from "react";
import styled from "styled-components";

import ElasticCarousel from "react-elastic-carousel";
import ProjectCard from "components/Cards/ProjectCard";

interface IProps {}

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 800, itemsToShow: 2 },
  // { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 },
];

const Carousel: React.FC<IProps> = (props) => {
  return (
    <StyledCarousel>
      <ElasticCarousel
        breakPoints={breakPoints}
        isRTL={false}
        pagination={false}
      >
        <div className="item">
          <ProjectCard />
        </div>
        <div className="item">
          <ProjectCard />
        </div>
        <div className="item">
          <ProjectCard />
        </div>
        <div className="item">
          <ProjectCard />
        </div>
        <div className="item">
          <ProjectCard />
        </div>
        <div className="item">
          <ProjectCard />
        </div>
      </ElasticCarousel>
    </StyledCarousel>
  );
};

export default Carousel;

const StyledCarousel = styled.div`
  .item {
    margin: 15px;
  }

  /* square buttons */
  .rec.rec-arrow {
  }
  /* round buttons on hover */
  .rec.rec-arrow:hover {
    /* border-radius: 50%; */
    background-color: #18a0fb;
  }
  .rec.rec-arrow:active {
    /* border-radius: 50%; */
    background-color: #18a0fb;
  }
  .rec.rec-arrow:focus {
    /* border-radius: 50%; */
    background-color: #18a0fb;
  }
  /* hide disabled buttons */
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
  /* disable default outline on focused items */
  /*  tline on focused items */
  .rec-carousel-item:focus {
    /* outline: none;
      box-shadow: inset 0 0 1px 1px lightgrey; */
  }
`;
