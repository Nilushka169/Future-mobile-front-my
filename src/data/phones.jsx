// // src/data/phones.js
// import iphone17ProMax from "../assets/iphone17promax.png";
// import iphone17ProMax_2 from "../assets/84d4747685d3acc8038e3380d51ab6e6f8440f3a.png"; // optional
// import iphone17ProMax_3 from "../assets/iphone17promax.png"; // optional
// import iphone17ProMax_4 from "../assets/84d4747685d3acc8038e3380d51ab6e6f8440f3a.png"; // optional
// import iphone17ProMax_5 from "../assets/iphone17promax.png"; // optional

// import iphone17Pro from "../assets/iphone17pro.png";
// import iphone17Air from "../assets/iphone17air.png";
// import iphone17 from "../assets/iphone17.png";

// import iphone16ProMax from "../assets/84d4747685d3acc8038e3380d51ab6e6f8440f3a.png";
// import iphone16Pro from "../assets/84d4747685d3acc8038e3380d51ab6e6f8440f3a.png";
// import iphone16Plus from "../assets/638615214005187601.png";
// import iphone16 from "../assets/b01d-39c612cba625.png";

// import iphone15Pro from "../assets/638615206805207550.png";
// import iphone15 from "../assets/38301486009641671.png";

// import iphone14pro from "../assets/7c1d1641347b.jpg";
// import iphone14 from "../assets/fc202f5e4acf.jpg";

// import iphone13 from "../assets/637672977748712735.png";

// import iphoneSE2 from "../assets/3646d872580d.png";

// export const phones = [
//   // iPhone 17 lineup — Brand New
//   {
//     id: 1,
//     infoId: 1,
//     status: "Brand New",
//     name: "iPhone 17 Pro Max",
//     basePrice: 259900,
//     img: iphone17ProMax, // keep for backward compatibility
//     images: [
//       iphone17ProMax,
//       iphone17ProMax_2,
//       iphone17ProMax_3,
//       iphone17ProMax_4,
//       iphone17ProMax_5,
//     ].filter(Boolean), // filter out missing imports
//     colors: ["Silver", "Graphite", "Gold", "Titanium Blue"],
//     storages: [
//       { option: "128GB", price: 239900, stock: 5 },
//       { option: "256GB", price: 259900, stock: 5 },
//       { option: "512GB", price: 289900, stock: 0 },
//       { option: "1TB", price: 329900, stock: 2 },
//     ],
//     isLatest: true,
//   },
//   {
//     id: 2,
//     infoId: 2,
//     status: "Brand New",
//     name: "iPhone 17 Pro",
//     basePrice: 239900,
//     stock: 5,
//     img: iphone17Pro,
//     colors: ["Silver", "Graphite", "Gold"],
//     storages: [
//       { option: "128GB", price: 239900 },
//       { option: "256GB", price: 259900 },
//       { option: "512GB", price: 289900 },
//     ],
//     isLatest: true,
//   },
//   {
//     id: 3,
//     infoId: 3,
//     status: "Brand New",
//     name: "iPhone 17 Air",
//     basePrice: 219900,
//     stock: 5,
//     img: iphone17Air,
//     colors: ["Black", "White", "Pink"],
//     storages: [
//       { option: "128GB", price: 219900 },
//       { option: "256GB", price: 239900 },
//     ],
//     isLatest: true,
//   },
//   {
//     id: 4,
//     infoId: 4,
//     status: "Brand New",
//     name: "iPhone 17",
//     basePrice: 199900,
//     stock: 5,
//     img: iphone17,
//     colors: ["Black", "White", "Blue", "Pink"],
//     storages: [
//       { option: "128GB", price: 199900 },
//       { option: "256GB", price: 219900 },
//     ],
//     isLatest: true,
//   },

//   // iPhone 16 lineup — Brand New
//   {
//     id: 5,
//     infoId: 5,
//     status: "Brand New",
//     name: "iPhone 16 Pro Max",
//     basePrice: 239900,
//     stock: 5,
//     img: iphone16ProMax,
//     colors: ["Silver", "Graphite", "Gold", "Pacific Blue"],
//     storages: [
//       { option: "128GB", price: 239900 },
//       { option: "256GB", price: 259900 },
//       { option: "512GB", price: 289900 },
//     ],
//     isLatest: false,
//   },
//   {
//     id: 6,
//     infoId: 6,
//     status: "Brand New",
//     name: "iPhone 16 Pro",
//     basePrice: 219900,
//     stock: 5,
//     img: iphone16Pro,
//     colors: ["Silver", "Graphite"],
//     storages: [
//       { option: "128GB", price: 219900 },
//       { option: "256GB", price: 239900 },
//     ],
//     isLatest: false,
//   },
//   {
//     id: 7,
//     infoId: 7,
//     status: "Brand New",
//     name: "iPhone 16 Plus",
//     basePrice: 199900,
//     stock: 5,
//     img: iphone16Plus,
//     colors: ["Black", "White"],
//     storages: [
//       { option: "128GB", price: 199900 },
//       { option: "256GB", price: 219900 },
//     ],
//     isLatest: false,
//   },
//   {
//     id: 8,
//     infoId: 8,
//     status: "Brand New",
//     name: "iPhone 16",
//     basePrice: 179900,
//     stock: 5,
//     img: iphone16,
//     colors: ["Black", "White"],
//     storages: [
//       { option: "128GB", price: 179900 },
//       { option: "256GB", price: 199900 },
//     ],
//     isLatest: false,
//   },

//   // iPhone 15 / older — mix of Brand New & Pre Owned
//   {
//     id: 9,
//     infoId: 9,
//     name: "iPhone 15 Pro",
//     status: "Pre Owned",
//     basePrice: 199900,
//     stock: 5,
//     img: iphone15Pro, // reuse asset if needed
//     colors: ["Graphite", "Silver"],
//     storages: [
//       { option: "128GB", price: 199900 },
//       { option: "256GB", price: 219900 },
//     ],
//     isLatest: false,
//   },
//   {
//     id: 10,
//     infoId: 10,
//     name: "iPhone 15",
//     status: "Brand New",
//     basePrice: 179900,
//     stock: 5,
//     img: iphone15,
//     colors: ["Red", "Black", "White"],
//     storages: [
//       { option: "128GB", price: 179900 },
//       { option: "256GB", price: 199900 },
//     ],
//     isLatest: false,
//   },
//   {
//     id: 11,
//     infoId: 11,
//     name: "iPhone 14",
//     status: "Pre Owned",
//     basePrice: 39900,
//     stock: 5,
//     img: iphone14,
//     colors: ["Black", "White", "Red"],
//     storages: [
//       { option: "64GB", price: 39900 },
//       { option: "128GB", price: 44900 },
//     ],
//     isLatest: false,
//   },
//   {
//     id: 12,
//     infoId: 12,
//     name: "iPhone SE 2",
//     status: "Pre Owned",
//     basePrice: 39900,
//     stock: 5,
//     img: iphoneSE2,
//     colors: ["Black", "White", "Red"],
//     storages: [
//       { option: "64GB", price: 39900 },
//       { option: "128GB", price: 44900 },
//     ],
//     isLatest: false,
//   },

//   // Additional pre-owned phones: 15, 14 Pro, 13
//   {
//     id: 13,
//     infoId: 13,
//     name: "iPhone 15",
//     status: "Pre Owned",
//     basePrice: 149900,
//     stock: 5,
//     img: iphone15,
//     colors: ["Black", "White"],
//     storages: [
//       { option: "128GB", price: 149900 },
//       { option: "256GB", price: 169900 },
//     ],
//     isLatest: false,
//   },
//   {
//     id: 14,
//     infoId: 14,
//     name: "iPhone 14 Pro",
//     status: "Pre Owned",
//     basePrice: 119900,
//     stock: 5,
//     img: iphone14pro,
//     colors: ["Graphite", "Silver"],
//     storages: [
//       { option: "128GB", price: 119900 },
//       { option: "256GB", price: 139900 },
//     ],
//     isLatest: false,
//   },
//   {
//     id: 15,
//     infoId: 15,
//     name: "iPhone 13",
//     status: "Brand New",
//     basePrice: 89900,
//     stock: 5,
//     img: iphone13,
//     colors: ["Midnight", "Starlight"],
//     storages: [
//       { option: "128GB", price: 89900 },
//       { option: "256GB", price: 109900 },
//     ],
//     isLatest: false,
//   },
// ];




const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const phones = [
  
];

(async function replaceWithBackendPhones() {
  try {
    const res = await fetch(`${API_URL}/phones`);
    if (!res.ok) {
      console.warn(`phones.jsx: backend responded ${res.status} — keeping fallback data`);
      return;
    }
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      console.warn("phones.jsx: backend returned no array — keeping fallback data");
      return;
    }

    const normalized = data.map((p) => {
      const item = p && typeof p.toObject === "function" ? p.toObject() : p;
      return {
        id: item.id ?? item._id ?? undefined,
        infoId: item.infoId ?? item.info_id ?? undefined,
        status: item.status ?? "",
        name: item.name ?? item.title ?? "Unnamed",
        basePrice: Number(item.basePrice ?? item.price ?? 0),
        img: item.img ?? (Array.isArray(item.images) && item.images[0]) ?? "",
        images: Array.isArray(item.images) ? item.images.slice(0, 5) : item.images ? [item.images] : [],
        colors: Array.isArray(item.colors) ? item.colors : [],
        storages: Array.isArray(item.storages) ? item.storages.map(s => ({
          option: s.option,
          price: Number(s.price ?? 0),
          stock: typeof s.stock === "number" ? s.stock : (s.stock ? Number(s.stock) : 0)
        })) : [],
        stock: typeof item.stock === "number" ? item.stock : 0,
        isLatest: Boolean(item.isLatest),
      };
    });

    phones.length = 0;
    phones.push(...normalized);
    console.log(`phones.jsx: replaced fallback with ${normalized.length} phones from backend`);
  } catch (err) {
    console.warn("phones.jsx: failed to fetch backend phones — keeping fallback data", err);
  }
})();
