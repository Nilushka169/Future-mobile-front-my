// src/components/EssentialChargingCables.jsx
import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import ComponentEssentialsCard from "./ComponentEssentialsProductCard";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export default function EssentialChargingCables() {
  const [cables, setCables] = useState([]);
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
          setCables([]);
          setLoading(false);
          return;
        }
        const data = await res.json();
        if (!Array.isArray(data)) {
          setCables([]);
          setLoading(false);
          return;
        }

        // Normalize each accessory to the shape the UI expects
        const normalized = data.map((a) => {
          const item = a && typeof a.toObject === "function" ? a.toObject() : a;
          return {
            id: item.id ?? item._id,
            infoId: item.infoId ?? item.info_id,
            name: item.name ?? "Unnamed Accessory",
            basePrice: Number(item.basePrice ?? item.price ?? 0),
            stock: typeof item.stock === "number" ? item.stock : item.stock ? Number(item.stock) : 0,
            category: item.category ?? "",
            tags: Array.isArray(item.tags) ? item.tags : [],
            img: item.img ?? (Array.isArray(item.images) && item.images[0]) ?? "",
            images: Array.isArray(item.images) ? item.images.slice(0, 5) : [],
            variants: Array.isArray(item.variants)
              ? item.variants.map((v) => ({
                  option: v.option,
                  price: Number(v.price ?? 0),
                  stock: typeof v.stock === "number" ? v.stock : v.stock ? Number(v.stock) : 0,
                }))
              : [],
          };
        });

        // Keep only Charging Cables
        const chargingCables = normalized.filter((n) => n.category === "Charging Cable");
        setCables(chargingCables);
      } catch (err) {
        if (err.name === "AbortError") return;
        console.error("fetchAccessories error:", err);
        setCables([]);
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
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "SFProDisplayRegular, sans-serif",
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", sm: "3.5rem" },
            }}
          >
            Charging Cables.
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
          {loading && cables.length === 0 ? (
            <Typography sx={{ gridColumn: "1/-1", textAlign: "center", p: 4 }}>
              Loading charging cables…
            </Typography>
          ) : !loading && cables.length === 0 ? (
            <Typography sx={{ gridColumn: "1/-1", textAlign: "center", p: 4 }}>
              No charging cables found.
            </Typography>
          ) : (
            cables.map((item) => (
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
