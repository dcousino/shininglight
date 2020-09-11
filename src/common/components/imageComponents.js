import styled from 'styled-components';
import Img from 'gatsby-image';

export const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;

export const ImageText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
`;

export const Image = styled(Img)`
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin: 0 2px;
  min-width: 400px;
  @media (max-width: 450px) {
    min-width: 320px;
  }
  @media (max-width: 400px) {
    min-width: 250px;
  }
`;
