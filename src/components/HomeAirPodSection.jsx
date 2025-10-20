// src/components/HomeAirPodSection.jsx
import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import PhoneSlider from "./ComponentCardSlider";
import VideoFrame2 from "./HomeVideo3";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export default function HomeAirPodSection() {
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

        const airpodsData = normalized
          .filter((item) => item.category === "AirPods")
          .slice(0, 3);

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
        bgcolor: "#ffffffff",
        py: { xs: 8, sm: 15 },
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Section Heading */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "SFProDisplayRegular, sans-serif",
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", sm: "3.5rem" },
            }}
          >
            AirPods.
          </Typography>
          <Link
            href="/airpods"
            underline="none"
            sx={{
              color: "#0071e3",
              fontFamily: "SFProDisplayRegular, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "0.875rem", sm: "1.5rem" },
            }}
          >
            See all models ›
          </Link>
        </Box>

        {/* Video Section */}
        <Box>
          <VideoFrame2 />
        </Box>

        {/* Slider */}
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

        {/* Footer link */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
          <Link
            href="/airpods"
            underline="none"
            sx={{
              color: "#0071e3",
              fontFamily: "SFProDisplayRegular, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "0.875rem", sm: "1.5rem" },
            }}
          >
            See all models ›
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
