import React from "react";
import { Box, Grid, Card, Typography } from "@mui/material";
import charger from "../assets/4209d6a9338e30cb11bd8a918a091c6b1d84d486.png";
import cables from "../assets/90e161ffd9a32d27efd2ab6c040e72123cf7f4dc.png";
import backCover from "../assets/10da42ab3aa25a7aa518f068a663a519bbcf6457.png";

const accessories = [
  {
    id: 1,
    name: "Power Adapters",
    image: charger,
  },
  {
    id: 2,
    name: "Charging Cables",
    image: cables,
  },
  {
    id: 3,
    name: "Back Covers",
    image: backCover,
  },
];

const EssentialsAccessories = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: { xs: 15, sm: 20, md: 25 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "4rem", sm: "6rem", md: "7rem" },
          mb: 10,
          fontFamily: "SFProDisplayBold",
        }}
      >
        Accessories
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          maxWidth: "1200px",
          margin: { xs: "0 auto", sm: "0 auto", md: "0 auto" },
        }}
      >
        {accessories.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              elevation={0}
              sx={{
                bgcolor: "#F5F5F7",
                borderRadius: "20px",
                textAlign: "center",
                p: { xs: 1, sm: 2, md: 2 },
                height: "clamp(75px, 20vw, 300px)",
                width: "clamp(75px, 20vw, 300px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: "100%",
                  maxWidth: "80%",
                }}
              />
            </Card>
            <Typography
              variant="h6"
              sx={{
                fontSize: "clamp(0.5rem, 3.5vw, 2rem)",
                mt: 2,
                fontWeight: 600,
                fontFamily: "SFProDisplayRegular",
              }}
            >
              {item.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EssentialsAccessories;
