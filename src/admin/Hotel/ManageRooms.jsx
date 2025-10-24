
import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ManageRooms() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRooms = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/rooms");
      setRooms(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch rooms");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this room?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/rooms/${id}`);
      setRooms((prev) => prev.filter((room) => room.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete room");
    }
  };

  const handleEdit = (room) => {
    navigate(`/admin/rooms/edit/${room.id}`, { state: { room } });
  };

  if (loading) return <div className="p-8">Loading...</div>;

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

      {rooms.length === 0 ? (
        <div className="bg-white shadow rounded-lg p-6 text-center text-gray-500">
          No rooms added yet.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">Hotel Name</th>
                <th className="py-2 px-4">Room Title</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Max Adults</th>
                <th className="py-2 px-4">Max Children</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room, idx) => (
                <tr key={room.id} className="border-b hover:bg-orange-50">
                  <td className="py-2 px-4">{idx + 1}</td>
                  <td className="py-2 px-4">{room.hotel_name}</td>
                  <td className="py-2 px-4">{room.room_title}</td>
                  <td className="py-2 px-4">{room.price}</td>
                  <td className="py-2 px-4">{room.max_adults}</td>
                  <td className="py-2 px-4">{room.max_children}</td>
                  <td className="py-2 px-4 flex gap-2 justify-center">
                    <button
                      onClick={() => handleEdit(room)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded flex items-center gap-1"
                    >
                      <FaEdit /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(room.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded flex items-center gap-1"
                    >
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
