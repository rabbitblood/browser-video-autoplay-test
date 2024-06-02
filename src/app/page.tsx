import Image from "next/image";

export default function Home() {
  const TEST_VIDEO_URL =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  return (
    <main>
      <h1>AutoPlay Video Test</h1>
      <div>
        <video
          className="homepage-video"
          src={TEST_VIDEO_URL}
          muted
          autoPlay
          poster="https://via.placeholder.com/1920x1080"
        ></video>
      </div>
      <div>
        <p>this works</p>
      </div>
      {/* (() => {
                const element = (
                  <video
                    className={`video${idx}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    controls={false}
                    autoPlay
                    muted
                    loop
                    playsInline
                    webkit-playsinline="true"
                    x-webkit-airplay="true"
                    x5-video-player-type="h5"
                    x5-video-player-fullscreen="true"
                    x5-video-orientation="portrait"
                    poster={item.videoPoster}
                  >
                    <source src={item.slideImage} type="video/mp4" />
                  </video>
                );
                setTimeout(() => {
                  function doPlay() {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (window as any).WeixinJSBridge.invoke(
                      "getNetworkType",
                      {},
                      function () {
                        const $video: JQuery<HTMLVideoElement> = $(
                          `.video${idx}`
                        );
                        $video[0].play();
                        console.log("invoke getNetworkType");

                        setTimeout(() => {
                          const isVideoPlaying =
                            $video[0].currentTime > 0 &&
                            !$video[0].paused &&
                            !$video[0].ended &&
                            $video[0].readyState > 2;
                          console.log(isVideoPlaying);
                          if (!isVideoPlaying) {
                            $video[0].play();
                          }
                        }, 500);
                      }
                    );
                  }

                  console.log("start");

                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  if ((window as any).WeixinJSBridge) {
                    console.log("start2");
                    doPlay();
                  } else {
                    console.log("start3");
                    document.addEventListener(
                      "WeixinJSBridgeReady",
                      function () {
                        doPlay();
                      },
                      false
                    );

                    const $video: JQuery<HTMLVideoElement> = $(`.video${idx}`);
                    $video[0].play();

                    setTimeout(() => {
                      setTimeout(() => {
                        const isVideoPlaying =
                          $video[0].currentTime > 0 &&
                          !$video[0].paused &&
                          !$video[0].ended &&
                          $video[0].readyState > 2;
                        if (!isVideoPlaying) {
                          $video[0].play();
                        }
                      }, 500);
                    }, 500);
                  }
                }, 500);

                return <>{element}</>;
              }), */}
    </main>
  );
}
