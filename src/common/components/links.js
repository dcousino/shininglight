import { Link } from 'gatsby';
import styled from 'styled-components';

export const MainLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  font-family: 'Cormorant';
  line-height: 0.75em;
  text-align: right;
  padding-left: 4em;
`;

export const OtherLink = styled(Link)`
  font-size: 1rem;
  padding: 1rem 0;
  text-transform: uppercase;
  color: ${props => props.theme.colors.midGray};
  font-family: 'Cormorant', sans-serif;
  text-decoration: none;
  @media ${props => props.minmax} {
    display: none;
  }
`;
