import React from "react";
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ComponentEssentialsProductCard = ({
  id,
  name,
  basePrice,
  image,
  type,
  productData,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F7",
        borderRadius: "20px",
        minWidth: { xs: "150px", sm: "330px", md: "350px" },
        textAlign: "center",
        maxWidth: 300,
        p: 1,
        pb: 3,
        m: 1,
      }}
    >
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{ width: "100%", maxWidth: 250, mb: 2 }}
      />

      <Typography
        variant="h6"
        sx={{
          fontFamily: "SFProDisplayRegular, sans-serif",
          fontWeight: "bold",
          fontSize: { xs: "1.1rem", sm: "1.5rem", md: "2rem" },
          minHeight: "6rem",
        }}
      >
        {name}
      </Typography>

      <Typography sx={{ color: "text.secondary" }}>
        From Rs. {basePrice}.00
      </Typography>

      <Typography
        sx={{
          color: "text.secondary",
          my: 1,
          fontSize: { xs: "0.9rem", sm: "1rem" },
        }}
      >
        {type}
      </Typography>

      <Box
        display="flex"
        justifyContent={{
          xs: "center",
          sm: "center",
          md: "space-around",
        }}
        alignItems="center"
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        gap={{ xs: 1.5, sm: 0 }}
      >
        {/* Learn more → scroll to description */}
        <Button
          onClick={() =>
            navigate(`/product/${id}`, {
              state: { productData, scrollTo: "description" },
            })
          }
          sx={{
            color: "#0071e3",
            fontFamily: "SFProDisplayRegular, sans-serif",
            fontWeight: 500,
            fontSize: { xs: "0.75rem", sm: "1.2rem" },
            mt: isMobile ? 1 : 0,
            whiteSpace: "nowrap",
            textTransform: "none",
            borderRadius: 20,
          }}
        >
          Learn more
        </Button>

        {/* Buy → scroll to top */}
        <Button
          variant="contained"
          onClick={() =>
            navigate(`/product/${id}`, {
              state: { productData, scrollTo: "top" },
            })
          }
          sx={{
            fontFamily: "SFProDisplayRegular, sans-serif",
            fontSize: { xs: "0.75rem", sm: "1rem" },
            letterSpacing: "2px",
            bgcolor: "#0071e3",
            textTransform: "none",
            borderRadius: 20,
            width: isMobile ? "60%" : "5.5rem",
            "&:hover": { bgcolor: "#005bb5" },
          }}
        >
          Buy ›
        </Button>
      </Box>
    </Box>
  );
};

export default ComponentEssentialsProductCard;
