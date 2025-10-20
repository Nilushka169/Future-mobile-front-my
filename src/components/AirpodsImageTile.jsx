import React from "react";
import { Box, Container, Typography } from "@mui/material";
import imageTile from "../assets/imageTile.png";

function AirpodsImageTile() {
  return (
    <Box
      sx={{
        bgcolor: "#ffffffff",
        py: { xs: 8, sm: 15 },
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mb={4}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "SFProDisplayRegular, sans-serif",
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "3.5rem" },
            }}
          >
            Take a closer look.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
            <Box component="img" src={imageTile} alt="Look closer" sx={{ width: { xs: "100%", sm: "100%" }, height: "auto" }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default AirpodsImageTile;
