import * as React from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InquiryImage from "../assets/imageContact.png";
import emailjs from "emailjs-com";

export default function QuickInquiry() {
  const [values, setValues] = React.useState({
    fullName: "",
    email: "",
    contactNumber: "",
    regarding: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    fullName: "",
    email: "",
    contactNumber: "",
    regarding: "",
    message: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState({ open: false, message: "", severity: "success" });

  const setField = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(email).toLowerCase());

  const isValidPhone = (phone) => {
    const digits = (phone || "").replace(/\D/g, "");
    return digits.length >= 7 && digits.length <= 15;
  };

  const isNonEmpty = (s) => (s || "").trim().length > 0;

  const validate = () => {
    const newErr = { fullName: "", email: "", contactNumber: "", regarding: "", message: "" };

    if (!isNonEmpty(values.fullName) || values.fullName.trim().length < 2) {
      newErr.fullName = "Please enter your full name (2+ characters).";
    } else if (!/^[A-Za-z][A-Za-z\s'.-]{1,}$/.test(values.fullName.trim())) {
      newErr.fullName = "Name can contain letters, spaces, apostrophes, dots, and hyphens.";
    }

    if (!isNonEmpty(values.email)) {
      newErr.email = "Email is required.";
    } else if (!isValidEmail(values.email)) {
      newErr.email = "Enter a valid email address.";
    }

    if (!isNonEmpty(values.contactNumber)) {
      newErr.contactNumber = "Contact number is required.";
    } else if (!isValidPhone(values.contactNumber)) {
      newErr.contactNumber = "Enter a valid phone number (7–15 digits).";
    }

    if (!isNonEmpty(values.regarding) || values.regarding.trim().length < 3) {
      newErr.regarding = "Please specify what this is regarding (3+ characters).";
    }

    if (!isNonEmpty(values.message) || values.message.trim().length < 10) {
      newErr.message = "Please add a message (10+ characters).";
    }

    setErrors(newErr);
    return Object.values(newErr).every((v) => v === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const templateParams = {
      fullName: values.fullName,
      email: values.email,
      contactNumber: values.contactNumber,
      regarding: values.regarding,
      message: values.message,
    };

    emailjs
      .send("service_lpbxnvk", "template_wi73xj5", templateParams, "H_E1zqUt0b52Y-RI4")
      .then(
        () => {
          setSnackbar({ open: true, message: "Inquiry sent successfully!", severity: "success" });
          handleReset();
        },
        () => {
          setSnackbar({ open: true, message: "Failed to send inquiry. Please try again.", severity: "error" });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const handleReset = () => {
    setValues({ fullName: "", email: "", contactNumber: "", regarding: "", message: "" });
    setErrors({ fullName: "", email: "", contactNumber: "", regarding: "", message: "" });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        py: { xs: 2, md: 3 },
        mx: "auto",
        width: { xs: "80%", sm: "80%", md: "80%" },
        maxWidth: 1300,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 1185,
          mx: "auto",
          p: { xs: 2.5, sm: 4, md: 6 },
          bgcolor: "#f5f5f7",
          borderRadius: 4,
        }}
      >
        <Grid container spacing={2} justifyContent="space-around">
          {/* Left Section */}
          <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h3"
                component="h1"
                sx={{ fontWeight: 700, mb: 2, fontSize: { xs: 28, sm: 34 } }}
              >
                Quick inquiry
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", fontSize: { xs: 14, sm: 16 }, mb: 3 }}
              >
                Our support team responds within 24 hours.
              </Typography>
            </Box>
            <Box sx={{ position: "relative", left: 0, bottom: 0 }}>
              <Box
                component="img"
                src={InquiryImage}
                alt="Inquiry Illustration"
                sx={{
                  width: { xs: "80%", sm: "70%", md: "100%" },
                  maxWidth: 520,
                  display: { xs: "none", md: "block" },
                }}
              />
            </Box>
          </Grid>

          {/* Right Section (Form) */}
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", sm: "100%", md: "100%" },
                borderRadius: 5,
                mx: "auto",
              }}
            >
              <Stack spacing={3} alignItems="stretch" sx={{ width: { xs: "100%", sm: 420, md: 500 } }}>
                <TextField
                  label="Full Name"
                  value={values.fullName}
                  onChange={(e) => setField("fullName", e.target.value)}
                  onBlur={validate}
                  fullWidth
                  required
                  error={!!errors.fullName}
                  helperText={errors.fullName}
                />

                <TextField
                  type="email"
                  label="Email"
                  value={values.email}
                  onChange={(e) => setField("email", e.target.value)}
                  onBlur={validate}
                  fullWidth
                  required
                  error={!!errors.email}
                  helperText={errors.email}
                />

                <TextField
                  label="Contact Number"
                  value={values.contactNumber}
                  onChange={(e) => setField("contactNumber", e.target.value)}
                  onBlur={validate}
                  fullWidth
                  required
                  error={!!errors.contactNumber}
                  helperText={errors.contactNumber}
                  placeholder="e.g. +1 202 555 0188"
                />

                <TextField
                  label="Regarding"
                  value={values.regarding}
                  onChange={(e) => setField("regarding", e.target.value)}
                  onBlur={validate}
                  fullWidth
                  required
                  error={!!errors.regarding}
                  helperText={errors.regarding}
                />

                <TextField
                  label="Message"
                  value={values.message}
                  onChange={(e) => setField("message", e.target.value)}
                  onBlur={validate}
                  fullWidth
                  required
                  multiline
                  minRows={5}
                  error={!!errors.message}
                  helperText={errors.message}
                />

                <Stack direction="row" spacing={1.5} justifyContent="space-between">
                  <Button
                    variant="outlined"
                    onClick={handleReset}
                    sx={{ minWidth: 110, borderRadius: 5 }}
                    disabled={loading}
                  >
                    Reset
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<ArrowForwardIosIcon fontSize="small" />}
                    sx={{ minWidth: 120, borderRadius: 5 }}
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send"}
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Snackbar for Success/Error */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
