import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default function ManageRooms() {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-orange-600">
          Manage Hotel Rooms
        </h1>
        <button
          onClick={() => navigate("/admin/add-room")}
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md transition"
        >
          <FaPlus /> Add Room
        </button>
      </div>

      {/* Later add room list table here */}
      <div className="bg-white shadow rounded-lg p-6 text-center text-gray-500">
        No rooms added yet.
      </div>
    </div>
  );
}
