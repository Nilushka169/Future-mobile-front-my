// src/data/accessories.js (adjust path as needed)

// ✅ Use the same image assets you had commented out
import Adapter1 from "../assets/0431eca0cd928a374a5e8298a1d504427e1c9488.png";
import Adapter2 from "../assets/0431eca0cd928a374a5e8298a1d504427e1c9488.png";
import Adapter3 from "../assets/0431eca0cd928a374a5e8298a1d504427e1c9488.png";

import Cable1 from "../assets/90e161ffd9a32d27efd2ab6c040e72123cf7f4dc.png";
import Cable2 from "../assets/90e161ffd9a32d27efd2ab6c040e72123cf7f4dc.png";
import Cable3 from "../assets/90e161ffd9a32d27efd2ab6c040e72123cf7f4dc.png";

import Cover1 from "../assets/588d0ef8e85f769cfde5019f49681d11283b75da.png";
import Cover2 from "../assets/435168372d37135077466c91e3ff651eb4c299fc.png";
import Cover3 from "../assets/10da42ab3aa25a7aa518f068a663a519bbcf6457.png";

import Airpods4 from "../assets/airpods/8.png";
import AirpodsPro from "../assets/airpods/4.png";
import AirpodsPro2 from "../assets/airpods/1.png";

import WatchUltra2 from "../assets/2fc36ac17e2364151d7dc7ea0be53b2f81e34673.png";
import WatchSeries10 from "../assets/449601d79b9162b6285458415acebf7545d14658.png";
import WatchSE from "../assets/4222514cff1476809976786ed7552b187ae33b26.png";

import MagSafe from "../assets/8772ffc917874020cc97003d31cb2cb243e97ab2.png";

import earpods1 from "../assets/efb42f5e47a2d80c86b8d30e313d886d1b130d8d.jpg";
import earpods2 from "../assets/d8973bd63b8302efff4a228844ea34418a2c5c03.jpg";

export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// -----------------------------------------------------------------------------
// DUMMY ACCESSORIES (fallback)
// Shape matches your normalization: id, infoId, name, basePrice, stock, img,
// images (optional), category, tags[], variants[{ option, price, stock? }]
// -----------------------------------------------------------------------------
export const accessories = [
  // Power Adapters (IDs shifted to 100+ to avoid phone id conflicts)
  {
    id: 100,
    infoId: 1001,
    name: "5W USB Power Adapter",
    basePrice: 239900,
    stock: 5,
    img: Adapter1,
    images: [Adapter1],
    category: "Power Adapter",
    tags: ["Older iPhones"],
    variants: [{ option: "5W", price: 239900 }],
  },
  {
    id: 101,
    infoId: 1001,
    name: "18W USB-C Power Adapter",
    basePrice: 239900,
    stock: 5,
    img: Adapter2,
    images: [Adapter2],
    category: "Power Adapter",
    tags: ["Newer iPhones"],
    variants: [{ option: "18W", price: 239900 }],
  },
  {
    id: 102,
    infoId: 1001,
    name: "20W USB-C Power Adapter",
    basePrice: 239900,
    stock: 5,
    img: Adapter3,
    images: [Adapter3],
    category: "Power Adapter",
    tags: ["Newer iPhones"],
    variants: [{ option: "20W", price: 239900 }],
  },

  // Charging Cables
  {
    id: 103,
    infoId: 1001,
    name: "USB-C to Lightning Cable",
    basePrice: 239900,
    stock: 5,
    img: Cable1,
    images: [Cable1],
    category: "Charging Cable",
    tags: ["iPhone / iPad"],
    variants: [
      { option: "1 m", price: 239900 },
      { option: "2 m", price: 259900 },
    ],
  },
  {
    id: 104,
    infoId: 1001,
    name: "USB-C to USB-C Cable",
    basePrice: 239900,
    stock: 5,
    img: Cable2,
    images: [Cable2],
    category: "Charging Cable",
    tags: ["All USB-C"],
    variants: [
      { option: "1 m", price: 239900 },
      { option: "2 m", price: 259900 },
    ],
  },
  {
    id: 105,
    infoId: 1001,
    name: "Apple Watch Magnetic Charging Cable",
    basePrice: 239900,
    stock: 5,
    img: Cable3,
    images: [Cable3],
    category: "Charging Cable",
    tags: ["Apple Watch"],
    variants: [{ option: "1 m", price: 239900 }],
  },

  // Back Covers
  {
    id: 106,
    infoId: 1001,
    name: "iPhone 16 Pro Clear Case with MagSafe",
    basePrice: 239900,
    stock: 5,
    img: Cover1,
    images: [Cover1],
    colors: ["Red", "Black", "White"],
    category: "Back Cover",
    tags: ["MagSafe"],
    variants: [{ option: "Clear", price: 239900 }],
  },
  {
    id: 107,
    infoId: 1001,
    name: "iPhone 16 Pro Silicone Case with MagSafe",
    basePrice: 239900,
    stock: 5,
    img: Cover2,
    images: [Cover2],
    colors: ["Red", "Black", "White"],
    category: "Back Cover",
    tags: ["MagSafe", "Silicone"],
    variants: [{ option: "Peony", price: 239900 }],
  },
  {
    id: 108,
    infoId: 1001,
    name: "iPhone 16 Pro Max Clear Case with MagSafe",
    basePrice: 239900,
    stock: 5,
    img: Cover3,
    images: [Cover3],
    colors: ["Red", "Black", "White"],
    category: "Back Cover",
    tags: ["MagSafe"],
    variants: [{ option: "Clear", price: 239900 }],
  },

  // AirPods
  {
    id: 109,
    infoId: 1001,
    name: "AirPods 4",
    basePrice: 239900,
    stock: 5,
    img: Airpods4,
    images: [Airpods4],
    category: "AirPods",
    tags: ["Spatial Audio"],
    variants: [{ option: "Standard", price: 239900 }],
  },
  {
    id: 110,
    infoId: 1001,
    name: "AirPods Pro",
    basePrice: 239900,
    stock: 5,
    img: AirpodsPro,
    images: [AirpodsPro],
    category: "AirPods",
    tags: ["ANC"],
    variants: [{ option: "Pro", price: 239900 }],
  },
  {
    id: 111,
    infoId: 1001,
    name: "AirPods Pro 2",
    basePrice: 239900,
    stock: 5,
    img: AirpodsPro2,
    images: [AirpodsPro2],
    category: "AirPods",
    tags: ["ANC"],
    variants: [{ option: "USB-C", price: 239900 }],
  },

  // Apple Watch
  {
    id: 112,
    infoId: 1001,
    name: "Apple Watch Ultra 2",
    basePrice: 239900,
    stock: 5,
    img: WatchUltra2,
    images: [WatchUltra2],
    category: "Apple Watch",
    tags: ["49mm"],
    variants: [{ option: "GPS + Cellular", price: 239900 }],
  },
  {
    id: 113,
    infoId: 1001,
    name: "Apple Watch Series 10",
    basePrice: 239900,
    stock: 5,
    img: WatchSeries10,
    images: [WatchSeries10],
    category: "Apple Watch",
    tags: ["41/45mm"],
    variants: [{ option: "GPS", price: 239900 }],
  },
  {
    id: 114,
    infoId: 1001,
    name: "Apple Watch SE",
    basePrice: 239900,
    stock: 5,
    img: WatchSE,
    images: [WatchSE],
    category: "Apple Watch",
    tags: ["40/44mm"],
    variants: [{ option: "GPS", price: 239900 }],
  },

  // Other
  {
    id: 115,
    infoId: 1001,
    name: "MagSafe Charger",
    basePrice: 239900,
    stock: 5,
    img: MagSafe,
    images: [MagSafe],
    category: "Other",
    tags: ["MagSafe"],
    variants: [{ option: "Charger", price: 239900 }],
  },

  // Duplicate sample (kept to mirror your commented list)


  // EarPods
  {
    id: 117,
    infoId: 1001,
    name: "EarPods (USB-C)",
    basePrice: 239900,
    stock: 5,
    img: earpods1,
    images: [earpods1],
    category: "EarPods",
    tags: ["USB-C"],
    variants: [{ option: "Standard", price: 239900 }],
  },
  {
    id: 118,
    infoId: 1001,
    name: "EarPods (Lightning)",
    basePrice: 239900,
    stock: 5,
    img: earpods2,
    images: [earpods2],
    category: "EarPods",
    variants: [{ option: "Standard", price: 239900 }],
  },
];

// -----------------------------------------------------------------------------
// Backend override — will replace the above dummy array if API returns data
// -----------------------------------------------------------------------------
(async function replaceWithBackendAccessories() {
  try {
    const res = await fetch(`${API_URL}/accessories`);
    if (!res.ok) {
      console.warn(`accessories.js: backend responded ${res.status} — keeping fallback data`);
      return;
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      console.warn("accessories.js: backend returned no array — keeping fallback data");
      return;
    }

    const normalized = data.map((a) => {
      const item = a && typeof a.toObject === "function" ? a.toObject() : a;
      return {
        id: item.id ?? item._id ?? undefined,
        infoId: item.infoId ?? undefined,
        name: item.name ?? "Unnamed",
        basePrice: Number(item.basePrice ?? 0),
        stock: typeof item.stock === "number" ? item.stock : 0,
        img: item.img ?? (Array.isArray(item.images) && item.images[0]) ?? "",
        images: Array.isArray(item.images) ? item.images.slice(0, 5) : item.images ? [item.images] : [],
        category: item.category ?? "",
        tags: Array.isArray(item.tags) ? item.tags : [],
        variants: Array.isArray(item.variants)
          ? item.variants.map((v) => ({
              option: v.option,
              price: Number(v.price ?? 0),
              stock: typeof v.stock === "number" ? v.stock : null,
            }))
          : [],
      };
    });

    accessories.length = 0;
    accessories.push(...normalized);
    console.log(`accessories.js: replaced fallback with ${normalized.length} accessories from backend`);
  } catch (err) {
    console.warn("accessories.js: failed to fetch backend accessories — keeping fallback data", err);
  }
})();
