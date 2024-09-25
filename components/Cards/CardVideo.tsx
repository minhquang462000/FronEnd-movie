'use client';
import { useRef, useState } from "react";
import ReactPlayer from "react-player";

export default function CardVideo() {
  const [playTime, setPlayTime] = useState(0);
  const playerRef = useRef(null);
  const formatTime = (time: any) => {
    const date = new Date(time * 1000);
    const hour = date.getUTCHours();
    const minute = date.getUTCMinutes();
    const second = ("0" + date.getUTCSeconds()).slice(-2);
    if (hour) {
      return `${hour}:${("0" + minute).slice(-2)}:${second}`;
    }
    return `${minute}:${second}`;
  };

  const handleProgress = (state: any) => {
    setPlayTime(state.playedSeconds);
  };
  return (
    <div className="w-full h-[250px] rounded-2xl md:h-[450px] shadow-md overflow-hidden lg:h-[600px]  ">
      <ReactPlayer
        playing
        controls={true}
        ref={playerRef}
        url={"https://youtu.be/nCoBpyj7qz4"}
        onProgress={handleProgress}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
}
