import { useEffect, useMemo, useState } from "react";
import BookingApprovals from "./components/BookingApprovals";
import CreateResource from "./components/CreateResource";
import "./adminHomepage.css";
import AnalyticsBoard from "./components/analyticsBoard";
import Footer from "../componemts/footer";
import ConfirmDialog from "../componemts/ConfirmDialog";
import AdminTopbar from "./components/AdminTopbar";
import { logoutSession } from "../Auth/authApi";

const TABS = [
  { id: "approvals", label: "Booking Approvals" },
  { id: "create", label: "Create Resource" },
];

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("approvals");
  const [confirmOpen, setConfirmOpen] = useState(false);

  const adminName = useMemo(() => {
    const fromStorage =
      localStorage.getItem("admin_name") ||
      localStorage.getItem("adminName") ||
      "";
    return (fromStorage || "Admin").trim();
  }, []);

  return (
    <div className="ah-root">
      <AdminTopbar adminName={adminName} onLogout={() => setConfirmOpen(true)} />
      <AnalyticsBoard />

<<<<<<< HEAD
=======
          <span 
  className="ah-chip" 
  onClick={() => navigate('/Admin/resources')}
  style={{ cursor: 'pointer' }}
>
  Resource available
</span>
   <div className="ah-admin-wrap">
  <button
    type="button"
    className="ah-admin"
    onClick={() => setMenuOpen((open) => !open)}
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
    {adminName}
  </button>

  {menuOpen && (
    <div className="ah-admin-menu" role="menu">
      <button type="button" className="ah-admin-menu__item">
        <span className="ah-admin-menu__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </span>
        <span>View Profile</span>
      </button>

      <button type="button" className="ah-admin-menu__item">
        <span className="ah-admin-menu__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 .6 1.65 1.65 0 0 0-.33 1.82l-.06.06a2 2 0 1 1-2.83-2.83l.06.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 15 8.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z" />
          </svg>
        </span>
        <span>Settings</span>
      </button>

      <button 
        // to="/login" 
        className="ah-admin-menu__item ah-admin-menu__item--logout"
        onClick={() => {
          localStorage.clear(); // ← clears all saved data on logout
          setMenuOpen(false);
          navigate('/login', {replace: true})

        }}
      >
        <span className="ah-admin-menu__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 17l5-5-5-5" />
            <path d="M15 12H3" />
            <path d="M21 19V5a2 2 0 0 0-2-2h-4" />
          </svg>
        </span>
        <span>Log Out</span>
      </button>
    </div>
  )}
</div> 

          
</div>
</header>
<AnalyticsBoard />


      {/* Page */}
>>>>>>> 43aa2b65b500faecf4f1dde9e2a1a99df7687132
      <main className="ah-main">
        <div className="ah-page">
          <div className="ah-title">
            <h1>Admin Panel</h1>
            <p>Manage resources and approve bookings</p>
          </div>

          <nav className="ah-tabs" aria-label="Admin tabs">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`ah-tab ${activeTab === t.id ? "ah-tab--active" : ""}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </nav>

          <section className="ah-content">
            {activeTab === "approvals" && (
              <BookingApprovals />
            )}
            {activeTab === "create" && (
              <CreateResource />
            )}
          </section>
        </div>
      </main>

      <Footer />
      <ConfirmDialog
        open={confirmOpen}
        title="Log out from admin?"
        message="You will leave the admin dashboard and need to sign in again to continue managing resources."
        confirmLabel="Log Out"
        cancelLabel="Stay Here"
        tone="warning"
        onConfirm={() => logoutSession()}
        onCancel={() => setConfirmOpen(false)}
      />
    </div>
  );
};

export default Homepage;
