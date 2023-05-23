import styled from 'styled-components';
import { Link } from 'gatsby';

export const SocialLink = styled.a`
  color: ${props => props.theme.colors.offwhite};
`;
export const Footer = styled.footer`
  padding: 0.5rem;
  background-color: #333;
  color: ${props => props.theme.colors.offwhite};
`;

export const InnerFooter = styled.div`
  margin: 0 auto 0.5rem auto;
  width: 100%;
  max-width: 96rem;
  justify-content: space-around;
  flex-wrap: wrap;
  display: flex;
`;

export const FooterComponentContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 0.25rem;
  max-width: 16rem;
  width: 100%;
`;

export const FooterTitle = styled.span`
  font-family: 'Sacramento', serif;
  font-size: 2.25rem;
`;

export const SocialLinks = styled.div`
  padding: 0.5rem 0;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  display: flex;
`;

export const SiteMapContainer = styled.div`
  margin: 0 auto 0.25rem auto;
  color: #999;
  width: 100%;
  max-width: 96rem;
`;

export const SiteMapDivider = styled.div`
  width: 100%;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: #555;
  margin: 1rem auto;
`;

export const SiteMap = styled.div`
  width: 100%;
  max-width: 32rem;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0 auto;
`;

export const SiteMapLink = styled(Link)`
  font-family: 'Cormorant', sans-serif;
  font-size: 1rem;
  margin: 0 0.25rem;
  padding: 0.25rem 0;
  color: ${props => props.theme.colors.silver};
  letter-spacing: 0.1em;
  display: block;
  background-color: transparent;
`;
