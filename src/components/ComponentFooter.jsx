import React from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Link as MLink,
  Divider,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import CustomLogo from "../assets/CustomLogo";

const nav = {
  iphone: [
    "All iPhone",
    "iPhone 16 Pro",
    "iPhone 16",
    "iPhone 15",
    "iPhone 14",
    "iPhone 13",
  ],
  airpods: ["All AirPods", "AirPods 4", "AirPods Pro", "AirPods Max"],
  essentials: [
    "All Essentials",
    "Back covers",
    "Chargers",
    "Protection glasses",
    "Cables",
  ],
};

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#F5F5F7", color: "#000" }}>
      <Box
        sx={{
          px: { xs: 2.5, sm: 6, md: 10 },
          py: { xs: 4, md: 6 },
          fontFamily: "SFProDisplayRegular",
          maxWidth: 1440,
          mx: "auto",
        }}
      >
        <Grid
          container
          spacing={{ xs: 3, md: 6 }}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={5.5}>
            <Stack direction="row" spacing={1.2} alignItems="center">
              <CustomLogo />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2rem", md: "3rem" },
                  lineHeight: 1.1,
                }}
              >
                Future Mobile
              </Typography>
            </Stack>

            <Typography
              sx={{
                mt: 2,
                maxWidth: 520,
                lineHeight: 1.5,
                fontSize: { xs: 14, md: 16 },
                textAlign: "left",
                color: "#000",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Typography>

            <Stack spacing={1} mt={3}>
              <Stack direction="row" spacing={1.25} alignItems="center">
                <EmailOutlinedIcon fontSize="small" />
                <MLink
                  href="mailto:futuremobile@abc.com"
                  underline="hover"
                  color="inherit"
                  sx={{ fontSize: { xs: 14, md: 16 } }}
                >
                  futuremobile@abc.com
                </MLink>
              </Stack>
              <Stack direction="row" spacing={1.25} alignItems="center">
                <LocalPhoneOutlinedIcon fontSize="small" />
                <MLink
                  href="tel:+941234567890"
                  underline="hover"
                  color="inherit"
                  sx={{ fontSize: { xs: 14, md: 16 } }}
                >
                  +94 123 456 7890
                </MLink>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6.5}>
            <Grid container spacing={{ xs: 2, md: 4 }}>
              <Grid item xs={12} sm={4}>
                <Typography
                  sx={{
                    color: "#757575",
                    fontSize: { xs: 13, md: 14 },
                    mb: 1,
                    textAlign: "left",
                  }}
                >
                  Shop iPhone
                </Typography>
                <NavList items={nav.iphone} basePath="/iphone" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  sx={{
                    color: "#757575",
                    fontSize: { xs: 13, md: 14 },
                    mb: 1,
                    textAlign: "left",
                  }}
                >
                  Shop AirPods
                </Typography>
                <NavList items={nav.airpods} basePath="/airpods" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  sx={{
                    color: "#757575",
                    fontSize: { xs: 13, md: 14 },
                    mb: 1,
                    textAlign: "left",
                  }}
                >
                  Essentials
                </Typography>
                <NavList items={nav.essentials} basePath="/essentials" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Divider
        sx={{ borderColor: "rgba(0,0,0,0.3)", mx: { xs: 2.5, sm: 6, md: 10 } }}
      />

      <Box
        sx={{
          px: { xs: 2.5, sm: 6, md: 10 },
          py: { xs: 2.5, md: 3 },
          maxWidth: 1440,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: { xs: 1, md: 0 },
        }}
      >
        <Box width="100%">
          <Stack
            direction="row"
            spacing={3}
            sx={{
              order: { xs: 2, md: 1 },
              flex: { xs: "1 1 100%", md: "0 0 auto" },
              justifyContent: "center",
            }}
          >
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(
              (t) => (
                <MLink
                  key={t}
                  underline="hover"
                  color="inherit"
                  sx={{ fontSize: { xs: 12, md: 13 } }}
                >
                  {t}
                </MLink>
              )
            )}
          </Stack>
        </Box>
        <Box width="100%">
          <Typography
            sx={{
              mx: "auto",
              order: { xs: 1, md: 2 },
              fontWeight: 600,
              fontSize: { xs: 12, md: 14 },
              textAlign: "center",
              width: { xs: "100%", md: "auto" },
            }}
          >
            Design & Developed by MetaZync
          </Typography>
        </Box>
        <Box width="100%">
          <Typography
            sx={{
              mx: "auto",
              order: { xs: 3, md: 3 },
              fontSize: { xs: 12, md: 13 },
              color: "#000",
            }}
          >
            © {new Date().getFullYear()} All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

function NavList({ items, basePath }) {
  return (
    <Stack spacing={0.5}>
      {items.map((label, idx) => (
        <MLink
          key={label}
          href={basePath}
          color="inherit"
          underline="none"
          sx={{
            fontSize: { xs: 14, md: 16 },
            fontWeight: idx === 0 ? 600 : 400,
            textAlign: "left",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {label}
        </MLink>
      ))}
    </Stack>
  );
}


export default Footer;
