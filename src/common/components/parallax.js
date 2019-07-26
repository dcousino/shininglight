import styled from 'styled-components';
import { deviceMax } from '../../../device';

export const Container = styled.div`
  height: 500px;

  @media ${deviceMax.tablet} {
    height: 300px;
  }
`;
export const InsideSection = styled.div`
  background: transparent;
  font-family: 'Cormorant';
  padding: 20px;
  color: ${props => props.theme.colors.primary};
  font-size: 6rem;
  text-shadow: 2px 2px 5px #555;
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
