import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Divider, Box } from "@mui/material";
import ComponentProductDescription from "../components/ComponentProductDescription";
import { phones } from "../data/phones";
import { accessories } from "../data/accessories";
import HomeAbout from "../components/HomeAbout";
import ProductInformation from "../components/ComponentProductInformation";
import HomeLineupSection from "../components/HomeLineupSection";
import Footer from "../components/ComponentFooter";

export default function ProductPage() {
  const { id } = useParams();
  const location = useLocation();

  const { productData, scrollTo } = location.state || {};

  const numericId = parseInt(id, 10);
  const product =
    productData ||
    phones.find((p) => p.id === numericId) ||
    accessories.find((p) => p.id === numericId);

  useEffect(() => {
    if (scrollTo === "description") {
      const descEl = document.getElementById("product-info-section");
      if (descEl) {
        descEl.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [scrollTo]);

  if (!product) return <div>No product found.</div>;

  return (
    <Box
      sx={{
        mt: -5,
        pt: { xs: 6, sm: 15, md: 20 },
        bgcolor: "#f5f5f5",
      }}
    >
      <ComponentProductDescription product={product} />
      <Divider sx={{ mt: { xs: 2.5, md: 5 } }} />
      <HomeAbout showImage={false} />
      <Divider sx={{ mb: { xs: 2.5, md: 5 } }} />

      <div id="product-info-section">
        <ProductInformation productId={product.infoId} />
      </div>

      <Divider sx={{ my: { xs: 2.5, md: 5 } }} />
      <ComponentProductDescription product={product} />
      <Divider sx={{ my: { xs: 2.5, md: 2 } }} />
      <HomeLineupSection />
      <Divider />
      <Footer />
    </Box>
  );
}
