import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CardSlider from "./ComponentCardSliderImg";
import GetToKnowCard from "./ComponentGetToKnowCard";
import one from "../assets/ImgSlider/5e0f4e5010ef06d5c1b897b806c3e22877dafd33.jpg";
import two from "../assets/ImgSlider/7db8200d2737aee3b01e59844b45c665b24ad107.jpg";
import three from "../assets/ImgSlider/0b877e3e01526262e55ad8fc6a929f3cd7113aeb.jpg";
import four from "../assets/ImgSlider/778736c022daa855cdeaed6e1d5b809ff35b8b77.jpg";
import five from "../assets/ImgSlider/955ed0ada53b538c79c0bc42b58c606581503ae3.jpg";
import six from "../assets/ImgSlider/a8f8dbc7bed6e9b67e421603d4bb003d0aa28a1a.jpg";
import seven from "../assets/ImgSlider/0a6f3cf6020c984f65eb8dfcd91f61c53fa44910.jpg";
import eight from "../assets/ImgSlider/4c745626c72a159acfe2b88fde6ec24eca968ac3.jpg";

const cards = [
  { id: 1, img: one, subtitle: "Apple Intelligence", title: "AI-opening possibilities." },
  { id: 2, img: two, subtitle: "Cutting-Edge Cameras", title: "Picture your best photos and videos." },
  { id: 3, img: three, subtitle: "Chip and Battery Life", title: "Fast that lasts." },
  { id: 4, img: four, subtitle: "Innovation", title: "Beautiful and durable, by design." },
  { id: 5, img: five, subtitle: "Environment", title: "Recycle. Reuse. Repeat." },
  { id: 6, img: six, subtitle: "Privacy", title: "Your data. Just where you want it." },
  { id: 7, img: seven, subtitle: "Customize Your iPhone", title: "Make it you. Through and through" },
  { id: 8, img: eight, subtitle: "Peace of Mind", title: "Helpful safety features.Just in case." },
];

function IPhoneGetToKnow() {
  return (
    <Box
      sx={{
        py: { xs: 2, sm: 3, md: 5 },
        mt: { xs: 4, sm: 5, md: 0 },
        mb: { xs: 2, sm: 3, md: 6 },
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={{ xs: 2, sm: 3, md: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "SFProDisplayRegular, sans-serif",
              fontWeight: "bold",
              fontSize: { xs: "1.3rem", sm: "2rem", md: "3rem", lg: "3.5rem" },
            }}
          >
            Get to know iPhone.
          </Typography>
        </Box>

        <CardSlider>
          {cards.map((card, index) => (
            <GetToKnowCard
              key={card.id}
              img={card.img}
              subtitle={card.subtitle}
              title={card.title}
              textColor={index === 3 || index === 4 ? "#000000ff" : "#ffffffff"}
            />
          ))}
        </CardSlider>
      </Container>
    </Box>
  );
}

export default IPhoneGetToKnow;
