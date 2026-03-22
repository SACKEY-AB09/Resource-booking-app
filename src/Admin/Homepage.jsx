import { useEffect, useState } from "react";
import Header from "./Components/Header";
import MiniCard from "./Components/MiniCard";
import styles from "./admin_css.module.css";

const Homepage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);

      const response = await fetch(
        "https://resource-booking-backend.onrender.com/api/bookings",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();
      console.log(data || "none");

      if (response.ok) {
        setBookings(data);
      } else if (response.status == 401) {
        setError("Session Expired. Please login again");
      } else {
        setError(data.message || "Could not fetch bookings");
      }
    } catch (err) {
      setError("Could not connect to server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <Header screen="Resource booking" username="SpongeBob" panel="Admin" />
      <div className={styles.container}>
        <h3>Resource Creation</h3>
        <small>Manage all resource bookings</small>
        <div className={styles.minicards}>
          <MiniCard heading="Total Bookings" num={7} color="#BBD3F5" />
          <MiniCard heading="Pending" num={1} color="#EDF5BB" />
          <MiniCard heading="Confirmed" num={1} color="#BBF5BD" />
          <MiniCard heading="Completed" num={1} color="#FCDDFF" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
