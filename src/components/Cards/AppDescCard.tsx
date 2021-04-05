import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

interface IProps extends IStyledProps {
  title?: string;
  text?: string;
  buttonText?: string;
  buttonOutlined?: boolean;
}

const AppDescCard: React.FC<IProps> = (props) => {
  return (
    <StyledAppDescCard maxWidth={props.maxWidth}>
      {props.title && <h4 className="dc-title bold">{props.title}</h4>}
      {props.text && <p className="dc-text">{props.text}</p>}
      {props.buttonText && (
        <Button outline={props.buttonOutlined} color="primary">
          {props.buttonText}
        </Button>
      )}
    </StyledAppDescCard>
  );
};

export default AppDescCard;

interface IStyledProps {
  maxWidth?: string;
}

const StyledAppDescCard = styled.div<IStyledProps>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};

  h4.dc-title,
  p.dc-text {
    margin: 0 0 20px 0;
  }
`;
