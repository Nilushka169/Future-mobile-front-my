import React from "react";
import { Card, Typography, Button, Box } from "@mui/material";

function EssentialCard({ name, description, linkText, linkUrl, imageSrc }) {
  return (
    <Box>
      <Card
        sx={{
          borderRadius: "20px",
          textAlign: "center",
          gap: 2,
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          transition: "transform 0.3s ease",
          bgcolor: "#F5F5F7",
          width: { xs: "20rem", sm: "30rem", md: "40rem" },
          height: { xs: "20rem", sm: "25rem", md: "30rem" },
          "&:hover": {
            transform: "translateY(-5px)",
          },
        }}
      >
        <Box>
          <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontFamily: "SFProDisplayRegular, sans-serif", fontSize: { xs: "1.35rem", sm: "1.5rem", md: "2rem" },fontWeight: 700 }}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.primary" gutterBottom sx={{ width: "75%", margin: "0 auto", fontFamily: "SFProDisplayRegular, sans-serif", fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" } }}>
            {description}
          </Typography>
          <Button
            href={linkUrl}
            variant="text"
            sx={{ textTransform: "none", color: "primary.main", fontFamily: "SFProDisplayRegular, sans-serif", fontSize: { xs: "0.875rem", sm: "1.15rem", md: "1.2rem" } }}
          >
            {linkText} →
          </Button>
        </Box>
        <Box sx={{ width:{ xs: "20rem", sm: "30rem", md: "40rem" }, margin: "0 auto" }}>
        <Box
          component="img"
          src={imageSrc}
          alt={name}
          sx={{
            width: { xs: "100%", sm: "100%", md: "100%" },
            height: { xs: "10rem", sm: "18rem", md: "20rem" },
            objectFit: "contain",
          }}
        />
        </Box>
      </Card>
    </Box>
  );
}

export default EssentialCard;
