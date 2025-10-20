import React, { useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MainVideo from "../assets/large_2x1.mp4";
import TopImg from "../assets/a51cfedf85afdadc7a2b1e56ba2e65cdef8521a5.jpg";
import BottomLeftImg from "../assets/1c8d5650a7c3f945967d69de72a170da979d3528.jpg";
import BottomRightImg from "../assets/98fb1a61dfbc3bdeaad633bce12872dc1757d67b.jpg";

const ImageTile = ({ title, image, isVideo = false }) => {
  return (
    <Card
      sx={{
        width: "100%",
        border: "none",
        borderRadius: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {image ? (
        <CardMedia
          component={isVideo ? "video" : "img"}
          image={!isVideo ? image : undefined}
          src={isVideo ? image : undefined}
          alt={title}
          autoPlay={isVideo ? true : undefined}
          loop={isVideo ? true : undefined}
          muted={isVideo ? true : undefined}
          playsInline={isVideo ? true : undefined}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#3b3333ff",
          }}
        >
          <Typography variant="body2" color="text.secondary" textAlign="center">
            {title}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            textAlign="center"
          >
            No media set
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

const IphoneImageTile = () => {
  const [media] = useState({
    main: MainVideo,
    top: TopImg,
    bottomLeft: BottomLeftImg,
    bottomRight: BottomRightImg,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      sx={{
        px: { xs: 2, md: 25 },
        mt: { xs: 1, sm: 5, md: 0 },
        backgroundColor: "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={1}
        alignItems="stretch"
        sx={{ width: "100%" }}
      >
        <ImageTile title="Main Video" image={media.main} isVideo={true} />

        <Stack spacing={2} sx={{ width: "100%" }}>
          <ImageTile title="Top Image" image={media.top} />

          <Stack direction="row" spacing={2}>
            <ImageTile title="Bottom Left" image={media.bottomLeft} />
            <ImageTile title="Bottom Right" image={media.bottomRight} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default IphoneImageTile;
