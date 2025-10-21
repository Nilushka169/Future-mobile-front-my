// src/components/IPhoneAlliPhones.jsx
import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// ⬇️ Import the dummy phones you created.
//    Adjust the relative path to wherever you saved the phones file (e.g., src/data/phones.jsx or src/phones.jsx)
import { phones as fallbackPhones } from "../data/phones"; // ← update path if needed

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export default function IPhoneAlliPhones() {
  const navigate = useNavigate();
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchPhones() {
      try {
        setLoading(true);

        // Try backend first
        const res = await fetch(`${API_URL}/phones`, { signal });

        // If backend is down or not OK -> use dummy data
        if (!res.ok) {
          console.warn(`IPhoneAlliPhones: backend responded ${res.status} — using dummy phones`);
          setPhones(fallbackPhones); // already normalized for your UI
          setLoading(false);
          return;
        }

        const data = await res.json();

        // If backend returns nothing useful -> use dummy data
        if (!Array.isArray(data) || data.length === 0) {
          console.warn("IPhoneAlliPhones: backend returned no array — using dummy phones");
          setPhones(fallbackPhones);
          setLoading(false);
          return;
        }

        // Normalize backend data to match your UI shape
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
        console.warn("IPhoneAlliPhones: fetch failed — using dummy phones", err);
        setPhones(fallbackPhones); // fall back on any fetch error
      } finally {
        setLoading(false);
      }
    }

    fetchPhones();

    return () => controller.abort();
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        py: { xs: 0, sm: 15 },
        width: "100%",
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
            All iPhones.
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
            alignItems: "center",
          }}
        >
          {loading && phones.length === 0 ? (
            <Typography sx={{ gridColumn: "1/-1", textAlign: "center", p: 4 }}>
              Loading phones…
            </Typography>
          ) : phones.length === 0 ? (
            <Typography sx={{ gridColumn: "1/-1", textAlign: "center", p: 4 }}>
              No phones found.
            </Typography>
          ) : (
            phones.map((phone) => (
              <Box key={phone.id ?? phone._id} sx={{ textAlign: "center", maxWidth: 350, p: 2 }}>
                <Box
                  component="img"
                  src={phone.img || ""}
                  alt={phone.name}
                  sx={{ width: "100%", maxWidth: 350, mb: 2, objectFit: "contain" }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "SFProDisplayRegular, sans-serif",
                    fontWeight: "bold",
                    fontSize: { xs: "1.1rem", sm: "1.5rem", md: "2rem" },
                    minHeight: "6rem",
                  }}
                >
                  {phone.name}
                </Typography>

                <Typography sx={{ color: "text.secondary" }}>
                  From Rs. {Number(phone.basePrice || 0).toLocaleString("en-LK")}.00
                </Typography>

                <Typography sx={{ color: "text.secondary", my: 1, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                  {phone.status}
                </Typography>

                <Box
                  display="flex"
                  justifyContent={{ xs: "center", sm: "center", md: "space-around" }}
                  alignItems="center"
                  flexDirection={{ xs: "column", sm: "column", md: "row" }}
                  gap={{ xs: 1.5, sm: 0 }}
                >
                  <Button
                    onClick={() =>
                      navigate(`/product/${phone.id}`, {
                        state: { productData: phone, scrollTo: "description" },
                      })
                    }
                    sx={{
                      color: "#0071e3",
                      fontWeight: 500,
                      fontSize: { sm: "0.75rem", md: "1.2rem" },
                      whiteSpace: "nowrap",
                      textTransform: "none",
                      fontFamily: "SFProDisplayRegular, sans-serif",
                      letterSpacing: "1px",
                    }}
                  >
                    Learn more
                  </Button>

                  <Button
                    variant="contained"
                    onClick={() =>
                      navigate(`/product/${phone.id}`, {
                        state: { productData: phone, scrollTo: "top" },
                      })
                    }
                    sx={{
                      fontFamily: "SFProDisplayRegular, sans-serif",
                      fontSize: { sm: "0.75rem", md: "1rem" },
                      letterSpacing: "2px",
                      bgcolor: "#0071e3",
                      textTransform: "none",
                      borderRadius: 20,
                      "&:hover": { bgcolor: "#005bb5" },
                    }}
                  >
                    Buy ›
                  </Button>
                </Box>
              </Box>
            ))
          )}
        </Box>
      </Container>
    </Box>
  );
}
