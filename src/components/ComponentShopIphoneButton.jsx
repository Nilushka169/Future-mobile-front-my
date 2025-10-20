import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function ShopIphoneButton() {
  return (
    <Button
      component={Link}
      to="/iphone"
      variant="contained"
      sx={{
        textTransform: 'none',
        borderWidth: 1.5,
        borderRadius: '25px',
        px: 3,
        py: 1,
        borderColor: '#0071e3',
        color: '#ffffff',
        fontFamily: 'SFProDisplayRegular, sans-serif',
        fontSize: '1rem',
        zIndex: 1,
      }}
    >
      Shop iPhone
    </Button>
  );
}

export default ShopIphoneButton;
