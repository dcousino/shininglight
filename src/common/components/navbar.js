import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';
import '../styles/custom.tachyons.css';
import Img from 'gatsby-image';
const MainLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  font-family: 'Cormorant';
  line-height: 0.75em;
  text-align: right;

  /* display: block; */
`;
const SubText = styled.span`
  font-size: 0.75em;
  font-family: 'Sacramento';
  color: #555;
`;

const Nav = styled.div`
  position: relative;
  background: ${props => props.theme.colors.offwhite};
  /* filter: alpha(opacity=80);
  opacity: 0.8;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  padding: 0;
  margin: 0; */
`;

const MultiLink = props => {
  const internal = /^\/(?!\/)/.test(props.to);
  let result;
  if (internal) {
    result = (
      <Link to={props.to} className={props.className}>
        {props.children}
      </Link>
    );
  } else {
    result = (
      <a href={props.to} className={props.className}>
        {props.children}
      </a>
    );
  }
  return result;
};

const SliderMenu = props => {
  // Prevents a flash of visible menu items when the entrance is triggered
  let extraClasses;
  if (props.active === null) {
    extraClasses = ' dn';
  } else {
    extraClasses = props.active ? ' fadeIn' : ' fadeOut';
  }
  return (
    <div
      className={
        'flex flex-column justify-center items-center bg-washed-red fixed top z-max w-100 ease' +
        (props.active ? ' vh-93' : ' h0')
      }
    >
      <Link
        to="/"
        className={
          'display ttu tracked dark-gray f3 no-underline menu__item pv5' +
          extraClasses
        }
      >
        {props.siteTitle}
      </Link>
      {props.extraLinks.map(navLink => (
        <MultiLink
          key={navLink.to}
          to={navLink.to}
          className={
            'sans-serif ttu mid-gray f5 no-underline menu__item pv3' +
            extraClasses
          }
        >
          {navLink.name}
        </MultiLink>
      ))}
      <Link
        to="/about"
        className={
          'sans-serif ttu mid-gray f5 no-underline menu__item pv3' +
          extraClasses
        }
      >
        About
      </Link>
    </div>
  );
};

export default class Navbar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      menuToggle: null,
      bgColor: 'transparent'
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = event => {
    let scrollTop = event.srcElement.body.scrollTop,
      itemTranslate = Math.min(0, scrollTop / 3 - 60);
  };

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
              <div className="w-100 mw8 flex justify-between justify-around items-center ph4 pa2-ns">
                <button
                  className="ttu tracked self-start black f4 no-underline bn bg-transparent pointer"
                  onClick={this.toggleMenu}
                >
                  <FiMenu />
                </button>
                <MainLink to="/" className=" f3 no-underline">
                  {data.site.siteMetadata.siteTitle}
                  <br />
                  <SubText>Beauty Design</SubText>
                </MainLink>

                <Link
                  to="/"
                  className="sans-serif ttu white f5 no-underline dn dib-l"
                >
                  HOME
                </Link>
                {data.site.siteMetadata.navbarLinks.map(navLink => (
                  <MultiLink
                    key={navLink.to}
                    to={navLink.to}
                    className="sans-serif ttu white f5 no-underline dn dib-l"
                  >
                    {navLink.name}
                  </MultiLink>
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
