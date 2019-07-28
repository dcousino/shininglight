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

const SliderLink = styled(OtherLink)`
  display: ${({ active }) => (active ? 'flex' : 'none')};
`;
const TitleLink = styled(Link)`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  font-family: 'Sacramento', serif;
  font-size: 2.25rem;
  text-decoration: none;
  padding: 4rem 0;
  color: ${props => props.theme.colors.midGray};
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
      <TitleLink active={props.active} to="/" className={extraClasses}>
        {props.siteTitle}
      </TitleLink>

      {props.extraLinks.map(navLink => (
        <SliderLink
          active={props.active}
          minmax={deviceMin.tablet}
          key={navLink.to}
          to={navLink.to}
          className={extraClasses}
        >
          {navLink.name}
        </SliderLink>
      ))}
    </Slider>
  );
};

export default SliderMenu;
