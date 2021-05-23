import React from "react";
import styled from "styled-components";
import BackgroundImage from "assets/images/authbc.jpg";

interface IProps {}

const CreateProjectBackgorund: React.FC<IProps> = (props) => {
  return (
    <StyledCreateProjectBackgorund>
      {props.children}
    </StyledCreateProjectBackgorund>
  );
};

export default CreateProjectBackgorund;

// interface IStyledProps {
//   image: string;
// }

const StyledCreateProjectBackgorund = styled.div`
  min-height: calc(100vh - 80px);
  background: url(${BackgroundImage}) center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
