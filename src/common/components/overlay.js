import styled from 'styled-components';
import Img from 'gatsby-image';

export default styled.div`
  position: relative;
  float: left;
  width: 100%;
  height: 500px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${props => props.img});
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 300px;
  }
  /* &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: hsla(0, 100%, 94%, 0.2);
  } */
`;
