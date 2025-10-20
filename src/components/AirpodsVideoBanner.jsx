import React from "react";
import { Box, Typography } from "@mui/material";
import ComponentShopiPhoneButton from "./ComponentShopIphoneButton";
import videoSrc from "../assets/e5133b1ff17f429a8183d7d469383a5a.HD-1080p-4.8Mbps-42956839.mp4";

function AirpodsVideoBanner() {
  return (
    <Box
      sx={{
        mb: 6,
        position: "relative",
        width: "90%",
        left: "50%",
        transform: "translateX(-50%)",
        height: { xs: "400px", sm: "500px", md: "90vh" },
        borderRadius: "25px",
        overflow: "hidden",
      }}
    >
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "20px", sm: "40px" },
          left: { xs: "20px", sm: "40px" },
          color: "#fff",
          maxWidth: "74%",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", fontFamily: "SFProDisplayRegular, sans-serif", fontSize: { xs: "1rem", sm: "1.5rem" }, letterSpacing: "0.1em" }}
        >
          Airpods
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "SFProDisplayRegular, sans-serif",
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "4.5rem" },
            letterSpacing: "0.05em",
            mt: 1,
          }}
        >
          A completely transformed experience.
        </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "17px", sm: "55px" },
            right: { xs: "5px", sm: "40px" },
          }}
        >
          {/* Custom Button */}
          <ComponentShopiPhoneButton label="Shop now" />
        </Box>
      </Box>
      

  );
}

export default AirpodsVideoBanner;
