import React, { useState, useEffect } from "react";
import { phones as fallbackPhones } from "../data/phones";

export default function usePhones() {
  const [phones, setPhones] = useState(fallbackPhones);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
    fetch(`${API_URL}/phones`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const normalized = data.map(p => ({
            id: p.id ?? p._id,
            infoId: p.infoId ?? p.info_id,
            status: p.status ?? "",
            name: p.name ?? "Unnamed",
            basePrice: Number(p.basePrice ?? 0),
            img: p.img ?? (Array.isArray(p.images) ? p.images[0] : ""),
            images: Array.isArray(p.images) ? p.images.slice(0, 5) : [],
            colors: Array.isArray(p.colors) ? p.colors : [],
            storages: Array.isArray(p.storages)
              ? p.storages.map(s => ({
                  option: s.option,
                  price: Number(s.price ?? 0),
                  stock: Number(s.stock ?? 0)
                }))
              : [],
            stock: Number(p.stock ?? 0),
            isLatest: Boolean(p.isLatest)
          }));
          setPhones(normalized);
        }
      })
      .catch(err => console.warn("Failed to fetch phones", err));
  }, []);

  return phones;
}
