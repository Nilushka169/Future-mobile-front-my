import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function GetToKnowCard({ img, subtitle, title, textColor = "#fff" }) {
  return (
    <Card
      sx={{
        width: { xs: 110, sm: 173, md: 360, lg: 372, '@media (min-width:700px)': { width: 200 }, '@media (min-width:800px)': { width: 235 }, '@media (min-width:1000px)': { width: 300 }, '@media (min-width:1150px)': { width: 350 }, '@media (min-width:1500px)': { width: 400 } },

        height: { xs: 220, sm: 350, md: 620, lg: 680, '@media (min-width:700px)': { height: 400 }, '@media (min-width:800px)': { height: 470 }, '@media (min-width:1000px)': { height: 600 }, '@media (min-width:1150px)': { height: 700 }, '@media (min-width:1500px)': { height: 800 } },
        borderRadius: { xs: 4, sm: 8, md: 8, lg: 8 },
        position: "relative",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
        mx: "auto",
      }}
    >
      <Box
        component="img"
        src={img}
        alt={title}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      <CardContent
        sx={{
          position: "relative",
          zIndex: 1,
          height: "93%",
          width: "87%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: textColor,
          p: { xs: 1, sm: 2, md: 4 },
        }}
      >
        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
              fontFamily: "SFProDisplayRegular",
              opacity: 0.8,
              textAlign: "left",
              color: textColor,
            }}
          >
            {subtitle}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "0.9rem", sm: "1.3rem", md: "1.6rem", lg: "2rem" },
              fontFamily: "SFProDisplayBold",
              mt: 1,
              textAlign: "left",
              color: textColor,
            }}
          >
            {title}
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            alignSelf: "flex-end",
            width: { xs: 28, sm: 34, md: 38, lg: 40 },
            height: { xs: 28, sm: 34, md: 38, lg: 40 },
            minWidth: 0,
            borderRadius: "50%",
            bgcolor: "rgba(51, 51, 54, 1)",
            p: 0,
          }}
        >
          <AddIcon sx={{ color: "#ffffffff", fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem", lg: "1.5rem" } }} />
        </Button>
      </CardContent>
    </Card>
  );
}

export default GetToKnowCard;
