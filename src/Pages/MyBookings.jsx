import Userprofile from "../componemts/userprofile";
import "./mybookings.css";
import Cal from "../componemts/Date.svg";
import { useEffect, useState } from "react";
import { API_BASE } from "../config/api";
import Header from "../componemts/header1.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const MyBookings = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");
  //navigation
  const navigate = useNavigate();

  //function to receive data from backend
  const fetchBookings = async () => {
    // setLoading(false);
    // const token = localStorage.getItem("token");
    // console.log(token);

    try {
      const response = await fetch(`${API_BASE}/bookings/my-bookings`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setBookings(data);
        console.log(bookings);
      } else if (response.status == 401) {
        setError("Session Expired. Please Log in again.");
      } else {
        setError(data.message || "Could not load bookings");
      }
    } catch (err) {
      setError("Could not connect to server");
    } finally {
      setLoading(false);
    }
  };

  //calling function on default
  useEffect(() => {
    fetchBookings();
  }, []);

  //Date and time formatting
  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      weekday: "short", // Mon
      day: "numeric", // 31
      month: "short", // Mar
      year: "numeric", // 2026
    });
  };

  const formatTime = (dateStr) => {
    return new Date(dateStr).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div>
      <Header name={user?.name} />
      <div className="container">
        <div className="section1">
          <div className="headtext">
            <h2>My Bookings</h2>
            <small>Manage resources and approve bookings</small>
          </div>
          <button
            className="newbooking__btn"
            onClick={() => navigate("/mybookings/book")}
          >
            <img src={Cal} width={20} />
            <p>New Booking</p>
          </button>
        </div>
        <div className="section2">
          {bookings.map((booking) => (
            <div key={booking.booking_id} className="booking">
              <span className={`status ${booking.status}`}>
                {booking.status}
              </span>
              <h3>{booking.resource_name}</h3>
              {/* <a href={booking.location} target="_blank" rel="noreferrer">
                📍 View Location
              </a> */}
              <p className="info">Capacity: {booking.capacity}</p>
              <p className="info">{formatDate(booking.start_time)}</p>
              <p className="info">
                {formatTime(booking.start_time)} -{" "}
                {formatTime(booking.end_time)}
              </p>
              <button className="button">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
