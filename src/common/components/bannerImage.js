import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.height || '45vh'};
  background-color: #fff;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${props => props.img});
  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;
