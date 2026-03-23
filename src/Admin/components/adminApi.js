import { apiRequest } from "../../Auth/authApi";

export async function apiFetch(path, options = {}) {
  return apiRequest(path, options);
}

