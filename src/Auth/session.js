const STORAGE_KEYS = {
  name: "user_name",
  role: "user_role",
  id: "user_id",
  adminName: "admin_name",
};

export function getStoredSession() {
  const role = localStorage.getItem(STORAGE_KEYS.role) || "";
  const name =
    localStorage.getItem(STORAGE_KEYS.name) ||
    localStorage.getItem(STORAGE_KEYS.adminName) ||
    "";
  const userId = localStorage.getItem(STORAGE_KEYS.id) || "";

  return {
    isAuthenticated: Boolean(role),
    role,
    name,
    userId,
  };
}

export function storeSession(user) {
  if (!user) return;

  if (user.user_id != null) {
    localStorage.setItem(STORAGE_KEYS.id, String(user.user_id));
  }

  if (user.name) {
    localStorage.setItem(STORAGE_KEYS.name, user.name);
    if (user.role === "admin") {
      localStorage.setItem(STORAGE_KEYS.adminName, user.name);
    } else {
      localStorage.removeItem(STORAGE_KEYS.adminName);
    }
  }

  if (user.role) {
    localStorage.setItem(STORAGE_KEYS.role, user.role);
  }
}

export function clearSession() {
  Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key));
}

export function isAllowedRole(role, allowedRoles = []) {
  if (!allowedRoles.length) return true;
  return allowedRoles.includes(role);
}
