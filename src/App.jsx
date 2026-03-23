// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intropage from "./Pages/Intropage";
import UserHomepage from "./Pages/userHomepage";
import AuthStack from "../Stacks/AuthStack";
import AdminStack from "../Stacks/AdminStack";
import Booking from "./Pages/Booking.jsx";
import ResourceAvailable from "./Admin/resourceavailable.jsx";
import MyBookings from "./Pages/MyBookings.jsx";
import BookResource from "./Pages/bookResource.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intropage />} />
        <Route path="/login" element={<AuthStack />} />
        <Route path="/signup" element={<AuthStack />} />
        <Route path="/home" element={<UserHomepage />} />
        <Route path="/resource/:id" element={<Booking />} />
        <Route path="/admin/*" element={<AdminStack />} />
<<<<<<< HEAD
        <Route path="/resources" element={<ResourceAvailable />} /> 
        <Route path ="/resource/:id" element = {<Booking isAdmin ={true} />} />
=======
        <Route path="/resources" element={<ResourceAvailable />} />
        <Route path="/mybookings/" element={<MyBookings />} />
        <Route path="/mybookings/book" element={<BookResource />} />
>>>>>>> 1effbc9648ecf4fc2be27f83ae6bc3dc4494db95
      </Routes>
    </BrowserRouter>
  );
}

export default App;
