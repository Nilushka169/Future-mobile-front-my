// src/components/EssentialPowerAdapters.jsx
import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import ComponentEssentialsCard from "./ComponentEssentialsProductCard";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export default function EssentialPowerAdapters() {
  const [adapters, setAdapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchAccessories() {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/accessories`, { signal });
        if (!res.ok) {
          console.error("Failed to fetch accessories:", res.status);
          setLoading(false);
          return;
        }
        const data = await res.json();
        if (!Array.isArray(data)) {
          setAdapters([]);
          setLoading(false);
          return;
        }

        const normalized = data.map((a) => ({
          id: a.id ?? a._id,
          infoId: a.infoId,
          name: a.name ?? "Unnamed Accessory",
          basePrice: Number(a.basePrice ?? 0),
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

        // Filter only Power Adapters
        setAdapters(normalized.filter((a) => a.category === "Power Adapter"));
      } catch (err) {
        if (err.name === "AbortError") return;
        console.error("fetchAccessories error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchAccessories();
    return () => controller.abort();
  }, []);

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
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "SFProDisplayRegular, sans-serif",
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", sm: "3.5rem" },
            }}
          >
            Power Adapters.
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
          {loading && adapters.length === 0 ? (
            <Typography sx={{ gridColumn: "1/-1", textAlign: "center", p: 4 }}>
              Loading adapters…
            </Typography>
          ) : !loading && adapters.length === 0 ? (
            <Typography sx={{ gridColumn: "1/-1", textAlign: "center", p: 4 }}>
              No adapters found.
            </Typography>
          ) : (
            adapters.map((item) => (
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
