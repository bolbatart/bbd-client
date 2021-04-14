import React from "react";
import styled from "styled-components";

interface IProps extends IStyledProps {}

const BigHeader: React.FC<IProps> = (props) => {
  const {...rest} = props;
  return (
    <StyledBigHeader {...rest}>
      <div className="content-wrapper _container">{props.children}</div>
    </StyledBigHeader>
  );
};

export default BigHeader;

interface IStyledProps {
  image: string;
  small?: boolean;
}

const StyledBigHeader = styled.div<IStyledProps>`
  height: ${props => props.small ? '367' : '550'}px;
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
