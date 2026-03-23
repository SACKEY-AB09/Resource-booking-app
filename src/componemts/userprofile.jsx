import { useState } from "react";
import { Link } from "react-router-dom";

const Userprofile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="user-header__right">
      <button
        type="button"
        className="user-header__profile-btn"
        aria-label="Open profile menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </button>
      {menuOpen && (
        <div className="user-header__menu" role="menu">
          <button type="button" className="user-header__menu-item">
            <span className="user-header__menu-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <span>View Profile</span>
          </button>
          <button type="button" className="user-header__menu-item">
            <span className="user-header__menu-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 .6 1.65 1.65 0 0 0-.33 1.82l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 15 8.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z" />
              </svg>
            </span>
            <span>Settings</span>
          </button>
          {/* <button onClick={() => navigate("/mybookings")}>
            <span className="user-header__menu-item">My bookings</span>
          </button> */}
          <Link
            to="/login"
            className="user-header__menu-item user-header__menu-item--logout"
          >
            <span className="user-header__menu-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M10 17l5-5-5-5" />
                <path d="M15 12H3" />
                <path d="M21 19V5a2 2 0 0 0-2-2h-4" />
              </svg>
            </span>
            <span>Log Out</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Userprofile;
