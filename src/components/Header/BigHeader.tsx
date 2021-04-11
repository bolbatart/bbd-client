import React from "react";
import styled from "styled-components";

interface IProps extends IStyledProps {}

const BigHeader: React.FC<IProps> = (props) => {
  return (
    <StyledBigHeader image={props.image}>
      <div className="content-wrapper _container">{props.children}</div>
    </StyledBigHeader>
  );
};

export default BigHeader;

interface IStyledProps {
  image: string;
}

const StyledBigHeader = styled.div<IStyledProps>`
  height: 550px;
  background: ${(props) => `url(${props.image}) center / cover no-repeat;`};

  .content-wrapper {
    height: 100%;
  }

  @media (max-width: 650px) {
    .content-wrapper {
      padding: 0;
      width: 100%;
    }
  }
`;
