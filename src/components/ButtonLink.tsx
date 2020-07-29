import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5vw;
  font-family: ${props => props.theme.typography.header.fontFamily};
  color: ${props => props.theme.colors.gray[1]};
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  &:hover {
    color: ${props => props.theme.colors.gray[0]};
    -moz-transition: all 0.15s ease-in;
    -o-transition: all 0.15s ease-in;
    -webkit-transition: all 0.15s ease-in;
    transition: all 0.15s ease-in;
  }
`;

export const ButtonLink = ({ route, name }) => {
  return <StyledLink to={route}>{name}</StyledLink>;
};
