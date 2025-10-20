import React from "react";
import { Box, Container, useMediaQuery } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import clip from "../assets/large2_2x.mp4";
import iPhoneImg from "../assets/iwatch.png";
import appsBg from "../assets/watch-apps-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function HomeVideoFrame2() {
  const stageRef = React.useRef(null);
  const rigRef = React.useRef(null); 
  const watchRef = React.useRef(null);
  const wrapRef = React.useRef(null);
  const bgRef = React.useRef(null);
  const videoRef = React.useRef(null);

  const isXs = useMediaQuery("(max-width:600px)");

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const stage = stageRef.current;
      const rig = rigRef.current;
      const watch = watchRef.current;
      const wrap = wrapRef.current;
      const bg = bgRef.current;
      const video = videoRef.current;

      gsap.set(rig, { rotate: -90, scale: isXs ? 1.05 : 1.35, transformOrigin: "50% 50%" });

      gsap.set(watch, { opacity: 1, scale: 1, zIndex: 3 });
      gsap.set(bg, { rotate: -90 });

      gsap.set(wrap, {
        position: "absolute",
        left: "50%",
        top: "50%",
        xPercent: -50,
        yPercent: -50,
        width: "38%",
        height: "62%",
        borderRadius: 106,
        overflow: "hidden",
        zIndex: 2,
      });

      gsap.set(bg, { autoAlpha: 1 });
      gsap.set(video, {
        autoAlpha: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: isXs ? "top 65%" : "top 55%",
          once: true,
        },
        defaults: { ease: "power2.inOut" },
      });

      tl.to(rig, { rotate: 0, duration: 1.6 });

      tl.to(bg, { autoAlpha: 0, duration: 0.25 }, ">")
        .add(() => {
          video.muted = true;
          if (video.play) video.play();
        })
        .to(video, { autoAlpha: 1, duration: 0.25 }, "<");

      tl.to({}, { duration: 0.5 });

      tl.to(
        wrap,
        {
          width: isXs ? "86%" : "75%",
          height: isXs ? "70%" : "80%",
          borderRadius: 25,
          duration: 1.0,
        },
        ">"
      ).to(
        watch,
        { scale: 1, opacity: 0, duration: 1.2 },
        "<"
      );
    }, stageRef);

    return () => ctx.revert();
  }, [isXs]);

  return (
    <Box
      sx={{
        minHeight: { xs: "30dvh", md: "100dvh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container disableGutters sx={{ width: "100%", mx: "auto" }}>
        <Box
          ref={stageRef}
          sx={{
            position: "relative",
            width: {
              xs: "clamp(300px, 92vw, 360px)",
              sm: "clamp(540px, 86vw, 900px)",
              md: "clamp(820px, 90vw, 1100px)",
            },
            height: {
              xs: "clamp(320px, 70vw, 380px)",
              sm: "clamp(440px, 58vw, 560px)",
              md: "clamp(560px, 58vw, 650px)",
            },
            mx: "auto",

          }}
        >
          <Box ref={rigRef} sx={{ position: "absolute", inset: 0 }}>
            <Box ref={wrapRef}>
              <Box
                ref={bgRef}
                aria-hidden
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${appsBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 1,
                }}
              />
              <Box
                component="video"
                ref={videoRef}
                src={clip}
                loop
                playsInline
                tabIndex={-1}
                aria-hidden="true"
                onContextMenu={(e) => e.preventDefault()}
                sx={{ position: "absolute", inset: 0, zIndex: 2, display: "block" }}
              />
            </Box>

            <Box
              component="img"
              ref={watchRef}
              src={iPhoneImg}
              alt="Apple Watch"
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                zIndex: 3,
                pointerEvents: "none",
                filter: "drop-shadow(0 10px 40px rgba(0,0,0,0.45))",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
