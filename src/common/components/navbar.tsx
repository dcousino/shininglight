import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FiMenu } from "react-icons/fi";
import styled from "styled-components";
import SliderMenu from "./sliderMenu";
import { OtherLink, MainLink } from "./links";
import { deviceMax } from "../../../device";
import { NavbarQuery } from "../../types/queries";
const SubText = styled.span`
  font-size: 0.75em;
  font-family: "Sacramento";
  color: #555;
`;

const MainText = styled.span``;
const Nav = styled.div<{ opacity: number }>`
  z-index: 2147483647;
  padding: 1rem 0;
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 4em;
  background: ${(props) => props.theme.colors.offwhite};
  opacity: ${(props) => props.opacity};
  transition: opacity 0.6s ease-out;
  will-change: opacity;
  position: fixed;
  top: 0;
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
  color: ${(props) => props.theme.colors.primary};
  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const Navbar = () => {
  const [menuToggle, setMenuToggle] = React.useState(false);

  const headerRef = React.useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = React.useState(1);

  React.useEffect(() => {
    window.onresize = () => {
      if (window.outerWidth >= 768) {
        setMenuToggle(false);
      }
    };
    if (headerRef.current) {
      const headerHeight = headerRef.current?.clientHeight + 10;

      const didScrollPage = () => {
        let calc = window.scrollY;

        if (calc > headerHeight) {
          setOpacity(0.8);
        } else {
          setOpacity(1);
        }
      };

      window.addEventListener("scroll", didScrollPage);

      return () => {
        window.removeEventListener("scroll", didScrollPage);
      };
    }
  }, []);

  React.useEffect(() => {
    if (menuToggle) {
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "unset";
    }
  }, [menuToggle]);

  function toggleMenu() {
    setMenuToggle(!menuToggle);
  }

  const data = useStaticQuery<NavbarQuery>(
    graphql`
      query Navbar {
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
    `
  );

  return (
    <div style={{ marginBottom: "4em" }}>
      <Nav ref={headerRef} opacity={opacity}>
        <InnerNav>
          <ToggleButton onClick={toggleMenu}>
            <FiMenu />
          </ToggleButton>
          <MainLink to="/">
            <MainText>{data.site.siteMetadata.siteTitle}</MainText>
            <br />
            <SubText>Beauty Design</SubText>
          </MainLink>
          {data.site.siteMetadata.navbarLinks.map((navLink) => (
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
        active={menuToggle.toString() as "true" | "false"}
        extraLinks={data.site.siteMetadata.navbarLinks}
        siteTitle={data.site.siteMetadata.siteTitle}
      />
    </div>
  );
};

export default Navbar;
