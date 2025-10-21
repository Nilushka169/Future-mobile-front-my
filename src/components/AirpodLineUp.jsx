// src/components/AirPodLineUp.jsx
import React, { useEffect, useState, useMemo } from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import PhoneSlider from "./ComponentCardSlider";
import { CiSearch, CiFilter } from "react-icons/ci";

// ⬇️ Import dummy accessories fallback (adjust the path if yours differs)
import { accessories as fallbackAccessories, API_URL as FALLBACK_API_URL } from "../data/accessories";

const API_URL = process.env.REACT_APP_API_URL || FALLBACK_API_URL || "http://localhost:5000/api";

export default function AirPodLineUp() {
  const [airpods, setAirpods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchAirpods() {
      try {
        setLoading(true);

        // Try backend first
        const res = await fetch(`${API_URL}/accessories`, { signal });

        if (!res.ok) {
          console.warn(`AirPodLineUp: backend responded ${res.status} — using dummy accessories`);
          setAirpods(mapAndFilterAirpods(fallbackAccessories));
          setLoading(false);
          return;
        }

        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) {
          console.warn("AirPodLineUp: backend returned no array — using dummy accessories");
          setAirpods(mapAndFilterAirpods(fallbackAccessories));
          setLoading(false);
          return;
        }

        // Normalize backend payload, then filter to AirPods
        const normalized = data.map((a) => ({
          id: a.id ?? a._id,
          name: a.name ?? "Unnamed",
          basePrice: Number(a.basePrice ?? a.price ?? 0),
          img: a.img ?? (Array.isArray(a.images) && a.images[0]) ?? "",
          category: a.category ?? "",
        }));
        setAirpods(normalized.filter((i) => i.category === "AirPods"));
      } catch (err) {
        if (err.name !== "AbortError") {
          console.warn("AirPodLineUp: fetch failed — using dummy accessories", err);
          setAirpods(mapAndFilterAirpods(fallbackAccessories));
        }
      } finally {
        setLoading(false);
      }
    }

    fetchAirpods();
    return () => controller.abort();
  }, []);

  // Helper to map dummy items to the shape PhoneSlider expects, filtered by category
  function mapAndFilterAirpods(list) {
    const safe = Array.isArray(list) ? list : [];
    return safe
      .filter((i) => i?.category === "AirPods")
      .map((a) => ({
        id: a.id ?? a._id,
        name: a.name ?? "Unnamed",
        basePrice: Number(a.basePrice ?? a.price ?? 0),
        img: a.img ?? (Array.isArray(a.images) && a.images[0]) ?? "",
        category: a.category ?? "",
      }));
  }

  const hasItems = useMemo(() => airpods.length > 0, [airpods]);

  return (
    <Box
      sx={{
        position: "relative",
        background: "white",
        "&::before": {
          content: '""',
          position: "absolute",
          top: -400,
          left: 0,
          right: 0,
          zIndex: 3,
          height: "400px",
          background: "linear-gradient(to top, white 10%, rgba(255, 255, 255, 0) 100%)",
          pointerEvents: "none",
        },
        py: 10,
        pb: { xs: 10, sm: 15, md: 20 },
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
            The Lineup.
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              fontSize: { xs: "2rem", sm: "3rem" },
              color: "#000000ff",
            }}
          >
            <CiSearch />
            <CiFilter />
          </Stack>
        </Box>

        <Box sx={{ pt: 3 }}>
          {loading && !hasItems ? (
            <Typography align="center" sx={{ py: 4 }}>
              Loading AirPods…
            </Typography>
          ) : !loading && !hasItems ? (
            <Typography align="center" sx={{ py: 4 }}>
              No AirPods available.
            </Typography>
          ) : (
            <PhoneSlider phones={airpods} scrollable={false} />
          )}
        </Box>
      </Container>
    </Box>
  );
}
