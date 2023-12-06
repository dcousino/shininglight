import { Link } from "gatsby";
import styled from "styled-components";

export const Button = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  margin: 0.5rem auto 0 auto;
  padding: 1rem 4rem;
  background-color: #333;
  color: #f4f4f4;
  letter-spacing: 0.1em;
  font-weight: bold;
  display: block;
  font-family: "Cormorant", sans-serif;
  width: 40%;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const MainLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  font-family: "Cormorant";
  line-height: 0.75em;
  text-align: right;
  padding-left: 4em;
`;

export const OtherLink = styled(Link)<{
  minmax: string;
  active?: "true" | "false";
}>`
  font-size: 1rem;
  padding: 1rem 0;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.midGray};
  font-family: "Cormorant", sans-serif;
  text-decoration: none;
  @media ${(props) => props.minmax} {
    display: none;
  }
`;
