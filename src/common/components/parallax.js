import styled from 'styled-components';
import { device } from '../../../device';

export const Container = styled.div`
  height: 500px;

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;
export const InsideSection = styled.div`
  background: transparent;
  font-family: 'Cormorant';
  padding: 20px;
  color: ${props => props.theme.colors.primaryLight};
  font-size: 6rem;
  text-shadow: 2px 5px 5px #535353;
  white-space: nowrap;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media ${device.tablet} {
    font-size: 4rem;
  }
  @media ${device.mobileL} {
    white-space: normal;
  }
`;
