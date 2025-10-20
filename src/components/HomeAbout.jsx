import React from "react";
import { Grid, Container, Box } from "@mui/material";
import HomeAboutCard from "./HomeAboutCard";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import phone from "../assets/216649f38b5c964f8698ee229acb78b4c15bc2cd.png";

function HomeAbout({ showImage = true }) {
  const cardData = [
    {
      icon: <LocalShippingOutlinedIcon fontSize="inherit" />,
      title: "Island wide delivery",
      description:
        "Free delivery on orders over LKR 50,000, islandwide coverage.",
    },
    {
      icon: <HeadsetMicOutlinedIcon fontSize="inherit" />,
      title: "Customer Support",
      description: "Expert Apple advice, available 24/7 for all your needs.",
    },
    {
      icon: <UndoOutlinedIcon fontSize="inherit" />,
      title: "Easy Returns",
      description: "Hassle-free returns within 7 days for a smooth experience.",
    },
    {
      icon: <CreditCardOutlinedIcon fontSize="inherit" />,
      title: "Payment Options",
      description:
        "Secure, encrypted payment for a worry-free, seamless shopping experience.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F7",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container maxWidth={false} sx={{ py: { xs: 5, sm: 15, md: 20 } }}>
        <Grid container spacing={3} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <HomeAboutCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      {showImage && ( 
        <Box
          component="img"
          src={phone}
          alt="Description of the image"
          sx={{ width: { xs: "20rem", sm: "35rem", md: "40rem" } }}
        />
      )}
    </Box>
  );
}

export default HomeAbout;
