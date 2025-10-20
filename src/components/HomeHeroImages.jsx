import React from "react";
import { Box, Container, Typography } from "@mui/material";
import iphone from "../assets/image.png";

const HomeHeroImages = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        backgroundColor: "#f5f5f7",
        position: "relative",
        height: { xs: "70vh", sm: "100vh", md: "140vh" },
        display: "flex",
        flexDirection: { xs: "column", md: "column" },
        alignItems: "center",
        justifyContent: "start",
        pt: { xs: 2, sm: 4, md: 35 },
        overflow: "hidden",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          position: { xs: "static", md: "relative" },
          pl: { xs: 0, sm: 0, md: "35%" },
          my: { xs: 2, sm: 4, md: -15 },
          width: { xs: "80%", sm: "20rem", md: "26rem" },
          "@media (min-width:900px) and (max-width:1350px)": {
            width: "22rem",
            pl: "45%",
          },
          textAlign: { xs: "center", sm: "center", md: "right" },
          fontSize: { xs: "0.8rem", sm: "1.1rem", md: "1.3rem" },
          fontFamily: "SFProDisplayRegular, sans-serif",
          fontWeight: 600,
          lineHeight: "1.5rem",
          letterSpacing: "0.05em",
          zIndex: 2,
        }}
      >
        We offer genuine Apple products, from the latest iPhones to high-quality
        accessories nothing less.
      </Typography>

      <Box
        component="img"
        src={iphone}
        alt="iPhone"
        sx={{
          position: "relative",
          width: "auto",
          height: { xs: "50vh", sm: "70vh", md: "130vh" },
          objectFit: "contain",
          zIndex: 1,
        }}
      />

      <Typography
        variant="body1"
        sx={{
          position: { xs: "static", md: "relative" },
          pr: { xs: "5%", sm: 0, md: "45%" },
          my: { xs: -5, sm: -6, md: -40 },
          width: { xs: "80%", sm: "20rem", md: "26rem" },
          "@media (min-width:900px) and (max-width:1350px)": {
            width: "20rem",
            pr: "60%",
            my: -40,
          },
          textAlign: { xs: "center", sm: "center", md: "left" },
          fontSize: { xs: "0.8rem", sm: "1.1rem", md: "1.3rem" },
          fontFamily: "SFProDisplayRegular, sans-serif",
          fontWeight: 600,
          lineHeight: "1.5rem",
          letterSpacing: "0.05em",
          zIndex: 2,
        }}
      >
        Our team is passionate about Apple technology and dedicated to helping
        you find exactly what you need.
      </Typography>
    </Container>
  );
};

export default HomeHeroImages;
