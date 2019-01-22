import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import '../styles/custom.tachyons.css';
import './navbar.css';

export default class Navbar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // Null rather than false to check for initialization
      menuToggle: null
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    this.setState({
      menuToggle: !this.state.menuToggle
    });
  }

  render() {
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
                siteSubTitle: subTitle
                mailChimpUrl
              }
            }
          }
        `}
        render={data => (
          <React.Fragment>
            <header className="bg-white black-80 tc">
              <div className="bg-main pv4">
                <h1 className="mt2 mb0 f1 rochester">
                  {data.site.siteMetadata.siteTitle}
                </h1>
                <h2 className="mt2 mb0 nav-sub serif fw4 ttu tracked">
                  {data.site.siteMetadata.siteSubTitle}
                </h2>
              </div>
              <nav className="bt bb nav-serif tc center">
                {data.site.siteMetadata.navbarLinks.map(link => (
                  <Link
                    key={link.name}
                    aria-label={link.name}
                    className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue pa3 dib ph4-l"
                    to={link.to}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </header>
          </React.Fragment>
        )}
      />
    );
  }
}
