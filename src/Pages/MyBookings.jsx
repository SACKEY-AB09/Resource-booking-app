import Userprofile from "../componemts/userprofile";
import "./mybookings.css";
import Date from "../componemts/Date.svg";
import { useEffect, useState } from "react";
import { API_BASE } from "../config/api";
import Header from "../componemts/header1.jsx";
import { useNavigate } from "react-router-dom";

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
    const token = localStorage.getItem("token");
    console.log(token);

    try {
      const response = await fetch(`${API_BASE}/bookings/my-bookings`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setBookings(data);
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
            <img src={Date} width={20} />
            <p>New Booking</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
