import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import backgroundImage from "../assets/imageAboutCard1.png";

export default function StoryBannerImage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: {xs: "85%", sm: "90%", md: "90%" },
        minHeight: isMobile ? "15rem" : "32rem",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "20px",
        position: "relative",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
        overflow: "hidden",
        p: isMobile ? 3 : 6,
        "&::after": isMobile
          ? {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(0,0,0,0.4)",
              zIndex: 0,
            }
          : {},
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "center" : "flex-start",
          gap: isMobile ? 3 : 0,
        }}
      >
        <Box
          sx={{
            maxWidth: isMobile ? "100%" : "40%",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontFamily: "SFProDisplayBold, sans-serif",
              fontSize: { xs: "1.5rem", sm: "1.5rem", md: "2.8rem" },
            }}
          >
            Our story
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.3rem" },
              lineHeight: 1.6,
              fontFamily: "SFProDisplayRegular, sans-serif",
            }}
          >
            Founded in 2016, <strong>Future Mobile</strong> began with a simple
            belief: Everyone deserves an exceptional Apple experience. What
            started as a small kiosk has grown into the most trusted destination
            for genuine iPhones, expert repairs, and personalized tech guidance.
          </Typography>
        </Box>

        {!isMobile && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.15,
              width: "180px",
              height: "180px",
              backgroundImage: `url('/assets/apple-logo.png')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />
        )}

        <Box
          sx={{
            textAlign: isMobile ? "center" : "right",
            maxWidth: isMobile ? "100%" : "30%",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              fontFamily: "SFProDisplayBold, sans-serif",
              fontSize: { xs: "1.5rem", sm: "1.5rem", md: "2.8rem" },
            }}
          >
            Founder
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.3rem" },
              fontFamily: "SFProDisplayRegular, sans-serif",
            }}
          >
            Mr. G.A.S.Y. Kularathne
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
