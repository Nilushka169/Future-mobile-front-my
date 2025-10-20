import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";
import EssentialCard from "./ComponentEssentialCard";
import backcovers from "../assets/ae2744a600331ae25ffffd38f3d89bd006483359.png";
import airpods from "../assets/65ff6356f51198d31ced52e0495691b215550f51.png";
import chargers from "../assets/4209d6a9338e30cb11bd8a918a091c6b1d84d486.png";
import magsafe from "../assets/8772ffc917874020cc97003d31cb2cb243e97ab2.png";

function HomeEssentialSection() {
  const details = [
    {
      description:
        "Keep your iPhone safe with covers designed to fit perfectly and look even better.",
      linkText: "Shop back covers",
      linkUrl: "/essentials",
      imageSrc: backcovers,
    },
    {
      description:
        "Experience effortless wireless audio with AirPods that just work everywhere.",
      linkText: "Shop AirPods",
      linkUrl: "/airpods",
      imageSrc: airpods,
    },
    {
      description:
        "Power up your iPhone with certified chargers built for performance and safety.",
      linkText: "Shop chargers",
      linkUrl: "/essentials",
      imageSrc: chargers,
    },
    {
      description:
        "Enjoy effortless wireless charging with perfect magnetic alignment every time.",
      linkText: "Shop MagSafe",
      linkUrl: "/essentials",
      imageSrc: magsafe,
    },
  ];

  return (
    <Box sx={{ bgcolor: "#fff", py: 10, width: "100%" }}>
      <Container maxWidth="xl">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={6}
          flexWrap="wrap"
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }}
          >
            Essentials.
          </Typography>
          <Link
            href="/essentials"
            underline="none"
            sx={{
              color: "#0071e3",
              fontSize: { xs: "0.875rem", sm: "1.2rem", md: "1.5rem" },
              fontFamily: "SFProDisplayRegular, sans-serif",
            }}
          >
            See all Essentials ›
          </Link>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {details.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <EssentialCard {...product} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
          <Link
            href="/essentials"
            underline="none"
            sx={{
              color: "#0071e3",
              fontSize: { xs: "0.875rem", sm: "1.25rem", md: "1.5rem" },
            }}
          >
            See all Essentials ›
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default HomeEssentialSection;
