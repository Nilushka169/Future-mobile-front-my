import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import marker2x from "leaflet/dist/images/marker-icon-2x.png";
import marker from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: marker,
  iconRetinaUrl: marker2x,
  shadowUrl: shadow,
  iconAnchor: [12, 41],
  popupAnchor: [0, -28],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function MapCard({
  lat,
  lng,
  title = "Visit us",
  address,
  zoom = 17,
  height = 520,
}) {
  const center = [lat, lng];
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=Future+Mobile+Horana`;

  return (
    <Card
      elevation={2}
      sx={{
        width: { xs: "80%", sm: "80%", md: "80%" },
        maxWidth: 1200,
        mx: "auto",
        borderRadius: 4,
        boxShadow: "none",
        overflow: "hidden",
        backgroundColor: "#f5f5f7",
        p: { xs: 1, sm: 3, md: 5 },
      }}
    >
      <CardContent sx={{ pb: { xs: 2, sm: 3, md: 4 }, px: 0 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "SFProDisplayBold",
            fontSize: { xs: "1.6rem", sm: "2.2rem", md: "3rem" },
            fontWeight: 700,
            textAlign: "center",
            mb: 1,
          }}
        >
          {title}
        </Typography>

        {address && (
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "text.secondary",
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              fontFamily: "SFProDisplayBold",
              mb: { xs: 2, sm: 3 },
              px: { xs: 1, sm: 4 },
              wordBreak: "break-word",
            }}
          >
            {address}
          </Typography>
        )}
      </CardContent>

      <Box
        sx={{
          width: "100%",
          height: { xs: 280, sm: 360, md: height },
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
          <Marker position={center}>
            <Popup>
              <strong>{title}</strong>
              {address ? <div style={{ marginTop: 4 }}>{address}</div> : null}
            </Popup>
            <Tooltip permanent direction="top" offset={[0, -40]} interactive>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#000",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Future Mobile
              </a>
            </Tooltip>
          </Marker>
        </MapContainer>
      </Box>
    </Card>
  );
}
