"use client";
import { CContainer, CFormCheck } from "@coreui/react";
import { useEffect, useState } from "react";
import { TEST_VIDEO_URL, POSTER_URL } from "./const";

export default function Home() {
  const [controls, setControls] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [muted, setMuted] = useState(true);
  const [loop, setLoop] = useState(true);
  const [playsInline, setPlaysInline] = useState(true);
  const [webkitPlaysInline, setWebkitPlaysInline] = useState(true);
  const [xWebkitAirplay, setXWebkitAirplay] = useState(true);
  //const [x5VideoPlayerType, setX5VideoPlayerType] = useState(true);
  const [x5VideoPlayerFullscreen, setX5VideoPlayerFullscreen] = useState(true);
  const [x5VideoOrientation, setX5VideoOrientation] = useState(true);
  const [
    playVideo1SecontAfterLoadViaScript,
    setPlayVideo1SecontAfterLoadViaScript,
  ] = useState(false);

  useEffect(() => {
    const controls = localStorage.getItem("controls");
    if (controls) {
      setControls(controls === "true");
    } else {
      setControls(false);
    }

    const autoplay = localStorage.getItem("autoplay");
    if (autoplay) {
      setAutoplay(autoplay === "true");
    } else {
      setAutoplay(true);
    }

    const muted = localStorage.getItem("muted");
    if (muted) {
      setMuted(muted === "true");
    } else {
      setMuted(true);
    }

    const loop = localStorage.getItem("loop");
    if (loop) {
      setLoop(loop === "true");
    } else {
      setLoop(true);
    }

    const playsInline = localStorage.getItem("playsInline");
    if (playsInline) {
      setPlaysInline(playsInline === "true");
    } else {
      setPlaysInline(true);
    }

    const webkitPlaysInline = localStorage.getItem("webkitPlaysInline");
    if (webkitPlaysInline) {
      setWebkitPlaysInline(webkitPlaysInline === "true");
    } else {
      setWebkitPlaysInline(true);
    }

    const xWebkitAirplay = localStorage.getItem("xWebkitAirplay");
    if (xWebkitAirplay) {
      setXWebkitAirplay(xWebkitAirplay === "true");
    } else {
      setXWebkitAirplay(true);
    }

    const x5VideoPlayerFullscreen = localStorage.getItem(
      "x5VideoPlayerFullscreen"
    );
    if (x5VideoPlayerFullscreen) {
      setX5VideoPlayerFullscreen(x5VideoPlayerFullscreen === "true");
    } else {
      setX5VideoPlayerFullscreen(true);
    }

    const x5VideoOrientation = localStorage.getItem("x5VideoOrientation");
    if (x5VideoOrientation) {
      setX5VideoOrientation(x5VideoOrientation === "true");
    } else {
      setX5VideoOrientation(true);
    }

    const playVideo1SecontAfterLoadViaScript = localStorage.getItem(
      "playVideo1SecontAfterLoadViaScript"
    );
    if (playVideo1SecontAfterLoadViaScript) {
      setPlayVideo1SecontAfterLoadViaScript(
        playVideo1SecontAfterLoadViaScript === "true"
      );
    } else {
      setPlayVideo1SecontAfterLoadViaScript(false);
    }

    if (playVideo1SecontAfterLoadViaScript) {
      playVideo1SecontAfterLoadViaScriptHandler();
    }
  }, []);

  const controlsCheckBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setControls(e.target.checked);
    localStorage.setItem(
      "controls",
      e.target.checked === true ? "true" : "false"
    );
  };

  const autoplayCheckBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAutoplay(e.target.checked);
    localStorage.setItem(
      "autoplay",
      e.target.checked === true ? "true" : "false"
    );
  };

  const mutedCheckBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMuted(e.target.checked);
    localStorage.setItem("muted", e.target.checked === true ? "true" : "false");
  };

  const loopCheckBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoop(e.target.checked);
    localStorage.setItem("loop", e.target.checked === true ? "true" : "false");
  };

  const playsInlineCheckBoxHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPlaysInline(e.target.checked);
    localStorage.setItem(
      "playsInline",
      e.target.checked === true ? "true" : "false"
    );
  };

  const webkitPlaysInlineCheckBoxHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWebkitPlaysInline(e.target.checked);
    localStorage.setItem(
      "webkitPlaysInline",
      e.target.checked === true ? "true" : "false"
    );
  };

  const xWebkitAirplayCheckBoxHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setXWebkitAirplay(e.target.checked);
    localStorage.setItem(
      "xWebkitAirplay",
      e.target.checked === true ? "true" : "false"
    );
  };

  const x5VideoPlayerFullscreenCheckBoxHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setX5VideoPlayerFullscreen(e.target.checked);
    localStorage.setItem(
      "x5VideoPlayerFullscreen",
      e.target.checked === true ? "true" : "false"
    );
  };

  const x5VideoOrientationCheckBoxHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setX5VideoOrientation(e.target.checked);
    localStorage.setItem(
      "x5VideoOrientation",
      e.target.checked === true ? "true" : "false"
    );
  };

  const playVideo1SecontAfterLoadViaScriptCheckBoxHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPlayVideo1SecontAfterLoadViaScript(e.target.checked);
    localStorage.setItem(
      "playVideo1SecontAfterLoadViaScript",
      e.target.checked === true ? "true" : "false"
    );
  };

  const playVideo1SecontAfterLoadViaScriptHandler = () => {
    setTimeout(() => {
      const video = document.querySelector("video");
      if (video) {
        console.log("play video 1 secont after load via script");
        video.play();
      }
    }, 1000);
  };

  return (
    <main>
      <CContainer>
        <h1 className="title">HTML video autoplay test ground</h1>

        <CContainer className="video-container">
          <video
            controls={controls}
            autoPlay={autoplay}
            muted={muted}
            loop={loop}
            playsInline={playsInline}
            webkit-playsinline={String(webkitPlaysInline)}
            x-webkit-airplay={String(xWebkitAirplay)}
            x5-video-player-fullscreen={String(x5VideoPlayerFullscreen)}
            x5-video-orientation={String(x5VideoOrientation)}
            className="video"
            src={TEST_VIDEO_URL}
            poster={POSTER_URL}
          ></video>
        </CContainer>

        <CContainer className="options-container" sm>
          <CFormCheck
            type="checkbox"
            label="controls"
            checked={controls}
            onChange={controlsCheckBoxHandler}
          />
          <CFormCheck
            type="checkbox"
            label="autoplay"
            checked={autoplay}
            onChange={autoplayCheckBoxHandler}
          />
          <CFormCheck
            type="checkbox"
            label="muted"
            checked={muted}
            onChange={mutedCheckBoxHandler}
          />
          <CFormCheck
            type="checkbox"
            label="loop"
            checked={loop}
            onChange={loopCheckBoxHandler}
          />
          <CFormCheck
            type="checkbox"
            label="playsInline"
            checked={playsInline}
            onChange={playsInlineCheckBoxHandler}
          />
          <CFormCheck
            type="checkbox"
            label="webkit-playsinline"
            checked={webkitPlaysInline}
            onChange={webkitPlaysInlineCheckBoxHandler}
          />
          <CFormCheck
            type="checkbox"
            label="x-webkit-airplay"
            checked={xWebkitAirplay}
            onChange={xWebkitAirplayCheckBoxHandler}
          />
          <CFormCheck
            type="checkbox"
            label="x5-video-player-fullscreen"
            checked={x5VideoPlayerFullscreen}
            onChange={x5VideoPlayerFullscreenCheckBoxHandler}
          />
          <CFormCheck
            type="checkbox"
            label="x5-video-orientation"
            checked={x5VideoOrientation}
            onChange={x5VideoOrientationCheckBoxHandler}
          />
          <CFormCheck
            type="checkbox"
            label="play video 1 secont after load via script"
            checked={playVideo1SecontAfterLoadViaScript}
            onChange={playVideo1SecontAfterLoadViaScriptCheckBoxHandler}
          />
        </CContainer>
      </CContainer>
    </main>
  );
}
