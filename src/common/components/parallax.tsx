import React from "react";
import styled from "styled-components";
import { deviceMax } from "../../../device";
import { Parallax } from "react-parallax";

export const Container = styled.div<{ height?: string; smHeight?: string }>`
  height: ${(props) => props.height || "500px"};

  @media ${deviceMax.tablet} {
    height: ${(props) => props.smHeight || "300px"};
  }
`;
export const InsideSection = styled.div`
  background: transparent;
  font-family: "Cormorant";
  padding: 20px;
  color: #696969;
  font-size: 6rem;
  white-space: nowrap;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media ${deviceMax.tablet} {
    font-size: 4rem;
  }
  @media ${deviceMax.mobileL} {
    white-space: normal;
  }
`;

export const ParallaxSection = ({
  url,
  title,
  strength,
}: {
  url: string;
  title: string;
  strength?: number;
}) => {
  return (
    <Parallax
      bgImage={url || undefined}
      bgImageAlt={title || "Banner Image"}
      bgImageStyle={{
        backgroundSize: "contain",
      }}
      strength={strength}
    >
      <div>
        <div
          style={{
            position: "absolute",
            background: `hsla(0, 100%, 94%, 0.2)`,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <Container />
    </Parallax>
  );
};
