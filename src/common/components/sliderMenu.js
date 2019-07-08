import React from 'react';
import { OtherLink } from './links';
import { Link } from 'gatsby';
const SliderMenu = props => {
  let extraClasses;
  if (props.active === null) {
    extraClasses = ' dn';
  } else {
    extraClasses = props.active ? ' fadeIn' : ' fadeOut';
  }
  return (
    <div
      className={
        'flex flex-column justify-center items-center bg-washed-red fixed top z-max w-100 ease' +
        (props.active ? ' vh-93' : ' h0')
      }
    >
      <Link
        to="/"
        className={
          'display ttu tracked white f3 no-underline menu__item pv5' +
          extraClasses
        }
      >
        {props.siteTitle}
      </Link>

      {props.extraLinks.map(navLink => (
        <OtherLink
          minmax="(min-width: 700px)"
          key={navLink.to}
          to={navLink.to}
          className={
            'sans-serif ttu mid-gray f5 no-underline  pv3' + extraClasses
          }
        >
          {navLink.name}
        </OtherLink>
      ))}
      <Link
        to="/about"
        className={
          'sans-serif ttu mid-gray f5 no-underline menu__item pv3' +
          extraClasses
        }
      >
        About
      </Link>
    </div>
  );
};

export default SliderMenu;
