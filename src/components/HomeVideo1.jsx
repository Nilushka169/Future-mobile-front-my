import React from "react";
import { Box, Container, useMediaQuery } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AppleIcon from "@mui/icons-material/Apple";

import clip from "../assets/large_2x.mp4";
import iPhoneImg from "../assets/iphone.png";

gsap.registerPlugin(ScrollTrigger);

function HomeVideoFrame1() {
  const phoneContainerRef = React.useRef(null);
  const phoneFrameRef = React.useRef(null);
  const videoRef = React.useRef(null);
  const videoMaskRef = React.useRef(null);

  const loaderRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const barTrackRef = React.useRef(null);
  const barFillRef = React.useRef(null);

  const isXs = useMediaQuery("(max-width:600px)");

  React.useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.set(videoMaskRef.current, { rotate: 0, scale: 1 });
      gsap.set(phoneContainerRef.current, { rotate: 0, scale: isXs ? 1.1 : 1.3 });
      gsap.set(videoRef.current, { autoAlpha: 0, scale: 1, rotate: 0, zIndex: 1 });
      gsap.set(phoneFrameRef.current, { rotate: 0 });


      gsap.set(loaderRef.current, { autoAlpha: 1, zIndex: 2 });
      gsap.set(logoRef.current, { scale: 1, transformOrigin: "50% 50%" });
      gsap.set(barFillRef.current, { width: "0%" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: phoneContainerRef.current,
          start: isXs ? "top 60%" : "top 35%",
          once: true,
        },
      });

      tl.to(logoRef.current, {
        scale: 1,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      })

        .to(barFillRef.current, {
          width: "100%",
          duration: 2,
          ease: "power2.inOut",
        })
        .to(loaderRef.current, { autoAlpha: 0, duration: 0.25, ease: "power1.out" });


      tl.to(
        [phoneFrameRef.current, videoRef.current, videoMaskRef.current],
        {
          rotate: -90,
          duration: 2,
          ease: "power2.inOut",
          onStart: () => {
            const v = videoRef.current;
            if (!v) return;
            v.muted = true;
            v.play();
            gsap.to(v, { autoAlpha: 1, duration: 1 });
          },
        },
        ">-0.05"
      )
        .to(videoMaskRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0,
          ease: "power1.out",
        })
        .to(phoneFrameRef.current, {
          scale: 1.15,
          opacity: 0,
          duration: 1,
          ease: "power1.out",
        })
        .to(
          phoneContainerRef.current,
          {
            scale: isXs ? 1.1 : 1.8,
            duration: 1,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(
          videoRef.current,
          {
            borderRadius: 25,
            duration: 1,
            ease: "power2.inOut",
          },
          "<"
        );
    });

    return () => ctx.revert();
  }, [isXs]);

  return (
    <Box
      sx={{
        minHeight: { xs: "10dvh", sm: "60dvh", md: "100dvh" },
        maxWidth: { xs: "100%", sm: "90%", md: "900px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        paddingX: { xs: 2, sm: 3, md: 4 },
        zIndex: 0,
      }}
    >
      <Container
        disableGutters
        sx={{ width: { xs: "100%", sm: "100%", md: "100%" }, margin: "0 auto" }}
      >
        <Box
          ref={phoneContainerRef}
          sx={{
            position: "relative",
            width: { xs: "155px", sm: "300px", md: "350px" },
            height: { xs: "300px", sm: "600px", md: "700px" },
            transformOrigin: "center center",
          }}
        >
          <Box
            ref={videoMaskRef}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "99%",
              height: "99%",
              bgcolor: "black",
              zIndex: 0,
              borderRadius: { xs: "28px", sm: "60px", md: "66px" },
            }}
          />

          <Box
            ref={loaderRef}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "99%",
              height: "99%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
              borderRadius: { xs: "28px", sm: "60px", md: "66px" },
              overflow: "hidden",
              bgcolor: "black",
              gap: 2,
            }}
          >

            <Box ref={logoRef}>
              <AppleIcon sx={{ fontSize: { xs: "2rem", sm: "4.5rem", md: '5rem' }, color: "#fff" }} />
            </Box>

            <Box
              ref={barTrackRef}
              sx={{
                width: { xs: "45%", sm: "50%", md: "52%" },
                height: { xs: 2.2, sm: 4 },
                borderRadius: 999,
                bgcolor: "rgba(255,255,255,0.18)",
                overflow: "hidden",
              }}
            >
              <Box
                ref={barFillRef}
                sx={{
                  height: "100%",
                  width: "0%",
                  borderRadius: 999,
                  bgcolor: "#fff",
                }}
              />
            </Box>
          </Box>

          <Box
            component="video"
            ref={videoRef}
            src={clip}
            muted
            loop
            playsInline
            tabIndex={-1}
            aria-hidden="true"
            onContextMenu={(e) => e.preventDefault()}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "66px",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          />

          <Box
            component="img"
            ref={phoneFrameRef}
            src={iPhoneImg}
            alt="iPhone"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              zIndex: 3,
              pointerEvents: "none",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default HomeVideoFrame1;
