"use client";
import { CContainer } from "@coreui/react";
import { TEST_VIDEO_URL, POSTER_URL } from "@/app/const";
import { useEffect, useRef } from "react";

export default function WechatVideoAutoPlayExample() {
  const debuglogs = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // using typescript, Next.js
    // get first dom element with class video
    const video: any = document.querySelectorAll(".video")[0];
    if (!video) {
      logPageDebug("video not found");
      return;
    }

    //play video function
    function doPlay() {
      //getNetworkType is a wechat jsbridge api to get network type
      //we do not need to do anything with the result, just call it to trigger the video play action
      (window as any).WeixinJSBridge?.invoke(
        "getNetworkType",
        {},
        function (e: any) {
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
      );
    }

    // check if WeixinJSBridge exist and is ready
    // WeixinJSBridge is a global object in wechat browser
    // the reason we use it here is because we need to
    // trigger video play action in WeixinJSBridge invoke callback
    // otherwise the video will not play
    if ((window as any).WeixinJSBridge) {
      logPageDebug("WeixinJSBridge found");
      doPlay();
    } else {
      logPageDebug("WeixinJSBridge not found");
      // add event listener for WeixinJSBridgeReady
      // in case it's not ready yet
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
      <CContainer className="mb-5">
        <h1 className="title">
          HTML video autoplay test <br /> Wechat Mobile Browser
        </h1>
        <h2>tested success 2024 Jun 2</h2>
        <CContainer className="video-container">
          <video
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="true"
            x5-video-player-type="h5"
            className="video"
            src={TEST_VIDEO_URL}
            poster={POSTER_URL}
          ></video>
        </CContainer>
        <CContainer className="code-container bg-dark my-5 rounded-lg">
          <code style={{ whiteSpace: "pre-wrap" }}>
            {`
<video
  autoPlay
  muted
  loop
  playsInline
  webkit-playsinline="true"
  x-webkit-airplay="true"
  x5-video-player-type="h5"
  className="video"
  src={TEST_VIDEO_URL}
  poster={POSTER_URL}
></video>

<script>
  // using typescript, Next.js
  // get first dom element with class video
  const video: any = document.querySelectorAll(".video")[0];
  if (!video) {
    return;
  }

  //play video function
  function doPlay() {
    //getNetworkType is a wechat jsbridge api to get network type
    //we do not need to do anything with the result, just call it to trigger the video play action
    (window as any).WeixinJSBridge?.invoke(
      "getNetworkType",
      {},
      function (e: any) {
        //check if video is already playing
        const isVideoPlaying =
          video.currentTime > 0 &&
          !video.paused &&
          !video.ended &&
          video.readyState > 2;

        //if video is not playing, play it
        if (!isVideoPlaying) {
          video.play();
        }
      }
    );
  }

  // check if WeixinJSBridge exist and is ready
  // WeixinJSBridge is a global object in wechat browser
  // the reason we use it here is because we need to
  // trigger video play action in WeixinJSBridge invoke callback
  // otherwise the video will not play
  if ((window as any).WeixinJSBridge) {
    doPlay();
  } else {
    // add event listener for WeixinJSBridgeReady 
    // in case it's not ready yet
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
