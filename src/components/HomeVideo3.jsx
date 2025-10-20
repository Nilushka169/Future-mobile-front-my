import * as React from "react";
import { Box, Container } from "@mui/material";
import clip from "../assets/larsge.mp4";

function HomeVideoFrame3() {
  return (
    <Box
      sx={{
        minHeight: { xs: "40dvh", sm: "60dvh", md: "90dvh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container sx={{ width: "100%", minWidth: "lg" }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: { xs: 5, sm: 8, md: 12 },
          }}
        >
          <Box
            component="video"
            src={clip}
            autoPlay
            muted
            loop
            playsInline
            tabIndex={-1}

            onContextMenu={(e) => e.preventDefault()}
            sx={{
              position: "absolute",
              inset: 0,
              margin: "auto",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
              display: "block",
              border: "none",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
export default HomeVideoFrame3;