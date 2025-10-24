

import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import AdminDashboard from "./admin/AdminDashboard";
import AdminLogin from "./admin/AdminLogin";
import AdminRegister from "./admin/AdminRegister";
import ForgotPassword from "./admin/ForgotPassword";
import AddRoom from "./admin/Hotel/AddRoom";
import ManageRooms from "./admin/Hotel/ManageRooms";
import ResetPassword from "./admin/ResetPassword";

import Navbar from "./pages/Common/Navbar"; // 👈 import your Navbar component
import Cruises from "./pages/Cruises";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import RoomDetail from "./pages/Hotels/RoomDetail";
import Tours from "./pages/Tours";
import Visas from "./pages/Visas";

import R1c1 from "./pages/Tours/R1c1";

import Forget from "./Users/Forget";
import Login from "./Users/Login";
import Reset from "./Users/Reset";
import Signup from "./Users/SignUp";

// Create a wrapper so we can use useLocation()
function AppWrapper() {
  const location = useLocation();

  // Check if current path starts with "/admin"
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Show Navbar only if NOT on an admin route */}
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/roomdetail" element={<RoomDetail />} />
        <Route path="/visas" element={<Visas />} />
        <Route path="/cruises" element={<Cruises />} />
        <Route path="/tours/R1c1" element={<R1c1 />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />

        {/* Admin pages */}
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin/reset-password" element={<ResetPassword />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-rooms" element={<ManageRooms />} />
        <Route path="/admin/add-room" element={<AddRoom />} />
        <Route path="/admin/rooms/edit/:roomId" element={<AddRoom />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
