import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

function HomeAboutCard({ icon, title, description }) {
  return (
    <Box>
    <Card
      sx={{
        borderRadius: "20px",
        textAlign: "center",
        p: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <Box sx={{ fontSize: "2.5rem", color: "#0071e3", pt: 3 }}>
        {icon}
      </Box>
      <CardContent sx={{ flexGrow: 1, height: { xs: "7rem", sm: "12rem", md: "12rem" }, width: "18rem" }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontFamily: "SFProDisplayRegular, sans-serif", fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" }, width: { xs: "100%", sm: "8rem", md: "10rem" }, margin: "0 auto", pb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.primary" sx={{ fontFamily: "SFProDisplayRegular, sans-serif", fontSize: { xs: "1rem", sm: "1.1rem", md: "1.15rem" }, width: { xs: "100%", sm: "15rem", md: "15rem" }, margin: "0 auto" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
    </Box>
  );
}

export default HomeAboutCard;
