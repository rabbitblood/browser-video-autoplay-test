"use client";
import { CContainer, CFormCheck } from "@coreui/react";
import { TEST_VIDEO_URL, POSTER_URL } from "@/app/const";
import { useEffect, useRef } from "react";
import { log } from "console";

export default function WechatVideoAutoPlayExample() {
  const debuglogs = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // vanilla js code
    // get first dom element with class video
    const video: any = document.querySelectorAll(".video")[0];
    if (!video) {
      logPageDebug("video not found");
      return;
    }

    //play video
    function doPlay() {
      //getNetworkType is a wechat jsbridge api to get network type
      //the reason we use it here is that we need to trigger the video play action in a user gesture
      //otherwise the video will not play
      // (window as any).WeixinJSBridge?.invoke(
      //   "getNetworkType",
      //   {},
      //   function (e: any) {
      //     logPageDebug("getNetworkType: " + JSON.stringify(e));

      //     //check if video is already playing
      //     const isVideoPlaying =
      //       video.currentTime > 0 &&
      //       !video.paused &&
      //       !video.ended &&
      //       video.readyState > 2;
      //     logPageDebug("isVideoPlaying: " + isVideoPlaying);

      //     //if video is not playing, play it
      //     if (!isVideoPlaying) {
      //       video.play();
      //     }
      //   }
      // );

      //check if video is already playing
      const isVideoPlaying =
        video.currentTime > 0 &&
        !video.paused &&
        !video.ended &&
        video.readyState > 2;
      logPageDebug("isVideoPlaying: " + isVideoPlaying);

      //if video is not playing, play it
      if (!isVideoPlaying) {
        video.play();
      }
    }

    //check if WeixinJSBridge exist and is ready
    if ((window as any).WeixinJSBridge) {
      logPageDebug("WeixinJSBridge found");
      doPlay();
    } else {
      logPageDebug("WeixinJSBridge not found");
      logPageDebug(
        "add event listener for WeixinJSBridgeReady in case it's not ready yet"
      );
      document.addEventListener(
        "WeixinJSBridgeReady",
        function () {
          doPlay();
        },
        false
      );
    }
  }, []);

  function logPageDebug(message: string) {
    console.log(message);
    debuglogs.current?.appendChild(document.createTextNode(message));
    debuglogs.current?.appendChild(document.createElement("br"));
  }

  return (
    <main>
      <CContainer>
        <h1 className="title">HTML video autoplay test ground</h1>
        <h2>tested success 2024 Jun 2</h2>
        <CContainer className="video-container">
          <video
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="true"
            x5-video-orientation="true"
            className="video"
            src={TEST_VIDEO_URL}
            poster={POSTER_URL}
          ></video>
        </CContainer>
        <CContainer className="code-container">
          <code style={{ whiteSpace: "pre" }}>
            {`
          <video
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="true"
            x5-video-orientation="true"
            className="video"
            src={TEST_VIDEO_URL}
            poster={POSTER_URL}
          ></video>
          <script>

          </script>

            `}
          </code>
        </CContainer>
        <h2>debug logs:</h2>
        <div ref={debuglogs}></div>
      </CContainer>
    </main>
  );
}
