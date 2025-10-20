import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function QuantitySelector({ quantity, setQuantity }) {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{
          mb: 1,
          fontFamily: "SFProDisplayMedium, sans-serif",
          fontSize: "1.7rem",
        }}
      >
        Quantity
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#fff",
          border: "1px solid #ddd",
          borderRadius: 3,
          width: 140,
          p: 0.5,
        }}
      >
        <IconButton
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          sx={{ color: "#0071e3", "&:hover": { bgcolor: "transparent" } }}
        >
          <RemoveIcon />
        </IconButton>

        <Typography
          variant="h6"
          sx={{
            mx: 2,
            minWidth: 30,
            textAlign: "center",
            fontFamily: "SFProDisplayMedium, sans-serif",
            fontWeight: 600,
          }}
        >
          {quantity}
        </Typography>

        <IconButton
          onClick={() => setQuantity(quantity + 1)}
          sx={{ color: "#0071e3", "&:hover": { bgcolor: "transparent" } }}
        >
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default QuantitySelector;
