import React from 'react';
import { OtherLink } from './links';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { deviceMin } from '../../../device';

const Slider = styled.div`
  transition: all 0.4s ease;
  height: ${({ active }) => (active ? '100vh' : '0')};
  z-index: 2147483647;
  background-color: ${props => props.theme.colors.washedRed};
  position: fixed;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

const TitleLink = styled(Link)`
  font-family: 'Sacramento', serif;
  font-size: 2.25rem;
  text-decoration: none;
  padding: 4rem 0;
  color: ${props => props.theme.colors.midGray};
  letter-spacing: 0.1em;
`;

const SliderMenu = props => {
  let extraClasses;
  if (props.active === null) {
    extraClasses = ' dn';
  } else {
    extraClasses = props.active ? ' fadeIn' : ' fadeOut';
  }
  return (
    <Slider active={props.active}>
      <TitleLink to="/" className={extraClasses}>
        {props.siteTitle}
      </TitleLink>

      {props.extraLinks.map(navLink => (
        <OtherLink
          minmax={deviceMin.tablet}
          key={navLink.to}
          to={navLink.to}
          className={extraClasses}
        >
          {navLink.name}
        </OtherLink>
      ))}
    </Slider>
  );
};

export default SliderMenu;
