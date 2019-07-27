import styled from 'styled-components';
import { deviceMax } from '../../../device';

export const Container = styled.div`
  height: ${props => props.height || '500px'};

  @media ${deviceMax.tablet} {
    height: ${props => props.smHeight || '300px'};
  }
`;
export const InsideSection = styled.div`
  background: transparent;
  font-family: 'Cormorant';
  padding: 20px;
  color: #696969;
  /* color: ${props => props.theme.colors.offwhite}; */
  font-size: 6rem;
  /* text-shadow: 2px 2px 5px #555; */
  white-space: nowrap;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media ${deviceMax.tablet} {
    font-size: 4rem;
  }
  @media ${deviceMax.mobileL} {
    white-space: normal;
  }
`;
