import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Link, CircularProgress } from "@mui/material";
import PhoneSlider from "./ComponentCardSlider";

const API_URL = process.env.REACT_APP_API_URL;

function HomeLineupSection() {
const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchPhones() {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/phones`, { signal });
        if (!res.ok) {
          console.error("Failed to fetch phones:", res.status);
          setLoading(false);
          return;
        }
        const data = await res.json();
        if (!Array.isArray(data)) {
          setPhones([]);
          setLoading(false);
          return;
        }

        // Normalize items so UI works with either backend object or mongoose doc
        const normalized = data.map((p) => {
          const item = p && typeof p.toObject === "function" ? p.toObject() : p;
          return {
            id: item.id ?? item._id,
            infoId: item.infoId ?? item.info_id,
            status: item.status ?? "",
            name: item.name ?? item.title ?? "Unnamed",
            basePrice: Number(item.basePrice ?? item.price ?? 0),
            img: item.img ?? (Array.isArray(item.images) && item.images[0]) ?? "",
            images: Array.isArray(item.images) ? item.images.slice(0, 5) : item.images ? [item.images] : [],
            colors: Array.isArray(item.colors) ? item.colors : [],
            storages: Array.isArray(item.storages)
              ? item.storages.map((s) => ({
                  option: s.option,
                  price: Number(s.price ?? 0),
                  stock: typeof s.stock === "number" ? s.stock : s.stock ? Number(s.stock) : 0,
                }))
              : [],
            stock: typeof item.stock === "number" ? item.stock : item.stock ? Number(item.stock) : 0,
            isLatest: Boolean(item.isLatest),
          };
        });

        setPhones(normalized);
      } catch (err) {
        if (err.name === "AbortError") return;
        console.error("fetchPhones error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPhones();

    // cleanup
    return () => controller.abort();
  }, []);

  return (
    <Box sx={{ 
      bgcolor: "#F5F5F7", 
      py: 10, 
      mt: { xs: 6, md: 3 },
      width: '100%',
      overflow: 'hidden',
      minHeight: loading ? '400px' : 'auto'
    }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography
            variant="h4"
            sx={{ 
              fontFamily: "SFProDisplayRegular, sans-serif", 
              fontWeight: "bold",
              fontSize: { xs: '2rem', sm: '3.5rem' }
            }}
          >
            The Lineup.
          </Typography>
          <Link 
            href="/iphone" 
            underline="none" 
            sx={{ 
              color: "#0071e3", 
              fontWeight: 500,
              fontFamily: "SFProDisplayRegular, sans-serif",
              fontSize: { xs: '0.875rem', sm: '1.5rem' }
            }}
          >
            See all models ›
          </Link>
        </Box>
        
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" py={10}>
            <CircularProgress size={40} sx={{ color: "#0071e3" }} />
          </Box>
        ) : phones.length === 0 ? (
          <Box display="flex" justifyContent="center" alignItems="center" py={10}>
            <Typography color="text.secondary">
              No phones available at the moment.
            </Typography>
          </Box>
        ) : (
          <PhoneSlider phones={phones} />
        )}
      </Container>
    </Box>
  );
}

export default HomeLineupSection;