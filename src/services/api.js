// src/services/api.js
const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export async function fetchPhones() {
  const res = await fetch(`${API_BASE}/phones`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    const payload = await res.json().catch(() => null);
    const msg = payload?.error || `Fetch failed: ${res.status}`;
    const err = new Error(msg);
    err.status = res.status;
    throw err;
  }
  return res.json();
}
