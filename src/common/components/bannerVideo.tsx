import styled from "styled-components";
import React from "react";

const VideoWrapper = styled.div<{ height?: string }>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height || "80vh"};
  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

const BannerVideo = ({
  src,
  placeholderUrl,
  mimeType,
}: {
  src: string;
  placeholderUrl: string;
  mimeType: string;
}) => {
  return (
    <VideoWrapper>
      <video
        id="video"
        width="100%"
        height="100%"
        autoPlay
        loop
        muted
        playsInline
        style={{
          objectFit: "cover",
        }}
      >
        <source src={src} placeholder={placeholderUrl} type={mimeType} />
      </video>
    </VideoWrapper>
  );
};

export default BannerVideo;
