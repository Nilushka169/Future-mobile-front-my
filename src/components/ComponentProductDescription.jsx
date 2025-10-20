import React, { useMemo, useState, useEffect, useRef, useCallback } from "react";
import {
  Box,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Stack,
  Divider,
  Tooltip,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import QuantitySelector from "./ComponentQuantitySelector";

const customColorMap = {
  "Alpine Green": "#4E6E58",
  "Alpine Green (iPhone 16)": "#4E6E58",
  "Arctic Silver": "#D9E4EB",
  "Black": "#000000",
  "Black (iPhone 16)": "#3C4042",
  "Black Titanium": "#1B1B1B",
  "Black Titanium (iPhone 15 Pro)": "#1B1B1B",
  "Black Titanium (iPhone 16 Pro)": "#1B1B1B",
  "Blue": "#007AFF",
  "Blue (iPhone 15)": "#007AFF",
  "Blue (iPhone 16 Pro)": "#2F4452",
  "Blue Titanium": "#2F4452",
  "Champagne Gold": "#F7E7CE",
  "Cloud White": "#FAF9F6",
  "Coral": "#FF6F61",
  "Cosmic Orange": "#FF4500",
  "Deep Purple": "#5D3A9B",
  "Deep Space Black": "#121212",
  "Desert Rose": "#E9A6A6",
  "Desert Titanium": "#A39887",
  "Graphite": "#383838",
  "Gold": "#D4AF37",
  "Green": "#2ECC71",
  "Jet Black": "#000000",
  "Lavender": "#E6E6FA",
  "Light Gold": "#FAF3E0",
  "Midnight": "#1C1C1E",
  "Midnight (iPhone 16)": "#1C1C1E",
  "Midnight Green": "#004953",
  "Mint": "#98FF98",
  "Mist Blue": "#B0E0E6",
  "Natural Titanium": "#C2BCB2",
  "Pacific Blue": "#005F73",
  "Pink": "#FFC0CB",
  "Pink (iPhone 16)": "#F2ADDA",
  "Purple": "#A020F0",
  "Purple (iPhone 16)": "#5D3A9B",
  "Red": "#FF1300",
  "Red (iPhone 16)": "#FF1300",
  "Rose Gold": "#B76E79",
  "Sage": "#9C9E94",
  "Science Blue": "#0066CC",
  "Silver": "#C0C0C0",
  "Sky Blue": "#87CEEB",
  "Starlight": "#F5F5DC",
  "Sunset Pink": "#FF9999",
  "Teal": "#008080",
  "Teal (iPhone 16)": "#B0D4D2",
  "Titanium Black": "#1B1B1B",
  "Titanium Blue": "#2F4452",
  "Titanium Gray": "#8A8D8F",
  "Titanium Silver": "#C8C8C8",
  "Ultramarine": "#0437F2",
  "(PRODUCT)RED": "#C8102E",
  "White": "#FFFFFF",
  "White (iPhone 16)": "#FAFAFA",
  "White Titanium": "#DDDDDD",
  "Yellow": "#FFE066"
};



const resolveCssColor = (name) => {
  if (customColorMap[name]) return customColorMap[name];

  try {
    if (typeof window !== "undefined" && window.CSS?.supports?.("color", name)) {
      return name;
    }
  } catch (_) {}

  return "#d9d9d9";
};

export default function ComponentProductDescription({ product }) {
  const { name, img, basePrice, storages = [], colors = [], status } = product;
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const images =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images.slice(0, 5)
      : [img];

  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const holdIntervalRef = useRef(null);
  const holdTimeoutRef = useRef(null);

  const initialStorageOption = storages?.[0]?.option ?? null;
  const [selectedStorageOption, setSelectedStorageOption] = useState(initialStorageOption);
  const selectedStorage = storages.find((s) => s.option === selectedStorageOption) ?? null;

  const initialColor = colors?.[0] ?? null;
  const [selectedColor, setSelectedColor] = useState(initialColor);

  const [quantity, setQuantity] = useState(1);

  const stock =
    typeof selectedStorage?.stock === "number" && !Number.isNaN(selectedStorage.stock)
      ? Math.max(0, Math.floor(selectedStorage.stock))
      : typeof product?.stock === "number" && !Number.isNaN(product.stock)
      ? Math.max(0, Math.floor(product.stock))
      : null;

  const inStock = stock === null ? true : stock >= 1;

  useEffect(() => {
    if (stock === 0) {
      setQuantity(0);
    } else if (stock !== null) {
      setQuantity((q) => {
        const clamped = Math.max(1, Math.min(stock, Math.floor(q || 1)));
        return clamped;
      });
    } else {
      setQuantity((q) => Math.max(1, Math.floor(q || 1)));
    }
  }, [stock, selectedStorageOption]);

  const pricePerUnit = selectedStorage?.price ?? basePrice ?? 0;
  const currentPrice = useMemo(
    () => Math.max(0, pricePerUnit * Math.max(1, quantity)),
    [pricePerUnit, quantity]
  );

  const moveTo = useCallback(
    (index) => {
      const next = ((index % images.length) + images.length) % images.length;
      if (next === currentIndex) return;
      setCurrentIndex(next);
    },
    [currentIndex, images.length]
  );

  const goPrev = useCallback(() => moveTo(currentIndex - 1), [currentIndex, moveTo]);
  const goNext = useCallback(() => moveTo(currentIndex + 1), [currentIndex, moveTo]);

  const startHold = (direction) => {
    if (holdTimeoutRef.current) clearTimeout(holdTimeoutRef.current);

    holdTimeoutRef.current = window.setTimeout(() => {
      if (direction === "prev") moveTo(currentIndex - 1);
      else moveTo(currentIndex + 1);

      if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);
      holdIntervalRef.current = setInterval(() => {
        if (direction === "prev") moveTo((i) => i - 1);
        else moveTo((i) => i + 1);
      }, 420);
    }, 400);
  };

  const stopHold = () => {
    if (holdTimeoutRef.current) {
      clearTimeout(holdTimeoutRef.current);
      holdTimeoutRef.current = null;
    }
    if (holdIntervalRef.current) {
      clearInterval(holdIntervalRef.current);
      holdIntervalRef.current = null;
    }
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    el.addEventListener("keydown", handler);
    return () => el.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let startX = null;
    let moved = false;

    const onTouchStart = (e) => {
      startX = e.touches?.[0]?.clientX ?? null;
      moved = false;
    };
    const onTouchMove = (e) => {
      if (startX == null) return;
      const dx = e.touches?.[0]?.clientX - startX;
      if (Math.abs(dx) > 24) moved = true;
    };
    const onTouchEnd = (e) => {
      if (!moved || startX == null) return;
      const endX = e.changedTouches?.[0]?.clientX ?? startX;
      const dx = endX - startX;
      if (dx > 40) moveTo(currentIndex - 1);
      else if (dx < -40) moveTo(currentIndex + 1);
      startX = null;
      moved = false;
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [moveTo, currentIndex]);

  useEffect(() => () => stopHold(), []);

  const transitionStyle = prefersReducedMotion
    ? "none"
    : "transform 380ms cubic-bezier(0.22, 1, 0.36, 1)";

  const handleSetQuantity = (q) => {
    if (stock === 0) {
      setQuantity(0);
      return;
    }
    const requested = Math.max(1, Math.floor(q || 1));
    if (stock !== null) {
      setQuantity(Math.min(requested, stock));
    } else {
      setQuantity(requested);
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1.3fr 1fr" },
        gap: { xs: 4, md: 8 },
        px: { xs: 2, md: 8 },
        py: { xs: 3, md: 6 },
        alignItems: "start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "auto", sm: "auto", md: "600px" },
          ml: { xs: 0, sm: 0, md: 25 },
        }}
      >
        <Box
          ref={trackRef}
          tabIndex={0}
          sx={{
            position: "relative",
            width: { xs: "100%", md: 520 },
            height: { xs: "auto", md: 600 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
          }}
        >
          {images.length > 1 && (
            <IconButton
              aria-label="Previous image"
              onClick={() => moveTo(currentIndex - 1)}
              onMouseDown={() => startHold("prev")}
              onMouseUp={stopHold}
              onMouseLeave={stopHold}
              onTouchStart={() => startHold("prev")}
              onTouchEnd={stopHold}
              sx={{
                position: "absolute",
                left: { xs: 8, md: -48 },
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(255,255,255,0.92)",
                borderRadius: 2,
                boxShadow: 2,
                zIndex: 20,
                "&:hover": { bgcolor: "rgba(255,255,255,0.98)" },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
          )}

          <Box
            sx={{
              width: { xs: "100%", md: 550 },
              height: { xs: "auto", md: "auto" },
              overflow: "hidden",
              borderRadius: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: `${images.length * 100}%`,
                transform: `translateX(-${(currentIndex * 100) / images.length}%)`,
                transition: transitionStyle,
                height: "100%",
              }}
            >
              {images.map((src, idx) => (
                <Box
                  key={idx}
                  component="img"
                  src={src}
                  alt={`${name} - image ${idx + 1}`}
                  sx={{
                    width: `${100 / images.length}%`,
                    height: { xs: "auto", md: 600 },
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              ))}
            </Box>
          </Box>

          {images.length > 1 && (
            <IconButton
              aria-label="Next image"
              onClick={() => moveTo(currentIndex + 1)}
              onMouseDown={() => startHold("next")}
              onMouseUp={stopHold}
              onMouseLeave={stopHold}
              onTouchStart={() => startHold("next")}
              onTouchEnd={stopHold}
              sx={{
                position: "absolute",
                right: { xs: 8, md: -48 },
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(255,255,255,0.92)",
                borderRadius: 2,
                boxShadow: 2,
                zIndex: 20,
                "&:hover": { bgcolor: "rgba(255,255,255,0.98)" },
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          )}

          {images.length > 1 && (
            <Box sx={{ mt: 2, display: "flex", justifyContent: "center", width: { xs: "100%", md: 520 } }}>
              <Stack direction="row" spacing={1} sx={{}}>
                {images.map((_, idx) => (
                  <Box
                    key={idx}
                    component="button"
                    onClick={() => moveTo(idx)}
                    aria-label={`Go to image ${idx + 1}`}
                    style={{
                      width: idx === currentIndex ? 28 : 10,
                      height: 10,
                      borderRadius: 10,
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      transition: "width 180ms ease",
                      background: idx === currentIndex ? "#0071e3" : "rgba(0,0,0,0.25)",
                    }}
                  />
                ))}
              </Stack>
            </Box>
          )}
        </Box>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box display={"flex"} alignItems="baseline" gap={2} mb={1}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              lineHeight: 1.1,
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 1,
            }}
          >
            {name}
          </Typography>
          {status && (
            <Typography
              variant="subtitle1"
              sx={{
                color: status === "Brand New" ? "success.main" : "warning.main",
                fontWeight: 500,
                mb: 2,
              }}
            >
              {status}
            </Typography>
          )}
        </Box>

        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
          Rs {currentPrice.toLocaleString()}.00
        </Typography>

        <Box sx={{ mb: 2 }}>
          {stock === null ? (
            <Typography variant="subtitle2" sx={{ color: "text.secondary", fontWeight: 500 }}>
              Availability: Unknown
            </Typography>
          ) : inStock ? (
            <Typography variant="subtitle1" sx={{ color: "success.main", fontWeight: 700 }} aria-live="polite">
              In stock
            </Typography>
          ) : (
            <Typography variant="subtitle1" sx={{ color: "error.main", fontWeight: 700 }} aria-live="polite">
              Out of stock
            </Typography>
          )}
        </Box>

        <Divider sx={{ my: 2 }} />

        {colors.length > 0 && (
          <Box sx={{ mt: 2 }}>
            <Stack direction="row" alignItems="baseline" spacing={1} sx={{ mb: 1 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 1,
                  fontFamily: "SFProDisplayMedium, sans-serif",
                  fontSize: "1.7rem",
                }}
              >
                Color
              </Typography>
              {selectedColor && <Typography variant="subtitle1" color="text.secondary">– {selectedColor}</Typography>}
            </Stack>

            <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
              {colors.map((c) => {
                const isSelected = selectedColor === c;
                const swatchColor = resolveCssColor(c);

                return (
                  <Tooltip key={c} title={c} arrow>
                    <Box
                      role="button"
                      aria-label={`Select ${c}`}
                      tabIndex={0}
                      onClick={() => setSelectedColor(c)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") setSelectedColor(c);
                      }}
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        bgcolor: swatchColor,
                        boxShadow: isSelected
                          ? "0 0 0 4px rgba(0,113,227,0.35), inset 0 0 0 2px #fff"
                          : "inset 0 0 0 1px rgba(0,0,0,0.14)",
                        cursor: "pointer",
                        transition: "transform 120ms ease, box-shadow 120ms ease",
                        "&:hover": { transform: "translateY(-1px)" },
                      }}
                    />
                  </Tooltip>
                );
              })}
            </Stack>
          </Box>
        )}

        {storages.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 1,
                fontFamily: "SFProDisplayMedium, sans-serif",
                fontSize: "1.7rem",
              }}
            >
              Storage
              {selectedStorage?.option && (
                <Typography component="span" sx={{ color: "text.secondary", ml: 1 }}>
                  – {selectedStorage.option}
                </Typography>
              )}
            </Typography>

            <ToggleButtonGroup
              value={selectedStorageOption}
              exclusive
              onChange={(e, value) => value && setSelectedStorageOption(value)}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
              }}
            >
              {storages.map((storage) => {
                const active = selectedStorageOption === storage.option;
                const storageStock =
                  typeof storage.stock === "number" && !Number.isNaN(storage.stock)
                    ? Math.max(0, Math.floor(storage.stock))
                    : null;
                return (
                  <ToggleButton
                    key={storage.option}
                    value={storage.option}
                    sx={{
                      px: 3,
                      py: 1.4,
                      borderRadius: 4,
                      borderWidth: 2,
                      textTransform: "none",
                      fontWeight: 700,
                      letterSpacing: 0.2,
                      bgcolor: "#fff",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
                      ...(active ? { borderColor: "#0071e3 !important" } : { borderColor: "rgba(0,0,0,0.4)" }),
                      "&:hover": { borderColor: "#0071e3", bgcolor: "#fff" },
                      opacity: storageStock === 0 ? 0.6 : 1,
                    }}
                  >
                    {storage.option}
                  </ToggleButton>
                );
              })}
            </ToggleButtonGroup>
          </Box>
        )}

        <Box
          sx={{
            mt: 4,
            maxWidth: 240,
            opacity: stock === 0 ? 0.5 : 1,
            pointerEvents: stock === 0 ? "none" : "auto",
          }}
        >
          <QuantitySelector
            quantity={quantity}
            setQuantity={handleSetQuantity}
          />
        </Box>

        <Stack direction="row" spacing={2} sx={{ mt: 4, flexWrap: "wrap" }}>
          <Button variant="outlined" size="large" sx={{ borderRadius: 999, px: 3, height: 48 }} disabled={!inStock}>
            Add to cart
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: 999,
              px: 4,
              height: 48,
              bgcolor: "#0071e3",
              "&:hover": { bgcolor: "#0064cc" },
            }}
            disabled={!inStock}
          >
            Buy now
          </Button>
        </Stack>

        <Box sx={{ height: { xs: 24, md: 40 } }} />
      </Box>
    </Box>
  );
}
