import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';
import SliderMenu from './sliderMenu';
import { OtherLink, MainLink } from './links';
import { deviceMax } from '../../../device';
const SubText = styled.span`
  font-size: 0.75em;
  font-family: 'Sacramento';
  color: #555;
`;

const MainText = styled.span``;

const Nav = styled.div`
  z-index: 2147483647;
  padding: 1rem 0;
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 4em;
  background: ${props => props.theme.colors.offwhite};
  opacity: 0.8;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
`;

const InnerNav = styled.div`
  padding: 0 2rem;
  width: 100%;
  max-width: 64rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;
const ToggleButton = styled.div`
  font-size: 2em;
  color: ${props => props.theme.colors.primary};
  @media screen and (min-width: 700px) {
    display: none;
  }
`;

export default class Navbar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      menuToggle: null,
      bgColor: 'transparent'
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  componentDidMount() {
    window.onresize = () => {
      if (window.outerWidth >= 768) {
        this.setState({
          menuToggle: null
        });
      }
    };
  }
  toggleMenu(event) {
    this.setState({
      menuToggle: !this.state.menuToggle
    });
  }

  render() {
    const { bgColor } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                navbarLinks {
                  to
                  name
                }
                siteTitle: title
              }
            }
          }
        `}
        render={data => (
          <React.Fragment>
            <Nav bgColor={bgColor}>
              <InnerNav>
                <ToggleButton onClick={this.toggleMenu}>
                  <FiMenu />
                </ToggleButton>
                <MainLink to="/">
                  <MainText>{data.site.siteMetadata.siteTitle}</MainText>
                  <br />
                  <SubText>Beauty Design</SubText>
                </MainLink>

                <OtherLink minmax={deviceMax.tablet} to="/">
                  Home
                </OtherLink>
                {data.site.siteMetadata.navbarLinks.map(navLink => (
                  <OtherLink
                    minmax={deviceMax.tablet}
                    key={navLink.to}
                    to={navLink.to}
                  >
                    {navLink.name}
                  </OtherLink>
                ))}
              </InnerNav>
            </Nav>
            <SliderMenu
              active={this.state.menuToggle}
              extraLinks={data.site.siteMetadata.navbarLinks}
              siteTitle={data.site.siteMetadata.siteTitle}
            />
          </React.Fragment>
        )}
      />
    );
  }
}
