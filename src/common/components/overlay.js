import styled from 'styled-components';
import Img from 'gatsby-image';

export default styled(Img)`
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: hsla(0, 100%, 94%, 0.2);
  }
`;
