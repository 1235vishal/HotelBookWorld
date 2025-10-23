import { useEffect, useState } from "react";
import {
  AiOutlineBook,
  AiOutlineDashboard,
  AiOutlineLogout,
  AiOutlineSetting,
} from "react-icons/ai";
import { FaHotel, FaUsers, FaBed } from "react-icons/fa"; // 🔸 added FaBed
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [adminEmail, setAdminEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
    } else {
      setAdminEmail("Admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="flex h-screen bg-base-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-orange-500 to-orange-600 text-white p-5 hidden md:flex flex-col justify-between shadow-lg">
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">Admin Panel</h2>
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => navigate("/admin/dashboard")}
                className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-orange-400 transition"
              >
                <AiOutlineDashboard /> Dashboard
              </button>
            </li>

            <li>
              <button
                onClick={() => navigate("/admin/manage-tours")}
                className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-orange-400 transition"
              >
                <FaHotel /> Manage Tours
              </button>
            </li>

            {/* 🔸 New Sidebar Item */}
            <li>
              <button
                onClick={() => navigate("/admin/manage-rooms")}
                className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-orange-400 transition"
              >
                <FaBed /> Manage Hotel Rooms
              </button>
            </li>

            <li>
              <button
                onClick={() => navigate("/admin/bookings")}
                className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-orange-400 transition"
              >
                <AiOutlineBook /> Manage Bookings
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/admin/users")}
                className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-orange-400 transition"
              >
                <FaUsers /> Users
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/admin/settings")}
                className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-orange-400 transition"
              >
                <AiOutlineSetting /> Settings
              </button>
            </li>
          </ul>
        </div>

        <button
          onClick={handleLogout}
          className="mt-8 bg-white text-orange-600 hover:bg-orange-100 transition font-semibold flex items-center justify-center gap-2 py-2 rounded-md"
        >
          <AiOutlineLogout /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="w-full bg-gradient-to-r from-orange-500 to-orange-600 p-4 shadow-md text-white flex justify-between items-center">
          <h1 className="text-xl font-bold">Welcome, {adminEmail}</h1>
          <button
            onClick={handleLogout}
            className="btn btn-sm bg-white text-orange-600 border-none hover:bg-orange-100"
          >
            <AiOutlineLogout className="mr-1" /> Logout
          </button>
        </nav>

        {/* Default Dashboard Section */}
        <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-white shadow-xl border-t-4 border-orange-500 hover:shadow-2xl transition">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h2 className="card-title text-orange-600">
                  <FaBed className="mr-2" /> Manage Hotel Rooms
                </h2>
                <span className="badge badge-outline text-orange-500">10</span>
              </div>
              <p>Add, edit, or delete hotel rooms and facilities.</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => navigate("/admin/manage-rooms")}
                  className="btn btn-sm bg-orange-500 hover:bg-orange-600 border-none text-white"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
