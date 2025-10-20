import React from "react";
import { Routes, Route } from "react-router-dom";
import { Typography, Container } from "@mui/material";
import NavBar from "./components/ComponentNavBar";
import Home from "./pages/Home";
import Iphone from "./pages/Iphone";
import AirPods from "./pages/AirPods";
import Contact from "./pages/Contact";
import Essentials from "./pages/Essentials";
import ProductPage from "./pages/ProductPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ComponentScrollToTopButton from "./components/ComponentScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";


const theme = createTheme();

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <ComponentScrollToTopButton />
        <ScrollToTop />
      </ThemeProvider>
      <Container
        disableGutters
        maxWidth={false}
        sx={{ m: 0, p: 0, mt: 4, backgroundColor: "white" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/airpods" element={<AirPods />} />
          <Route path="/essentials" element={<Essentials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route
            path="*"
            element={<Typography variant="h4">404 Not Found</Typography>}
          />
        </Routes>
      </Container>
    </>
  );
}
