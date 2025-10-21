// src/components/EssentialBackCovers.jsx
import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import ComponentEssentialsCard from "./ComponentEssentialsProductCard";

// ⬇️ Import dummy accessories fallback (adjust path if needed)
import { accessories as fallbackAccessories, API_URL as FALLBACK_API_URL } from "../data/accessories";

const API_URL = process.env.REACT_APP_API_URL || FALLBACK_API_URL || "http://localhost:5000/api";

export default function EssentialBackCovers() {
  const [covers, setCovers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchAccessories() {
      try {
        setLoading(true);

        // Try backend first
        const res = await fetch(`${API_URL}/accessories`, { signal });

        if (!res.ok) {
          console.warn(`EssentialBackCovers: backend responded ${res.status} — using dummy accessories`);
          setCovers(mapAndFilterCovers(fallbackAccessories));
          setLoading(false);
          return;
        }

        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) {
          console.warn("EssentialBackCovers: backend returned no array — using dummy accessories");
          setCovers(mapAndFilterCovers(fallbackAccessories));
          setLoading(false);
          return;
        }

        // Normalize backend payload then filter to Back Cover
        const normalized = data.map((a) => ({
          id: a.id ?? a._id,
          infoId: a.infoId,
          name: a.name ?? "Unnamed Accessory",
          basePrice: Number(a.basePrice ?? a.price ?? 0),
          stock: typeof a.stock === "number" ? a.stock : Number(a.stock ?? 0),
          category: a.category ?? "",
          tags: Array.isArray(a.tags) ? a.tags : [],
          img: a.img ?? (Array.isArray(a.images) && a.images[0]) ?? "",
          images: Array.isArray(a.images) ? a.images.slice(0, 5) : [],
          variants: Array.isArray(a.variants)
            ? a.variants.map((v) => ({
                option: v.option,
                price: Number(v.price ?? 0),
              }))
            : [],
        }));

        setCovers(normalized.filter((a) => a.category === "Back Cover"));
      } catch (err) {
        if (err.name !== "AbortError") {
          console.warn("EssentialBackCovers: fetch failed — using dummy accessories", err);
          setCovers(mapAndFilterCovers(fallbackAccessories));
        }
      } finally {
        setLoading(false);
      }
    }

    fetchAccessories();
    return () => controller.abort();
  }, []);

  // Map dummy items to same shape; then filter to Back Cover
  function mapAndFilterCovers(list) {
    const safe = Array.isArray(list) ? list : [];
    return safe
      .filter((a) => a?.category === "Back Cover")
      .map((a) => ({
        id: a.id ?? a._id,
        infoId: a.infoId,
        name: a.name ?? "Unnamed Accessory",
        basePrice: Number(a.basePrice ?? a.price ?? 0),
        stock: typeof a.stock === "number" ? a.stock : Number(a.stock ?? 0),
        category: a.category ?? "",
        tags: Array.isArray(a.tags) ? a.tags : [],
        img: a.img ?? (Array.isArray(a.images) && a.images[0]) ?? "",
        images: Array.isArray(a.images) ? a.images.slice(0, 5) : [],
        variants: Array.isArray(a.variants)
          ? a.variants.map((v) => ({
              option: v.option,
              price: Number(v.price ?? 0),
            }))
          : [],
      }));
  }

  return (
    <Box
      sx={{
        bgcolor: "#ffffffff",
        py: { xs: 8, sm: 15 },
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "SFProDisplayRegular, sans-serif",
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", sm: "3.5rem" },
            }}
          >
            Back Covers.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 0, sm: 4, md: 6 },
            justifyItems: "center",
          }}
        >
          {loading && covers.length === 0 ? (
            <Typography sx={{ gridColumn: "1/-1", textAlign: "center", p: 4 }}>
              Loading back covers…
            </Typography>
          ) : !loading && covers.length === 0 ? (
            <Typography sx={{ gridColumn: "1/-1", textAlign: "center", p: 4 }}>
              No back covers found.
            </Typography>
          ) : (
            covers.map((item) => (
              <ComponentEssentialsCard
                key={item.id}
                id={item.id}
                name={item.name}
                basePrice={item.basePrice}
                image={item.img}
                type={item.tags?.[0]}
                productData={item}
              />
            ))
          )}
        </Box>
      </Container>
    </Box>
  );
}
