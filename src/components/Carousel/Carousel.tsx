import React from "react";
import styled from "styled-components";

import ElasticCarousel from "react-elastic-carousel";

interface IProps {}

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 900, itemsToShow: 2 },
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
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </ElasticCarousel>
    </StyledCarousel>
  );
};

export default Carousel;

const StyledCarousel = styled.div`
  .item {
    width: 450px;
    height: 623px;
    background-color: orange;
    margin: 15px;
  }

  /* square buttons */
  .rec.rec-arrow {
  }
  /* round buttons on hover */
  .rec.rec-arrow:hover {
    /* border-radius: 50%; */
    background-color: orange;
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
