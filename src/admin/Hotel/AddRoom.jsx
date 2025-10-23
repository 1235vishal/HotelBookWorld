import { useState } from "react";
import axios from "axios";

export default function AddRoom() {
  const [formData, setFormData] = useState({
    hotel_name: "",
    address: "",
    city: "",
    country: "",
    rating: "",
    reviews: "",
    map_url: "",
    room_title: "",
    board_type: "",
    max_adults: "",
    max_children: "",
    price: "",
    total: "",
    currency: "AED",
    policies: "",
    room_description: "",
    facilities: [],
  });

  const [hotelImages, setHotelImages] = useState([]);

  const facilitiesList = [
    "Free WiFi",
    "Swimming Pool",
    "Parking",
    "Fitness Center",
    "Restaurant",
    "Room Service",
    "Air Conditioning",
    "Spa & Wellness",
    "Airport Shuttle",
    "Family Rooms",
    "Non-smoking Rooms",
    "Pet Friendly",
    "Bar",
    "24-hour Front Desk",
    "Laundry Service",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (value) => {
    setFormData((prev) => {
      const selected = prev.facilities.includes(value)
        ? prev.facilities.filter((f) => f !== value)
        : [...prev.facilities, value];
      return { ...prev, facilities: selected };
    });
  };

  const handleFileChange = (e) => {
    setHotelImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "facilities") {
        data.append(key, JSON.stringify(value));
      } else {
        data.append(key, value);
      }
    });
    hotelImages.forEach((file) => data.append("hotel_images", file));

    try {
      await axios.post("http://localhost:5000/addroom", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Room uploaded successfully!");
      setFormData({
        hotel_name: "",
        address: "",
        city: "",
        country: "",
        rating: "",
        reviews: "",
        map_url: "",
        room_title: "",
        board_type: "",
        max_adults: "",
        max_children: "",
        price: "",
        total: "",
        currency: "AED",
        policies: "",
        room_description: "",
        facilities: [],
      });
      setHotelImages([]);
    } catch (error) {
      console.error(error);
      alert("Error uploading room.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl my-10">
      <h1 className="text-2xl font-bold text-orange-600 mb-6 text-center">
        Add New Room / Hotel
      </h1>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Hotel Details */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Hotel Details</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {["hotel_name", "address", "city", "country"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field.replace("_", " ").toUpperCase()}
                value={formData[field]}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-orange-400"
                required
              />
            ))}
            <input
              type="number"
              name="rating"
              placeholder="Rating (0-5)"
              step="0.1"
              min="0"
              max="5"
              value={formData.rating}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="number"
              name="reviews"
              placeholder="Number of Reviews"
              value={formData.reviews}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="url"
              name="map_url"
              placeholder="Map URL"
              value={formData.map_url}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="border rounded-lg p-2 w-full"
            />
          </div>
        </section>

        {/* Room Details */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Room Details</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="room_title"
              placeholder="Room Title"
              value={formData.room_title}
              onChange={handleChange}
              required
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="text"
              name="board_type"
              placeholder="Board Type (Room Only, Half Board)"
              value={formData.board_type}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="number"
              name="max_adults"
              placeholder="Max Adults"
              min="1"
              value={formData.max_adults}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
              required
            />
            <input
              type="number"
              name="max_children"
              placeholder="Max Children"
              min="0"
              value={formData.max_children}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="number"
              name="price"
              placeholder="Price (Per Night)"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
              required
            />
            <input
              type="number"
              name="total"
              placeholder="Total Price (for stay)"
              step="0.01"
              value={formData.total}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="text"
              name="currency"
              placeholder="Currency"
              value={formData.currency}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
            />
            <textarea
              name="policies"
              rows="3"
              placeholder="Policies (separate with commas)"
              value={formData.policies}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
            ></textarea>
          </div>
        </section>

        {/* Room Description */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Room Description</h2>
          <textarea
            name="room_description"
            rows="6"
            placeholder="Full Room Description"
            value={formData.room_description}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full"
          ></textarea>
        </section>

        {/* Facilities */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Hotel Facilities</h2>
          <div className="grid md:grid-cols-3 gap-2">
            {facilitiesList.map((facility) => (
              <label
                key={facility}
                className="flex items-center gap-2 border rounded-lg p-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.facilities.includes(facility)}
                  onChange={() => handleCheckbox(facility)}
                />
                {facility}
              </label>
            ))}
          </div>
        </section>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Upload Room
        </button>
      </form>
    </div>
  );
}
