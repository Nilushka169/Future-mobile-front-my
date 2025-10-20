import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";

const CardSliderImg = ({
  children,
  scrollable = true,
}) => {
  const total = React.Children.count(children);

  const scrollSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 3.1,
    slidesToScroll: 1,

  };

  const staticSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 0,
    swipe: false,
    draggable: false,
    slidesToShow: total,
    slidesToScroll: total,
  };

  return (
    <Box
      sx={{
        "& .slick-list": { overflow: "visible" },
        "& .slick-slide > div": {
          paddingLeft: { xs: 0, sm: 0, md: 0 },
          paddingRight: { xs: 0, sm: 0, md: 0 },
        },
        "& .slick-track": { display: "flex", alignItems: "stretch" },
      }}
    >
      <Slider {...(scrollable ? scrollSettings : staticSettings)}>
        {children}
      </Slider>
    </Box>
  );
};

export default CardSliderImg;
