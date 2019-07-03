import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export const MainLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  font-family: 'Cormorant';
  line-height: 0.75em;
  text-align: right;
  padding-left: 4em;
`;
export const OtherLink = styled(Link)`
  font-size: 1.2em;
  color: ${props => props.theme.colors.primary};
  font-family: 'Cormorant';
  text-decoration: none;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const MultiLink = props => {
  const internal = /^\/(?!\/)/.test(props.to);
  let result;
  if (internal) {
    result = (
      <OtherLink to={props.to} className={props.className}>
        {props.children}
      </OtherLink>
    );
  } else {
    result = (
      <a href={props.to} className={props.className}>
        {props.children}
      </a>
    );
  }
  return result;
};
export const MultiLinkWrapper = styled(MultiLink)`
  color: ${props => props.theme.colors.primary};
  font-family: 'Cormorant';
  font-size: 1.2em;
  text-decoration: none;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
