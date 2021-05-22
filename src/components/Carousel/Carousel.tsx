import React from "react";
import styled from "styled-components";

import ElasticCarousel from "react-elastic-carousel";
import ProjectCard from "components/Cards/ProjectCard";
import { IProjectsView } from "api/projects/types";

interface IProps {
  projects: IProjectsView[];
}

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 800, itemsToShow: 2 },
];

const Carousel: React.FC<IProps> = (props) => {
  return (
    <StyledCarousel>
      <ElasticCarousel
        breakPoints={breakPoints}
        isRTL={false}
        pagination={false}
      >
        {props.projects.map((project, i) => 
          <div className="item" key={i}>
            <ProjectCard project={project} />
          </div>
        )}
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
