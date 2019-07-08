import { Link } from 'gatsby';
import styled from 'styled-components';

export const MainLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  font-family: 'Cormorant';
  line-height: 0.75em;
  text-align: right;
  padding-left: 4em;
`;
export const OtherLink = styled(Link)`
  font-size: 1.2em;
  color: ${props => props.theme.colors.primary};
  font-family: 'Cormorant';
  text-decoration: none;
  @media ${props => props.minmax} {
    display: none;
  }
`;
