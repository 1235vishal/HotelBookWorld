// import axios from "axios";
// import { useState } from "react";
// import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validate = () => {
//     const errors = {};
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       errors.email = "Invalid email address";
//     }
//     if (password.length < 8) {
//       errors.password = "Password must be at least 8 characters";
//     }
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     try {
//       const res = await axios.post("http://localhost:5000/api/admin/login", {
//         email,
//         password,
//       });
//       localStorage.setItem("adminToken", res.data.token);
//       navigate("/admin/dashboard");
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

//         {/* Email */}
//         <label className="block mb-2 text-sm font-medium">Email</label>
//         <div className="relative mb-2">
//           <AiOutlineMail className="absolute top-3 left-3 text-gray-400" />
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             placeholder="Enter email"
//             className="w-full pl-10 pr-3 py-2 border rounded"
//           />
//         </div>
//         {errors.email && (
//           <p className="text-red-500 text-sm mb-2">{errors.email}</p>
//         )}

//         {/* Password */}
//         <label className="block mb-2 text-sm font-medium">Password</label>
//         <div className="relative mb-2">
//           <AiOutlineLock className="absolute top-3 left-3 text-gray-400" />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             placeholder="Enter password"
//             className="w-full pl-10 pr-3 py-2 border rounded"
//           />
//         </div>
//         {errors.password && (
//           <p className="text-red-500 text-sm mb-2">{errors.password}</p>
//         )}

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-2"
//         >
//           Login
//         </button>

//         {message && <p className="mt-4 text-center text-red-500">{message}</p>}

//         <p className="mt-4 text-center text-sm">
//           Don’t have an account?{" "}
//           <Link to="/admin/register" className="text-blue-600 hover:underline">
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }

// import axios from "axios";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/admin/login", {
//         email,
//         password,
//       });
//       localStorage.setItem("adminToken", res.data.token);
//       navigate("/admin/dashboard");
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded-2xl shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

//         <label className="block mb-2 font-medium">Email</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//         />

//         <label className="block mb-2 font-medium">Password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="w-full border border-gray-300 rounded-lg p-2 mb-2"
//         />

//         <div className="flex justify-end mb-4">
//           <Link
//             to="/admin/forgot-password"
//             className="text-blue-600 hover:underline"
//           >
//             Forgot Password?
//           </Link>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
//         >
//           Login
//         </button>

//         {message && <p className="mt-4 text-sm text-red-600">{message}</p>}
//       </form>
//     </div>
//   );
// }

import axios from "axios";
import { useState } from "react";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });
      localStorage.setItem("adminToken", res.data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

        {/* Email Field */}
        <div className="flex items-center border border-gray-300 rounded-lg mb-4 p-2">
          <AiOutlineMail className="text-gray-400 mr-2" size={20} />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full outline-none"
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center border border-gray-300 rounded-lg mb-2 p-2">
          <AiOutlineLock className="text-gray-400 mr-2" size={20} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full outline-none"
          />
        </div>

        {/* Forgot Password Link */}
        <div className="flex justify-end mb-4">
          <Link
            to="/admin/forgot-password"
            className="text-blue-600 hover:underline text-sm"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mb-4"
        >
          Login
        </button>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/admin/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Register Admin
          </Link>
        </p>

        {message && <p className="mt-4 text-sm text-red-600">{message}</p>}
      </form>
    </div>
  );
}
