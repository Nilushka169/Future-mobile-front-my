import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function ProductCard({ id, name, basePrice, img, productData }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <Card
      // onClick={() => navigate(`/product/${id}`, { state: { productData } })}
      sx={{
        background: "transparent",
        boxShadow: "none",
        textAlign: "center",
        width: "100%",
        maxWidth: 400,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mx: "auto",
        px: isMobile ? 0.5 : 2,
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        image={img}
        alt={name}
        sx={{
          objectFit: "contain",
          height: isMobile ? 200 : 400,
          width: "100%",
          mb: isMobile ? 1 : 2,
        }}
      />

      <CardContent
        sx={{
          p: 0,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant={isMobile ? "subtitle1" : "h6"}
          fontWeight="bold"
          gutterBottom
          sx={{
            fontFamily: "SFProDisplayRegular, sans-serif",
            fontSize: isMobile ? "1rem" : "1.7rem",
            lineHeight: 2,
            height: isMobile ? "3.5rem" : "3rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            wordBreak: "break-word",
          }}
        >
          {name}
        </Typography>

        <Typography
          variant={isMobile ? "caption" : "body2"}
          color="text.secondary"
          gutterBottom
          sx={{
            fontSize: isMobile ? "0.85rem" : "1.3rem",
            minHeight: isMobile ? "1.2rem" : "1.5rem",
          }}
        >
          From Rs. {basePrice}.00
        </Typography>

        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          gap={isMobile ? 1 : 0}
          mt={isMobile ? 1 : 1}
          flexDirection={isMobile ? "column" : "row"}
        >
          <Button
            onClick={() => navigate(`/product/${id}`, { state: { productData, scrollTo: "description" } })}
            underline="none"
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
          <Button
            variant="contained"
            onClick={() => navigate(`/product/${id}`, { state: { productData, scrollTo: "top" } })}
            size={isMobile ? "small" : "medium"}
            sx={{
              fontFamily: "SFProDisplayRegular, sans-serif",
              fontSize: { xs: "0.75rem", sm: "1rem" },
              letterSpacing: "2px",
              bgcolor: "#0071e3",
              textTransform: "none",
              borderRadius: 20,
              width: isMobile ? "60%" : "5.5rem",
              "&:hover": {
                bgcolor: "#005bb5",
              },
            }}
          >
            Buy ›
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
