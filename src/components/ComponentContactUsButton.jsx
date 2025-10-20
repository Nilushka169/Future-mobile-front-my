import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ContactUsButton() {
  return (
    <Button
      component={Link}
      to="/contact"
      variant="outlined"
      sx={{
        textTransform: 'none',
        borderWidth: 1.5,
        borderRadius: '25px',
        px: 3,
        py: 1,
        borderColor: '#0071e3',
        color: '#0071e3',
        fontFamily: 'SFProDisplayRegular, sans-serif',
        fontSize: '1rem',
        zIndex: 1,
        '&:hover': {
          borderColor: '#005bb5',
          backgroundColor: 'transparent',
        },
      }}
    >
      Contact us
    </Button>
  );
}

export default ContactUsButton;
