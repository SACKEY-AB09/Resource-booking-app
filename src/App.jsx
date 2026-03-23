// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Intropage from './Pages/Intropage'
import UserHomepage from './Pages/userHomepage'
import AuthStack from '../Stacks/AuthStack'
import AdminStack from '../Stacks/AdminStack'
import Booking from './Pages/Booking.jsx'
import MyBookings from './Pages/MyBookings.jsx'
import UserNotifications from './Pages/UserNotifications.jsx'
import UserProfile from './Pages/UserProfile.jsx'
import UserSettings from './Pages/UserSettings.jsx'
import ResourceAvailable from './Admin/resourceavailable.jsx'
<<<<<<< HEAD
import ProtectedRoute from './Auth/ProtectedRoute.jsx'
=======
import MyBookings from './Pages/MyBookings.jsx'
import BookResource from './Pages/bookResource.jsx'
>>>>>>> 43aa2b65b500faecf4f1dde9e2a1a99df7687132

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intropage />} />
        <Route path="/login" element={<AuthStack />} />
        <Route path="/signup" element={<AuthStack />} />
<<<<<<< HEAD
        <Route element={<ProtectedRoute allowedRoles={["student", "faculty", "admin"]} />}>
          <Route path="/home" element={<UserHomepage />} />
          <Route path="/resource/:id" element={<Booking />} />
          <Route path="/bookings" element={<MyBookings />} />
          <Route path="/notifications" element={<UserNotifications />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/settings" element={<UserSettings />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/*" element={<AdminStack />} />
          <Route path="/resources" element={<ResourceAvailable />} />
        </Route>
=======
        <Route path="/home" element={<UserHomepage />} />
        <Route path="/resource/:id" element={<Booking />} />  
        <Route path="/admin/*" element={<AdminStack />} />
        <Route path="/resources" element={<ResourceAvailable />} /> 
        <Route path ="/resource/:id" element = {<Booking isAdmin ={true} />} />
        <Route path="/mybookings/" element={<MyBookings />} />
        <Route path="/mybookings/book" element={<BookResource />} />

>>>>>>> 43aa2b65b500faecf4f1dde9e2a1a99df7687132
      </Routes>
    </BrowserRouter>
  )
}

export default App;
