import React from "react";
import { Box, Grid, Card, Typography } from "@mui/material";
import contact from "../assets/b67bfcfceb86cca8a0e9c5ed0476dac44840de00.png";
import email from "../assets/281600f24450ac41eaafd64f6f8f8de7f556784e.png";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const accessories = [
  {
    id: 1,
    name: "Contact",
    image: contact,
    title: "Quick Contact",
    icon: <PhoneIcon fontSize="medium" />,
    subtitle: "076 764 3206",
  },
  {
    id: 2,
    name: "Email",
    image: email,
    title: "Email",
    icon: <EmailIcon fontSize="medium" />,
    subtitle: "futuremobilehorana@gmail.com",
  },
];

const ContactBanner = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        px: { xs: 2, sm: 4, md: 6 },
        pt: { xs: 10, sm: 14, md: 18 },
        pb: { xs: 4, sm: 6, md: 8 },
        maxWidth: "1700px",
        mx: "auto",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "2.4rem", sm: "3.5rem", md: "4.2rem" },
          lineHeight: 1.15,
          fontFamily: "SFProDisplayBold",
          mb: { xs: 1.5, sm: 2 },
        }}
      >
        Contact Us
      </Typography>

      <Typography
        component="p"
        sx={{
          fontSize: { xs: "1rem", sm: "1.25rem" },
          color: "text.secondary",
          mb: { xs: 5, sm: 8, md: 10 },
          px: { xs: 1, sm: 4 },
        }}
      >
        Have questions or need assistance? We're here to help!
      </Typography>

      <Grid
        container
        spacing={{ xs: 1, sm: 3.5, md: 4 }}
        justifyContent="center"
      >
        {accessories.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card
              elevation={0}
              sx={{
                bgcolor: "#f5f5f7",
                borderRadius: 3,
                textAlign: "center",
                height: { xs: 165, sm: 380, md: 650 },
                width: { xs: 165, sm: 350, md: 620 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                p: { xs: 1, sm: 0 },
              }}
            >
              <Box>
                <Box
                  component="h2"
                  sx={{
                    fontSize: { xs: "1rem", sm: "2rem", md: "2.3rem" },
                    fontFamily: "SFProDisplayRegular",
                    mt: { xs: 1, sm: 2, md: 10},
                  }}
                >
                  {item.title}
                </Box>

                <Box
                  component="h3"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    fontSize: { xs: "0.7rem", sm: "1.1rem", md: "1.3rem" },
                    fontFamily: "SFProDisplayMedium",
                    color: "text.secondary",
                    letterSpacing: "0.02rem",
                    wordBreak: "break-word",
                  }}
                >
                  <Box sx={{ display: { xs: "none", sm: "inline-flex" } }}>
                    {item.icon}
                  </Box>
                  {item.subtitle}
                </Box>
              </Box>

              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: { xs: "60%", sm: "80%" },
                  maxWidth: 470,
                  mx: "auto",
                  display: "block",
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactBanner;
