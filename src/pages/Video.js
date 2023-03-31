import React, { useRef, useState } from "react";
import { VideoFooter } from "./components/footer/VideoFooter";
import "./video.css"; 
import video_praia from "./videos/video_praia.mp4";
 
function Video() { 
  const videoRef = useRef(null); 
  const [play, setPlay] = useState(false); 
 
  function handdleStart() { 
    if (play) { 
      videoRef.current.pause(); 
      setPlay(false); 
    } else { 
      videoRef.current.play(); 
      setPlay(true); 
    } 
  } 
 
  return ( 
    <div className="video"> 
      <video 
        className="video__player" 
        ref={videoRef} 
        onClick={handdleStart} 
        loop 
        src={video_praia} type="video/mp4"
      ></video>
      {/*Side bar*/}
      <VideoFooter/>
    </div> 
  ); 
} 
 
export default Video;