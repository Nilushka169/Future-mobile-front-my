// src/components/AirpodsEarPods.jsx
import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import PhoneSlider from "./ComponentCardSlider";

// ⬇️ Import the dummy accessories fallback
// Adjust the path according to your project structure
import { accessories as fallbackAccessories, API_URL as FALLBACK_API_URL } from "../data/accessories";

const API_URL = process.env.REACT_APP_API_URL || FALLBACK_API_URL || "http://localhost:5000/api";

export default function AirpodsEarPods() {
  const [earpods, setEarpods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchEarpods() {
      try {
        setLoading(true);

        // Try backend first
        const res = await fetch(`${API_URL}/accessories`, { signal });

        if (!res.ok) {
          console.warn(`AirpodsEarPods: backend responded ${res.status} — using dummy data`);
          setEarpods(mapAndFilterEarpods(fallbackAccessories));
          setLoading(false);
          return;
        }

        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) {
          console.warn("AirpodsEarPods: backend returned no array — using dummy data");
          setEarpods(mapAndFilterEarpods(fallbackAccessories));
          setLoading(false);
          return;
        }

        // Normalize backend data
        const normalized = data.map((a) => ({
          id: a.id ?? a._id,
          name: a.name ?? "Unnamed",
          basePrice: Number(a.basePrice ?? a.price ?? 0),
          img: a.img ?? (Array.isArray(a.images) && a.images[0]) ?? "",
          category: a.category ?? "",
        }));

        setEarpods(normalized.filter((item) => item.category === "EarPods"));
      } catch (err) {
        if (err.name !== "AbortError") {
          console.warn("AirpodsEarPods: fetch failed — using dummy data", err);
          setEarpods(mapAndFilterEarpods(fallbackAccessories));
        }
      } finally {
        setLoading(false);
      }
    }

    fetchEarpods();
    return () => controller.abort();
  }, []);

  function mapAndFilterEarpods(list) {
    const safe = Array.isArray(list) ? list : [];
    return safe
      .filter((i) => i?.category === "EarPods")
      .map((a) => ({
        id: a.id ?? a._id,
        name: a.name ?? "Unnamed",
        basePrice: Number(a.basePrice ?? a.price ?? 0),
        img: a.img ?? (Array.isArray(a.images) && a.images[0]) ?? "",
        category: a.category ?? "",
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
              fontSize: { xs: "2rem", sm: "3.5rem" },
            }}
          >
            EarPods.
          </Typography>
        </Box>

        <Box sx={{ pt: 3 }}>
          {loading ? (
            <Typography align="center" sx={{ py: 4 }}>
              Loading EarPods…
            </Typography>
          ) : earpods.length === 0 ? (
            <Typography align="center" sx={{ py: 4 }}>
              No EarPods available.
            </Typography>
          ) : (
            <PhoneSlider phones={earpods} scrollable={false} />
          )}
        </Box>
      </Container>
    </Box>
  );
}
