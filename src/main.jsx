import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AdminStack from '../Stacks/AdminStack.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthStack from '../Stacks/AuthStack.jsx'
import Intropage from './Pages/Intropage'
import Signup from './Pages/Signup'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intropage />} />
        <Route path="/login" element={<AuthStack />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/App" element={<App />} />
        <Route path="/Admin" element={<AdminStack />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
