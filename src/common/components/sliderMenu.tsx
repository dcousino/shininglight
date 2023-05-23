import React from "react";
import { OtherLink } from "./links";
import { Link } from "gatsby";
import styled from "styled-components";
import { deviceMin } from "../../../device";

const Slider = styled.div<{ active: "true" | "false" }>`
  opacity: ${({ active }) => (active === "true" ? 1 : 0)};
  transition: ${({ active }) =>
    active === "true" ? "all 0.4s ease-in" : "all 0.4s ease-out"};
  height: ${({ active }) => (active === "true" ? "100vh" : "0")};
  z-index: 9999;
  background-color: ${(props) => props.theme.colors.washedRed};
  position: fixed;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

const SliderLink = styled(OtherLink)`
  display: ${({ active }) => (active === "true" ? "flex" : "none")};
`;
const TitleLink = styled(Link)<{ active: "true" | "false" }>`
  display: ${({ active }) => (active === "true" ? "flex" : "none")};
  font-family: "Sacramento", serif;
  font-size: 2.25rem;
  text-decoration: none;
  padding: 4rem 0;
  color: ${(props) => props.theme.colors.midGray};
`;

const SliderMenu = ({
  active,
  siteTitle,
  extraLinks,
}: {
  active: "false" | "true";
  siteTitle: string;
  extraLinks: { to: string; name: string }[];
}) => {
  return (
    <Slider active={active}>
      <TitleLink active={active} to="/">
        {siteTitle}
      </TitleLink>

      {extraLinks.map((navLink) => (
        <SliderLink
          active={active}
          minmax={deviceMin.tablet}
          key={navLink.to}
          to={navLink.to}
        >
          {navLink.name}
        </SliderLink>
      ))}
    </Slider>
  );
};

export default SliderMenu;
