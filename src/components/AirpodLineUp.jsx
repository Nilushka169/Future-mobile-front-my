// src/components/AirPodLineUp.jsx
import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import PhoneSlider from "./ComponentCardSlider";
import { CiSearch, CiFilter } from "react-icons/ci";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export default function AirPodLineUp() {
  const [airpods, setAirpods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchAirpods() {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/accessories`, { signal });
        if (!res.ok) {
          console.error("Failed to fetch accessories:", res.status);
          setAirpods([]);
          setLoading(false);
          return;
        }

        const data = await res.json();
        if (!Array.isArray(data)) {
          setAirpods([]);
          setLoading(false);
          return;
        }

        const normalized = data.map((a) => ({
          id: a.id ?? a._id,
          name: a.name ?? "Unnamed",
          basePrice: Number(a.basePrice ?? a.price ?? 0),
          img: a.img ?? (Array.isArray(a.images) && a.images[0]) ?? "",
          category: a.category ?? "",
        }));

        const airpodsData = normalized.filter((item) => item.category === "AirPods");

        setAirpods(airpodsData);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("fetchAirpods error:", err);
          setAirpods([]);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchAirpods();
    return () => controller.abort();
  }, []);

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
          background:
            "linear-gradient(to top, white 10%, rgba(255, 255, 255, 0) 100%)",
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
          {loading ? (
            <Typography align="center" sx={{ py: 4 }}>
              Loading AirPods…
            </Typography>
          ) : airpods.length === 0 ? (
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
