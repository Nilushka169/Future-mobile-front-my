import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ComponentProductCard";
import { Box } from "@mui/material";

function CardSlider({ phones, scrollable = true }) {
  const settings = scrollable
    ? {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 600,
        swipeToSlide: true,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1440,
            settings: { slidesToShow: 4 },
          },
          {
            breakpoint: 1200,
            settings: { slidesToShow: 3.5 },
          },
          {
            breakpoint: 900,
            settings: { slidesToShow: 2.5 },
          },
          {
            breakpoint: 600,
            settings: { slidesToShow: 2.5 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 2.5 },
          },
          {
            breakpoint: 480,
            settings: { slidesToShow: 2.5 },
          },
        ],
      }
    : {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 0,
        swipe: false,
        draggable: false,
        slidesToShow: phones.length,
        slidesToScroll: phones.length,
        centerMode: true,
        centerPadding: "0px",
      };

  return (
    <Box
      sx={{
        display: scrollable ? "block" : "grid",
        gridTemplateColumns: scrollable
          ? "unset"
          : {
              xs: "repeat(auto-fit, minmax(150px, 1fr))",
              sm: "repeat(auto-fit, minmax(300px, 1fr))",
            },
        gap: scrollable ? "unset" : { xs: "20px", sm: "70px", md: "100px" },
        "& .slick-slide": {
          padding: "0 0",
          boxSizing: "border-box",
        },
        "& .slick-list": {
          margin: "0 0",
        },
      }}
    >
      {scrollable ? (
        <Slider {...settings}>
          {phones.map((phone) => (
            <div key={phone.id}>
              <ProductCard {...phone} />
            </div>
          ))}
        </Slider>
      ) : (
        phones.map((phone) => <ProductCard key={phone.id} {...phone} />)
      )}
    </Box>
  );
}

export default CardSlider;
