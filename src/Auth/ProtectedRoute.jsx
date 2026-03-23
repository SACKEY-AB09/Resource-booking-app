import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { refreshSession } from "./authApi";
import { getStoredSession, isAllowedRole } from "./session";

const REFRESH_INTERVAL_MS = 12 * 60 * 1000;

export default function ProtectedRoute({ allowedRoles = [] }) {
  const [status, setStatus] = useState("checking");
  const session = getStoredSession();

  useEffect(() => {
    let active = true;

    async function validate() {
      if (!session.isAuthenticated || !isAllowedRole(session.role, allowedRoles)) {
        if (active) setStatus("denied");
        return;
      }

      const ok = await refreshSession();
      if (active) {
        setStatus(ok ? "allowed" : "denied");
      }
    }

    validate();

    const timer = window.setInterval(() => {
      refreshSession().then((ok) => {
        if (active && !ok) {
          setStatus("denied");
        }
      });
    }, REFRESH_INTERVAL_MS);

    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, [allowedRoles, session.isAuthenticated, session.role]);

  if (status === "checking") {
    return <div style={{ padding: "2rem", textAlign: "center" }}>Checking session...</div>;
  }

  if (status !== "allowed") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
