import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { motion, animate } from "framer-motion";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;
    animate(scroll, 0, {
      duration: 1,
      ease: "easeInOut",
      onUpdate: (value) => {
        window.scrollTo(0, value);
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed",
        bottom: 20,
        left: 20,
        zIndex: 1000,
      }}
    >
      <Fab
        color="primary"
        aria-label="scroll back to top"
        onClick={scrollToTop}
        sx={{
          bgcolor: "transparent",
          color: "#000000",
          "&:hover": {
            bgcolor: "#ffffff",
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </motion.div>
  );
};

export default ScrollToTopButton;
