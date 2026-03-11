import { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import './booking.css';

/**
 * Booking page for a single resource.
 * User route: /resource/:id
 * Admin route: /admin/resource/:id
 * Form: User ID, Date, Time, Duration (Hours)
 */
function Booking({ isAdmin = false }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const resourceFromState = location.state?.resource;

  const [userId, setUserId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const resourceId = id;
  const resourceName = resourceFromState?.name || 'Selection';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId || !date || !time || !duration) {
      setMessage({ type: 'error', text: 'Please fill in all fields.' });
      return;
    }
    if (Number.isNaN(Number(duration)) || Number(duration) <= 0) {
      setMessage({ type: 'error', text: 'Duration must be a positive number.' });
      return;
    }
    setSubmitting(true);
    setMessage(null);
    try {
      const API_BASE = import.meta.env.VITE_API_URL || '/api';
      const res = await fetch(`${API_BASE}/resource/${resourceId}/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resourceId,
          userId,
          date,
          time,
          duration: Number(duration),
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || 'Booking failed');
      }
      setMessage({ type: 'success', text: 'Booking submitted successfully.' });
      setUserId('');
      setDate('');
      setTime('');
      setDuration('');
    } catch (err) {
      setMessage({ type: 'error', text: err.message || 'Could not submit booking.' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="booking-page">
      <header className="booking-header">
        <h1 className="booking-header__title">Resource Booking</h1>
        <div className="booking-header__right">
          {isAdmin && (
            <span className="booking-header__admin">
              <svg className="booking-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Admin Panel
            </span>
          )}
          <span className="booking-header__user">
            <svg className="booking-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            {isAdmin ? 'Akwasi' : 'User'}
          </span>
        </div>
      </header>

      <main className="booking-main">
        <div className="booking-panel">
          <h2 className="booking-panel__title">Book Resource</h2>
          <p className="booking-panel__subtitle">
            Fill in the details to book &quot;{resourceName}&quot;
          </p>
          <div className="booking-panel__resource-display">
            {resourceFromState ? (
              <div className="booking-panel__resource-info">
                <strong>{resourceFromState.name}</strong>
                {resourceFromState.location && <span> • {resourceFromState.location}</span>}
                {resourceFromState.capacity && <span> • Capacity: {resourceFromState.capacity}</span>}
              </div>
            ) : (
              <span className="booking-panel__resource-placeholder">Resource #{resourceId}</span>
            )}
          </div>

          <div className="booking-form-card">
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="booking-field">
                <label htmlFor="userId">User ID</label>
                <input
                  id="userId"
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="Enter your user ID"
                  required
                />
              </div>
              <div className="booking-field">
                <label htmlFor="date">
                  <svg className="booking-field__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="booking-field">
                <label htmlFor="time">
                  <svg className="booking-field__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Time
                </label>
                <input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
              <div className="booking-field">
                <label htmlFor="duration">
                  <svg className="booking-field__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Duration (Hours)
                </label>
                <input
                  id="duration"
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="e.g. 2"
                  required
                />
              </div>
              {message && (
                <p className={`booking-message booking-message--${message.type}`}>
                  {message.text}
                </p>
              )}
              <div className="booking-form__actions">
                <button type="button" className="booking-btn booking-btn--cancel" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" className="booking-btn booking-btn--submit" disabled={submitting}>
                  {submitting ? 'Submitting…' : 'Submit Booking'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Booking;
