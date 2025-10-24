import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddRoom() {
  const navigate = useNavigate();
  const { roomId } = useParams(); // roomId exists if editing

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
    availability: "Available", // ✅ new field
  });

  const [hotelImages, setHotelImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);

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

  // Fetch room data if editing
  //   useEffect(() => {
  //     if (roomId) {
  //       axios
  //         .get(`http://localhost:5000/api/rooms/${roomId}`)
  //         .then((res) => {
  //           const room = res.data;

  //           // Parse facilities safely
  //           let facilities = [];
  //           if (room.facilities) {
  //             try {
  //               facilities = Array.isArray(room.facilities)
  //                 ? room.facilities
  //                 : JSON.parse(room.facilities);
  //             } catch (err) {
  //               console.error("Error parsing facilities:", err);
  //             }
  //           }

  //           // Pre-fill form
  //           setFormData({
  //             hotel_name: room.hotel_name || "",
  //             address: room.address || "",
  //             city: room.city || "",
  //             country: room.country || "",
  //             rating: room.rating || "",
  //             reviews: room.reviews || "",
  //             map_url: room.map_url || "",
  //             room_title: room.room_title || "",
  //             board_type: room.board_type || "",
  //             max_adults: room.max_adults || "",
  //             max_children: room.max_children || "",
  //             price: room.price || "",
  //             total: room.total || "",
  //             currency: room.currency || "AED",
  //             policies: room.policies || "",
  //             room_description: room.room_description || "",
  //             facilities,
  //           });

  //           // Set existing images
  //           const imagesArray =
  //             room.hotel_images && room.hotel_images.length > 0
  //               ? room.hotel_images.split(",").filter(Boolean)
  //               : [];
  //           setExistingImages(imagesArray);
  //         })
  //         .catch((err) => console.error("Error fetching room:", err));
  //     }
  //   }, [roomId]);

  // useEffect(() => {
  //   if (roomId) {
  //     axios
  //       .get(`http://localhost:5000/api/rooms/${roomId}`)
  //       .then((res) => {
  //         const room = res.data;

  //         // Facilities - parse safely
  //         let facilities = [];
  //         if (room.facilities) {
  //           try {
  //             facilities = Array.isArray(room.facilities)
  //               ? room.facilities
  //               : JSON.parse(room.facilities);
  //           } catch (err) {
  //             console.error("Error parsing facilities:", err);
  //           }
  //         }

  //         // Images - split by comma if string
  //         const imagesArray =
  //           room.hotel_images && room.hotel_images.length > 0
  //             ? room.hotel_images.split(",").filter(Boolean)
  //             : [];

  //         setFormData({
  //           hotel_name: room.hotel_name || "",
  //           address: room.address || "",
  //           city: room.city || "",
  //           country: room.country || "",
  //           rating: room.rating || "",
  //           reviews: room.reviews || "",
  //           map_url: room.map_url || "",
  //           room_title: room.room_title || "",
  //           board_type: room.board_type || "",
  //           max_adults: room.max_adults || "",
  //           max_children: room.max_children || "",
  //           price: room.price || "",
  //           total: room.total || "",
  //           currency: room.currency || "AED",
  //           policies: room.policies || "",
  //           room_description: room.room_description || "",
  //           facilities, // now an array
  //         });

  //         setExistingImages(imagesArray);
  //       })
  //       .catch((err) => console.error("Error fetching room:", err));
  //   }
  // }, [roomId]);

  //   useEffect(() => {
  //     if (roomId) {
  //       axios
  //         .get(`http://localhost:5000/api/rooms/${roomId}`)
  //         .then((res) => {
  //           const room = res.data;

  //           // Facilities - ensure always an array
  //           let facilities = [];
  //           if (room.facilities) {
  //             try {
  //               facilities = Array.isArray(room.facilities)
  //                 ? room.facilities
  //                 : JSON.parse(room.facilities); // parse JSON string
  //             } catch (err) {
  //               console.error("Error parsing facilities:", err);
  //               facilities = [];
  //             }
  //           }

  //           // Images - split by comma if string
  //           const imagesArray =
  //             room.hotel_images && room.hotel_images.length > 0
  //               ? room.hotel_images.split(",").filter(Boolean)
  //               : [];

  //           // Pre-fill all form data
  //           setFormData({
  //             hotel_name: room.hotel_name || "",
  //             address: room.address || "",
  //             city: room.city || "",
  //             country: room.country || "",
  //             rating: room.rating || "",
  //             reviews: room.reviews || "",
  //             map_url: room.map_url || "",
  //             room_title: room.room_title || "",
  //             board_type: room.board_type || "",
  //             max_adults: room.max_adults || "",
  //             max_children: room.max_children || "",
  //             price: room.price || "",
  //             total: room.total || "",
  //             currency: room.currency || "AED",
  //             policies: room.policies || "",
  //             room_description: room.room_description || "",
  //             facilities, // ✅ array for checkboxes
  //           });

  //           setExistingImages(imagesArray);
  //         })
  //         .catch((err) => console.error("Error fetching room:", err));
  //     }
  //   }, [roomId]);

  //   useEffect(() => {
  //     if (roomId) {
  //       axios
  //         .get(`http://localhost:5000/api/rooms/${roomId}`)
  //         .then((res) => {
  //           const room = res.data;

  //           // ✅ Facilities: Ensure it's an array
  //           const facilities = Array.isArray(room.facilities)
  //             ? room.facilities
  //             : (() => {
  //                 try {
  //                   return JSON.parse(room.facilities);
  //                 } catch {
  //                   return (room.facilities || "")
  //                     .split(",")
  //                     .map((f) => f.trim());
  //                 }
  //               })();

  //           // ✅ Images
  //           const imagesArray =
  //             room.hotel_images && room.hotel_images.length > 0
  //               ? room.hotel_images.split(",").filter(Boolean)
  //               : [];

  //           // ✅ Pre-fill form
  //           setFormData({
  //             hotel_name: room.hotel_name || "",
  //             address: room.address || "",
  //             city: room.city || "",
  //             country: room.country || "",
  //             rating: room.rating || "",
  //             reviews: room.reviews || "",
  //             map_url: room.map_url || "",
  //             room_title: room.room_title || "",
  //             board_type: room.board_type || "",
  //             max_adults: room.max_adults || "",
  //             max_children: room.max_children || "",
  //             price: room.price || "",
  //             total: room.total || "",
  //             currency: room.currency || "AED",
  //             policies: room.policies || "",
  //             room_description: room.room_description || "",
  //             facilities: facilities, // ✅ now always an array
  //             availability: room.availability || "Available", // ✅
  //           });

  //           setExistingImages(imagesArray);
  //         })
  //         .catch((err) => console.error("Error fetching room:", err));
  //     }
  //   }, [roomId]);

  useEffect(() => {
    if (roomId) {
      axios
        .get(`http://localhost:5000/api/rooms/${roomId}`)
        .then((res) => {
          const room = res.data;

          // 🧩 Fix: Ensure facilities is always an array of strings
          let facilities = [];
          if (room.facilities) {
            try {
              if (Array.isArray(room.facilities)) {
                facilities = room.facilities;
              } else if (typeof room.facilities === "string") {
                facilities = JSON.parse(room.facilities);
              } else {
                facilities = [];
              }
            } catch {
              facilities = [];
            }
          }

          // 🖼️ Existing images
          const imagesArray = room.hotel_images
            ? room.hotel_images.split(",").filter(Boolean)
            : [];

          // ✅ Set prefilled data
          setFormData({
            hotel_name: room.hotel_name || "",
            address: room.address || "",
            city: room.city || "",
            country: room.country || "",
            rating: room.rating || "",
            reviews: room.reviews || "",
            map_url: room.map_url || "",
            room_title: room.room_title || "",
            board_type: room.board_type || "",
            max_adults: room.max_adults || "",
            max_children: room.max_children || "",
            price: room.price || "",
            total: room.total || "",
            currency: room.currency || "AED",
            policies: room.policies || "",
            room_description: room.room_description || "",
            facilities, // ✅ this will now pre-check boxes
            availability: room.availability || "Available",
          });

          setExistingImages(imagesArray);
        })
        .catch((err) => console.error("Error fetching room:", err));
    }
  }, [roomId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append form fields
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "facilities") data.append(key, JSON.stringify(value));
      else data.append(key, value);
    });

    // Append new images
    hotelImages.forEach((file) => data.append("hotel_images", file));

    try {
      if (roomId) {
        // Update room
        await axios.put(`http://localhost:5000/api/rooms/${roomId}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Room updated successfully!");
      } else {
        // Add new room
        await axios.post("http://localhost:5000/api/addroom", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Room added successfully!");
      }

      // Redirect to Manage Rooms
      navigate("/admin/manage-rooms");
    } catch (err) {
      console.error(err);
      alert("Error saving room.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl my-10">
      <h1 className="text-2xl font-bold text-orange-600 mb-6 text-center">
        {roomId ? "Update Room / Hotel" : "Add New Room / Hotel"}
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

            {/* Image preview */}
            {existingImages.length > 0 && (
              <div className="col-span-2 flex gap-2 flex-wrap mt-2">
                {existingImages.map((img, i) => (
                  <img
                    key={i}
                    src={`http://localhost:5000/uploads/rooms/${img}`}
                    alt="Room"
                    className="w-20 h-20 object-cover rounded-md border"
                  />
                ))}
              </div>
            )}
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
              required
              className="border rounded-lg p-2 w-full"
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
            />
            {/* Availability Field */}
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block mb-1 font-semibold">Availability</label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full"
                >
                  <option value="Available">Available</option>
                  <option value="Booked">Booked</option>
                </select>
              </div>
            </div>
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
          />
        </section>

        {/* Facilities */}
        {/* <section>
          <h2 className="text-xl font-semibold mb-4">Hotel Facilities</h2>
          <div className="grid md:grid-cols-3 gap-2">
            {facilitiesList.map((facility) => (
              <label
                key={facility}
                className="flex items-center gap-2 border rounded-lg p-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={facility}
                  checked={formData.facilities.includes(facility)}
                  onChange={(e) => handleCheckbox(facility, e.target.checked)}
                />
                {facility}
              </label>
            ))}
          </div>
        </section> */}
        {/* Hotel Facilities */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-orange-600">
            Hotel Facilities
          </h2>

          {facilitiesList.length === 0 ? (
            <p className="text-gray-500">No facilities available</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-2">
              {facilitiesList.map((facility) => {
                const isChecked = formData.facilities?.includes(facility);
                return (
                  <label
                    key={facility}
                    className={`flex items-center gap-2 border rounded-lg p-2 cursor-pointer transition
              ${
                isChecked
                  ? "bg-orange-100 border-orange-400"
                  : "hover:bg-gray-50"
              }
            `}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleCheckbox(facility)}
                      className="accent-orange-500 w-4 h-4"
                    />
                    <span
                      className={`${
                        isChecked
                          ? "text-orange-700 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {facility}
                    </span>
                  </label>
                );
              })}
            </div>
          )}
        </section>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
        >
          {roomId ? "Update Room" : "Upload Room"}
        </button>
      </form>
    </div>
  );
}
