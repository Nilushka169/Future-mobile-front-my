import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ContactBanner from "../components/ContactBanner";
import MapCard from "../components/ContactMapCard";
import QuickInquiry from "../components/ContactQuickInquiry";
import Footer from "../components/ComponentFooter";
import HomeAbout from "../components/HomeAbout";
import ContactUsButton from "../components/ComponentContactUsButton";
import ShopIphoneButton from "../components/ComponentShopIphoneButton";
import { ContactStoryBanner } from "../components/ContactStoryBanner";

function Contact() {
  return (
    <div>
      <ContactBanner />
      <MapCard
        lat={6.726441532956719}
        lng={80.03363772158096}
        title="Visit us"
        address="No 99, Colombo Road, Pokunuvita, Horana, Sri Lanka"
        zoom={17}
        height={520}
        showNearby={true}
      />
      <QuickInquiry />
      <ContactStoryBanner />
      <HomeAbout />
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
              textAlign: "center",
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
    </div>
  );
}

export default Contact;
