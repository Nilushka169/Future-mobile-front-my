// src/components/HomeAppleWatchSection.jsx
import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import PhoneSlider from "./ComponentCardSlider";
import VideoFrame2 from "./HomeVideo2";

// ⬇️ Import dummy accessories fallback (update the path if yours differs)
import { accessories as fallbackAccessories, API_URL as FALLBACK_API_URL } from "../data/accessories";

const API_URL = process.env.REACT_APP_API_URL || FALLBACK_API_URL || "http://localhost:5000/api";

export default function HomeAppleWatchSection() {
  const [watches, setWatches] = useState([]);
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
          console.warn(`HomeAppleWatchSection: backend responded ${res.status} — using dummy accessories`);
          setWatches(mapAndPickWatches(fallbackAccessories));
          setLoading(false);
          return;
        }

        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) {
          console.warn("HomeAppleWatchSection: backend returned no array — using dummy accessories");
          setWatches(mapAndPickWatches(fallbackAccessories));
          setLoading(false);
          return;
        }

        // Normalize backend payload, then filter & take first 3 Apple Watch items
        const normalized = data.map((a) => ({
          id: a.id ?? a._id,
          name: a.name ?? "Unnamed",
          basePrice: Number(a.basePrice ?? a.price ?? 0),
          img: a.img ?? (Array.isArray(a.images) && a.images[0]) ?? "",
          category: a.category ?? "",
        }));

        setWatches(normalized.filter((i) => i.category === "Apple Watch").slice(0, 3));
      } catch (err) {
        if (err.name !== "AbortError") {
          console.warn("HomeAppleWatchSection: fetch failed — using dummy accessories", err);
          setWatches(mapAndPickWatches(fallbackAccessories));
        }
      } finally {
        setLoading(false);
      }
    }

    fetchAccessories();
    return () => controller.abort();
  }, []);

  // Helper: map dummy items to slider shape, filter to Apple Watch, take first 3
  function mapAndPickWatches(list) {
    const safe = Array.isArray(list) ? list : [];
    return safe
      .filter((i) => i?.category === "Apple Watch")
      .slice(0, 3)
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
        bgcolor: "#F5F5F7",
        py: { xs: 0, sm: 10 },
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
            Apple Watch.
          </Typography>
        </Box>

        {/* Video Section */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 3, mb: { xs: 0, sm: 4, md: 4 } }}
        >
          <VideoFrame2 />
        </Stack>

        {/* Watches Slider */}
        <Box sx={{ pt: 5 }}>
          {loading ? (
            <Typography align="center" sx={{ py: 4 }}>
              Loading Apple Watches…
            </Typography>
          ) : watches.length === 0 ? (
            <Typography align="center" sx={{ py: 4 }}>
              No Apple Watches available.
            </Typography>
          ) : (
            <PhoneSlider phones={watches} scrollable={false} />
          )}
        </Box>
      </Container>
    </Box>
  );
}
