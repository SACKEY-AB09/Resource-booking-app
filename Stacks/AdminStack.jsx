import {Routes, Route} from 'react-router-dom'
import Homepage from '../src/Admin/Homepage'
import ResourceAvailable from '../src/Admin/resourceavailable'
import Booking from '../src/Pages/Booking'


const AdminStack=()=>{
    return (<Routes>
        <Route path='/' element={<Homepage />} />
        <Route path = '/resources' element = {<ResourceAvailable />} />
        <Route path ="/resource/:id" element = {<Booking isAdmin ={true} />} />
    </Routes>)
}

export default AdminStack