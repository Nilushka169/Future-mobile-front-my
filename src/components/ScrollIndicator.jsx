import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Box, useTheme, Fade } from "@mui/material";
import KeyboardArrowDownRounded from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRounded from "@mui/icons-material/KeyboardArrowUpRounded";
import { motion, useReducedMotion } from "framer-motion";

export default function ScrollIndicator({
  position = "bottom",
  offset = 5,
  target = null,
  showThreshold = 48,
  autoHideAfterClick = true,
  alwaysVisible = false,
  ariaLabel = "Scroll",
}) {
  const theme = useTheme();
  const reduceMotion = useReducedMotion();
  const [atEdge, setAtEdge] = useState(false);
  const isTop = position === "top";

  const isXs = (() => {
    try {
      return window.matchMedia(`(max-width: ${theme.breakpoints.values.sm - 0.05}px)`).matches;
    } catch (e) {
      return true;
    }
  })();

  const calcAtEdge = useCallback(() => {
    const scrollY = window.scrollY || window.pageYOffset;
    const doc = document.documentElement;
    const winH = window.innerHeight || doc.clientHeight;
    const docH = Math.max(doc.scrollHeight, doc.offsetHeight, doc.clientHeight);
    if (isTop) {
      setAtEdge(scrollY <= showThreshold);
    } else {
      const distanceFromBottom = docH - (scrollY + winH);
      setAtEdge(distanceFromBottom <= showThreshold);
    }
  }, [isTop, showThreshold]);

  useEffect(() => {
    calcAtEdge();
    const onScroll = () => calcAtEdge();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [calcAtEdge]);

  const shouldShow = (alwaysVisible ? true : !atEdge) && isXs;
  const delta = isTop ? -10 : 10;

  const icon = isTop ? (
    <KeyboardArrowUpRounded fontSize="large" />
  ) : (
    <KeyboardArrowDownRounded fontSize="large" />
  );

  if (!shouldShow) return null;

  return (
    <Fade in timeout={600}>
      <Box
        role="img"
        aria-label={ariaLabel}
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
          mt: isTop ? offset : 0,
          mb: !isTop ? offset : 0,
        }}
      >
        <motion.div
          animate={reduceMotion ? { y: 0 } : { y: [1, delta, 1] }}
          transition={reduceMotion ? { duration: 0 } : { duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ display: "inline-flex" }}
        >
          {icon}
        </motion.div>
      </Box>
    </Fade>
  );
}

ScrollIndicator.propTypes = {
  position: PropTypes.oneOf(["bottom", "top"]),
  offset: PropTypes.number,
  target: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Element)]),
  showThreshold: PropTypes.number,
  autoHideAfterClick: PropTypes.bool,
  alwaysVisible: PropTypes.bool,
  ariaLabel: PropTypes.string,
};