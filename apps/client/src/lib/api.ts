const BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export async function api(path: string, init?: RequestInit) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) },
    ...init,
  })
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}
