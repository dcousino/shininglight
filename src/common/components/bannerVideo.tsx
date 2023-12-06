import styled from "styled-components";
import React, { useCallback, useEffect } from "react";

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
  const handleUserKeyPress = useCallback((e: any) => {
    const video = document.getElementById("video") as HTMLVideoElement;
    video.currentTime = 0;
    video.load();
  }, []);
  // useEffect(() => {
  //   const video = document.getElementById("video") as HTMLVideoElement;

  //   if (video) {
  //     video.addEventListener("ended", handleUserKeyPress);

  //     video.play();
  //   }

  //   return () => {
  //     if (video) {
  //       video.removeEventListener("ended", handleUserKeyPress);
  //     }
  //   };
  // }, []);
  return (
    <VideoWrapper>
      <video
        id="video"
        width="100%"
        height="100%"
        autoPlay
        loop
        muted
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
