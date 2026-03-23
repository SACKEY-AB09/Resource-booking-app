<<<<<<< HEAD
import { apiRequest } from "../../Auth/authApi";

export async function apiFetch(path, options = {}) {
  return apiRequest(path, options);
=======
import { API_BASE } from "../../config/api.js";



export async function apiFetch(path, options = {}) {
 
  const headers = new Headers(options.headers || {});
  if (!headers.has("Content-Type") && options.body) {
    headers.set("Content-Type", "application/json");
  }
    

  let res = await fetch(`${API_BASE}${path}`, { ...options, headers, credentials: "include" });
 
   if (res.status === 401) {
    const refreshed = await tryRefreshToken();
    if (refreshed) {
      // Retry original request
      res = await fetch(`${API_BASE}${path}`, { 
        ...options, 
        headers, 
        credentials: "include" 
      });
    } else {
      // Refresh failed, redirect to login
      localStorage.clear();
      window.location.href = "/login";
      return;
    }
  }

const isJson = res.headers.get("content-type")?.includes("application/json");
const data = isJson ? await res.json().catch(() => null) : await res.text().catch(() => null);



  if (!res.ok) {
    const msg =
      (data && typeof data === "object" && (data.message || data.error)) ||
      (typeof data === "string" && data) ||
      `Request failed (${res.status})`;
    const err = new Error(msg);
    err.status = res.status;
    err.data = data;
    throw err;
  }

  return data;
>>>>>>> 43aa2b65b500faecf4f1dde9e2a1a99df7687132
}

async function tryRefreshToken() {
  try {
    const res = await fetch(`${API_BASE}/auth/refresh`, {
      method: "POST",
      credentials: "include", // sends refreshToken cookie
    });
    return res.ok;
  } catch {
    return false;
  }
}