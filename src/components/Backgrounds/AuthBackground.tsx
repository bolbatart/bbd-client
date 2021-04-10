import React from "react";
import styled from "styled-components";
import BackgroundImage from "assets/images/authbc.jpg";

interface IProps extends IStyledProps {}

const AuthBackground: React.FC<IProps> = (props) => {
  return (
    <StyledAuthBackground image={props.image}>
      {props.children}
    </StyledAuthBackground>
  );
};

export default AuthBackground;

interface IStyledProps {
  image: string;
}

const StyledAuthBackground = styled.div<IStyledProps>`
  min-height: calc(100vh - 80px);
  background: url(${(props) => props.image}) center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
