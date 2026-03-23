import Header from "../componemts/header1";
import "./booking.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./booking.css";
import { API_BASE } from "../config/api";

// Duration options in hours
const DURATION_OPTIONS = [0.5, 1, 1.5, 2, 2.5, 3, 4, 6, 8];

// Time slots every 30 min
const TIME_SLOTS = Array.from({ length: 32 }, (_, i) => {
  const totalMin = i * 30;
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  const label = `${h % 12 === 0 ? 12 : h % 12}:${m === 0 ? "00" : "30"} ${h < 12 ? "AM" : "PM"}`;
  const value = `${String(h).padStart(2, "0")}:${m === 0 ? "00" : "30"}`;
  return { label, value };
});

function formatDatetimeLocal(dateStr, timeStr) {
  // dateStr: YYYY-MM-DD, timeStr: HH:MM
  return `${dateStr}T${timeStr}:00`;
}

function addHours(dateStr, timeStr, hours) {
  const dt = new Date(`${dateStr}T${timeStr}:00`);
  dt.setMinutes(dt.getMinutes() + hours * 60);
  const pad = (n) => String(n).padStart(2, "0");
  const yyyy = dt.getFullYear();
  const mm = pad(dt.getMonth() + 1);
  const dd = pad(dt.getDate());
  const hh = pad(dt.getHours());
  const min = pad(dt.getMinutes());
  return `${yyyy}-${mm}-${dd}T${hh}:${min}:00`;
}

function getTodayStr() {
  const d = new Date();
  return d.toISOString().split("T")[0];
}

const BookResource = ({ isAdmin = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  // const resourceFromState = location.state?.resource;

  // Resource fetched from backend (fallback to state)
  const [resources, setResources] = useState([]);
  // const [loadingResource, setLoadingResource] = useState(!resourceFromState);

  const [resource, setResource] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState("");

  // Fetch resource info if not passed via state
  // useEffect(() => {
  //   if (resourceFromState) return;
  //   setLoadingResource(true);
  //   fetch(`${API_BASE}/resources/${id}`)
  //     .then((r) => r.json())
  //     .then((data) => setResource(data))
  //     .catch(() => setResource(null))
  //     .finally(() => setLoadingResource(false));
  // }, [id, resourceFromState]);

  //fetching all resources
  const fetchResources = async () => {
    try {
      const response = await fetch(`${API_BASE}/resources`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setResources(data);
      }
    } catch (err) {
      setError("Could not fetch resources");
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);
  // Compute end time display for user preview
  const endTimePreview =
    date && time && duration ? addHours(date, time, Number(duration)) : null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!date || !time || !duration) {
      setMessage({ type: "error", text: "Please fill in all fields." });
      return;
    }

    const start_time = formatDatetimeLocal(date, time);
    const end_time = addHours(date, time, Number(duration));

    setSubmitting(true);
    setMessage(null);

    try {
      const res = await fetch(`${API_BASE}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        body: JSON.stringify({
          resource_id: Number(resource),
          start_time,
          end_time,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Booking failed");
      }

      const result = await res.json();
      setMessage({
        type: "success",
        text:
          result.message || "Booking created successfully — awaiting approval.",
      });
      setDate("");
      setTime("");
      setDuration("");
    } catch (err) {
      setMessage({
        type: "error",
        text: err.message || "Could not submit booking.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // const resourceName = resource?.name || `Resource #${id}`;
  const user = JSON.parse(localStorage.getItem("user")) || {};
  console.log(resource, name);

  return (
    <div className="bp-root">
      <Header name={user?.name} />
      <div className="container">
        <div className="headtext">
          <h3>Book Resource</h3>
          <small>Fill in the details to book "Selection"</small>
        </div>
        <div className="section1">
          <select
            className="select"
            value={resource}
            onChange={(e) => {
              const selected = e.target.options[e.target.selectedIndex];
              setResource(e.target.value);
              setName(selected.text);
            }}
            required
          >
            <option className="option">--Select Resource to book--</option>
            {resources.map((resource) => (
              <option
                className="option"
                value={resource.resource_id}
                key={resource.resource_id}
              >
                {resource.resource_name}
              </option>
            ))}
          </select>
        </div>
        <div className="bp-form-card">
          <div className="bp-form-card__head">
            <h2>Book Resource</h2>
            <p>
              Select your preferred date, time, and duration for
              <strong> {name}</strong>
            </p>
          </div>

          <form className="bp-form" onSubmit={handleSubmit}>
            {/* Date */}
            <div className="bp-field">
              <label htmlFor="bp-date">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Date
              </label>
              <input
                id="bp-date"
                type="date"
                min={getTodayStr()}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            {/* Time — select */}
            <div className="bp-field">
              <label htmlFor="bp-time">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Start Time
              </label>
              <select
                id="bp-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="" disabled>
                  Choose a time slot
                </option>
                {TIME_SLOTS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration — select */}
            <div className="bp-field">
              <label htmlFor="bp-duration">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 8 14" />
                </svg>
                Duration
              </label>
              <select
                id="bp-duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
              >
                <option value="" disabled>
                  Choose duration
                </option>
                {DURATION_OPTIONS.map((h) => (
                  <option key={h} value={h}>
                    {h < 1 ? "30 minutes" : h === 1 ? "1 hour" : `${h} hours`}
                  </option>
                ))}
              </select>
            </div>

            {/* Booking summary preview */}
            {endTimePreview && (
              <div className="bp-summary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  Booking window:{" "}
                  <strong>
                    {formatDatetimeLocal(date, time)
                      .replace("T", " ")
                      .slice(0, 16)}
                  </strong>
                  {" → "}
                  <strong>
                    {endTimePreview.replace("T", " ").slice(0, 16)}
                  </strong>
                </span>
              </div>
            )}

            {/* Pending approval note */}
            <div className="bp-notice">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Bookings require admin approval before they are confirmed.
            </div>

            {/* Message */}
            {message && (
              <div className={`bp-message bp-message--${message.type}`}>
                {message.type === "success" ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                )}
                {message.text}
              </div>
            )}

            <div className="bp-actions">
              <button
                type="button"
                className="bp-btn bp-btn--cancel"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bp-btn bp-btn--submit"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <span className="bp-spinner" />
                    Submitting…
                  </>
                ) : (
                  "Submit Booking"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookResource;
