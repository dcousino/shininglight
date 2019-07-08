import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';
import '../styles/custom.tachyons.css';
import SliderMenu from './sliderMenu';
import { OtherLink, MainLink } from './links';

const SubText = styled.span`
  font-size: 0.75em;
  font-family: 'Sacramento';
  color: #555;
`;

const Nav = styled.div`
  height: 4em;
  position: relative;
  background: ${props => props.theme.colors.offwhite};
  filter: alpha(opacity=80);
  opacity: 0.8;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
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
            image: file(relativePath: { eq: "img/logo.png" }) {
              childImageSharp {
                fluid(maxWidth: 1080) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            site {
              siteMetadata {
                navbarLinks {
                  to
                  name
                }
                siteTitle: title
                mailChimpUrl
              }
            }
          }
        `}
        render={data => (
          <React.Fragment>
            <Nav
              bgColor={bgColor}
              className="flex w-100 vh-7 pv3 flex z-max justify-between items-center top-0"
            >
              <div className="w-100 mw8 flex justify-between items-center ph4 pa2-ns">
                <ToggleButton onClick={this.toggleMenu}>
                  <FiMenu />
                </ToggleButton>
                <MainLink to="/" className=" f3 no-underline">
                  {data.site.siteMetadata.siteTitle}
                  <br />
                  <SubText>Beauty Design</SubText>
                </MainLink>

                <OtherLink minmax="(max-width: 700px)" to="/">
                  Home
                </OtherLink>
                {data.site.siteMetadata.navbarLinks.map(navLink => (
                  <OtherLink
                    minmax="(max-width: 700px)"
                    key={navLink.to}
                    to={navLink.to}
                  >
                    {navLink.name}
                  </OtherLink>
                ))}
              </div>
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
