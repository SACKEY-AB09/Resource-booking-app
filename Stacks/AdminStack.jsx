import {Routes, Route} from 'react-router-dom'
import Homepage from '../src/Admin/Homepage'
import ResourceAvailable from '../src/Admin/resourceavailable'
<<<<<<< HEAD
import AdminProfile from '../src/Admin/AdminProfile'
import AdminSettings from '../src/Admin/AdminSettings'
=======
import Booking from '../src/Pages/Booking'
>>>>>>> 43aa2b65b500faecf4f1dde9e2a1a99df7687132


const AdminStack=()=>{
    return (<Routes>
        <Route path='/' element={<Homepage />} />
        <Route path = '/resources' element = {<ResourceAvailable />} />
<<<<<<< HEAD
        <Route path = '/profile' element = {<AdminProfile />} />
        <Route path = '/settings' element = {<AdminSettings />} />
=======
        <Route path ="/resource/:id" element = {<Booking isAdmin ={true} />} />
>>>>>>> 43aa2b65b500faecf4f1dde9e2a1a99df7687132
    </Routes>)
}

export default AdminStack
