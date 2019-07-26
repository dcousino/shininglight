import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  color: ${props => props.theme.colors.primary};
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
