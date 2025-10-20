import React from "react";
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Divider,
  useTheme,
} from "@mui/material";
import { getInfoById } from "../data/information";

export default function ProductInformation({ productId }) {
  const info = getInfoById(productId);
  const theme = useTheme();

  if (!info) return null;

  return (
    <Box sx={{ bgcolor: "#f5f5f7", pb: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            fontFamily: "SFProDisplayBold, sans-serif",
            mb: { xs: 3, md: 6 },
            fontSize: { xs: "1.8rem", md: "2.7rem", lg: "3rem" },
          }}
        >
          Product Information
        </Typography>

        {info.sections.map((section, idx) => (
          <Box key={section.topic} sx={{ mb: { xs: 3, md: 6 } }}>
            <Table
              sx={{
                tableLayout: "fixed",
                width: "100%",
                "& td": { border: "none", py: 1.25 },
              }}
            >
              <TableBody>
                {section.items.map((it, i) => (
                  <TableRow key={`${section.topic}-${i}`}>
                    {i === 0 && (
                      <TableCell
                        rowSpan={section.items.length}
                        sx={{
                          fontFamily: "SFProDisplayBold, sans-serif",
                          fontWeight: 800,
                          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.8rem" },
                          width: { xs: "28%", sm: "25%" },
                          verticalAlign: "top",
                          pr: 2,
                        }}
                      >
                        {section.topic}
                      </TableCell>
                    )}

                    <TableCell
                      sx={{
                        fontFamily: "SFProDisplayBold, sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: "1rem", sm: "1.05rem" },
                        width: { xs: "32%", sm: "20%" },
                        pr: 2,
                      }}
                    >
                      {it.subtopic}
                    </TableCell>

                    <TableCell
                      sx={{
                        fontFamily: "SFProDisplayRegular, sans-serif",
                        fontSize: { xs: "1rem", sm: "1.05rem" },
                        color: theme.palette.text.secondary,
                        width: { xs: "40%", sm: "45%" },
                      }}
                    >
                      {it.detail}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {idx !== info.sections.length - 1 && (
              <Divider sx={{ mt: { xs: 2.5, md: 3.5 } }} />
            )}
          </Box>
        ))}
      </Container>
    </Box>
  );
}
