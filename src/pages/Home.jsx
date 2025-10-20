import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HomeLogoText from "../components/HomeLogoText";
import ContactUsButton from "../components/ComponentContactUsButton";
import ShopIphoneButton from "../components/ComponentShopIphoneButton";
import VideoFrame1 from "../components/HomeVideo1";
import HomeLineupSection from "../components/HomeLineupSection";
import HomeHeroImages from "../components/HomeHeroImages";
import HomeAppleWatchSection from "../components/HomeAppleWatchSection";
import HomeAirPodSection from "../components/HomeAirPodSection";
import HomeEssentialSection from "../components/HomeEssentialSection";
import HomeAbout from "../components/HomeAbout";
import Footer from "../components/ComponentFooter";

function Home() {
  return (
    <Box sx={{ textAlign: "center", mt: { xs: 0, sm: 4, md: 4 }, backgroundColor: "white" }}>
      <HomeLogoText />

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 3, mb: { xs: 2, sm: 10, md: 10 } }}
      >
        <ContactUsButton />
        <ShopIphoneButton />
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 3, mb: { xs: 0, sm: 4, md: 4 } }}
      >
        <VideoFrame1 />
      </Stack>
      <Box
        sx={{
          mt: { xs: 0, sm: 2, md: 2 },
          px: { xs: 2, sm: 4, md: 8 },
          minHeight: { xs: "10dvh", sm: "22dvh", md: "25dvh" },
          mx: "auto",
          maxWidth: { xs: "100%", sm: "80%", md: "70%" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mt: 2,
            fontFamily: "SFProDisplayBold, sans-serif",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          We specialize in Apple products bringing you the latest iPhones &
          premium accessories.
        </Typography>
      </Box>
      <Box>
        <HomeLineupSection />
      </Box>
      <Box>
        <HomeHeroImages />
      </Box>
      <Box>
        <HomeAppleWatchSection />
      </Box>
      <Box>
        <HomeAirPodSection />
      </Box>
      <Box>
        <HomeEssentialSection />
      </Box>
      <Box>
        <HomeAbout />
      </Box>
      <Box
        sx={{
          position: "relative",
          background: "white",

          py: 20,
          pb: { xs: 10, sm: 23, md: 25 },
          "&::before": {
            content: '""',
            position: "absolute",
            top: -300,
            left: 0,
            right: 0,
            zIndex: 11111111111111111111,
            height: "300px",
            background:
              "linear-gradient(to top, white 2%, rgba(255, 255, 255, 0) 100%)",
            pointerEvents: "none",
          },
        }}
      >
        <Box
          sx={{
            mt: 0,
            px: { xs: 2, sm: 4, md: 8 },
            minHeight: { xs: "10dvh", sm: "15dvh", md: "15dvh" },
            mx: "auto",
            maxWidth: { xs: "100%", sm: "80%", md: "70%" },
          }}
        >
          <Typography
            variant="h2"
            width={{ xs: "100%", sm: "80%", md: "55rem" }}
            sx={{
              pt: 10,
              py: 3,
              fontFamily: "SFProDisplayBold, sans-serif",
              fontSize: {
                xs: "1.2rem",
                sm: "2.5rem",
                md: "3rem",
                letterSpacing: "0.1rem",
                margin: "0 auto",
              },
            }}
          >
            Explore the latest iPhones, trusted accessories, and more all in one
            place
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <ContactUsButton />
          <ShopIphoneButton />
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
