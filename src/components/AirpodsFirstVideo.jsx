import React from "react";
import "./AirpodsBackgroundVideo.css";
import Video from '../assets/airpods.mp4';
import { Typography } from "@mui/material";

const AirpodsFirstVideo = () => {
  return (
    <div className="video-container">
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src={Video} type="video/mp4" />
      </video>

      <div className="video-overlay">
        <Typography component="h1" sx={{ fontSize: { xs: "5.5rem", sm: "7.5rem" }}}>AirPods</Typography>
        <Typography component="p" sx={{ fontSize: { xs: "1rem", sm: "1.5rem" }, fontFamily: "SFProDisplayRegular" }}>The next evolution of sound and comfort</Typography>
      </div>
    </div>
  );
};

export default AirpodsFirstVideo;