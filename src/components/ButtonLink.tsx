import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { BLUE_0, GRAY_1 } from "../constants";

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.75vw;
  font-family: ${props => props.theme.typography.header.fontFamily};
  color: ${GRAY_1};
  -moz-transition: all 0.275s ease-in;
  -o-transition: all 0.275s ease-in;
  -webkit-transition: all 0.275s ease-in;
  transition: all 0.275s ease-in;

  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  /* background-position: 50% 100%; */
  background-repeat: no-repeat;
  background-size: 0% 2px;
  &:hover {
    -moz-transition: all 0.22s ease-in;
    -o-transition: all 0.22s ease-in;
    -webkit-transition: all 0.22s ease-in;
    transition: all 0.22s ease-in;
    color: ${BLUE_0};
    background-size: 100% 2px;
  }
`;

type ButtonLinkProps = {
  route: string;
  name: string;
};

export const ButtonLink = ({ route, name }: ButtonLinkProps) => {
  return (
    <StyledLink
      to={route}
      activeStyle={{ color: BLUE_0, backgroundSize: "100% 2px" }}
      partiallyActive={true}
    >
      {name}
    </StyledLink>
  );
};
