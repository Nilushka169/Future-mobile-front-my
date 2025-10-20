// src/components/AirpodsEarPods.jsx
import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import PhoneSlider from "./ComponentCardSlider";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export default function AirpodsEarPods() {
  const [earpods, setEarpods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchEarpods() {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/accessories`, { signal });
        if (!res.ok) {
          console.error("Failed to fetch accessories:", res.status);
          setEarpods([]);
          setLoading(false);
          return;
        }

        const data = await res.json();
        if (!Array.isArray(data)) {
          setEarpods([]);
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

        const earpodsData = normalized.filter((item) => item.category === "EarPods");

        setEarpods(earpodsData);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("fetchEarpods error:", err);
          setEarpods([]);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchEarpods();
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
