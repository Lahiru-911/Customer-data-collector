import React, { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 p-4">
      <div className="bg-white p-6 rounded-3xl shadow-xl w-full max-w-sm md:max-w-lg">
        {/* Header Section */}
        <div className="bg-[#0081FB] text-white p-4 rounded-2xl flex justify-between items-center shadow-lg">
          <div>
            <h2 className="text-xl md:text-2xl font-light">Welcome,</h2>
            <p className="text-md md:text-lg font-light mt-1">You Are Royal to Us</p>
            <p className="text-xs md:text-sm mt-1 text-gray-200">
              Please provide your details below
            </p>
          </div>

          {/* Logo inside circular background */}
          <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-md">
            <img
              src="/src/assets/logo.png"
              alt="Logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </div>
        </div>

        {/* Form Section */}
        <form className="mt-5 space-y-3 md:space-y-4">
          {[
            { label: "Name", placeholder: "Your Name", type: "text" },
            { label: "Phone Number", placeholder: "Mobile Number", type: "text" },
            { label: "Alternative Number", placeholder: "Another Mobile Number", type: "text" },
            { label: "Birthday", placeholder: "", type: "date" },
            { label: "Email", placeholder: "example@mail.com", type: "email" },
            { label: "Address", placeholder: "Your Address", type: "text" },
          ].map(({ label, placeholder, type }, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <label className="text-gray-700 font-medium text-sm">{label}</label>
              <input
                required
                className="w-full h-12 bg-gray-100 text-sm placeholder-gray-400 border border-gray-300 rounded-lg px-4 outline-none focus:ring-2 focus:ring-[#0081FB] transition-all duration-200"
                placeholder={placeholder}
                type={type}
              />
            </div>
          ))}

          {/* Rating Section */}
          <div className="text-gray-600 text-start mt-3 font-medium">Rate Our Service:</div>
          <div className="flex justify-start space-x-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <motion.span
                key={num}
                whileTap={{ scale: 0.85 }}
                className={`cursor-pointer text-3xl transition-all duration-300 ${
                  rating >= num ? "text-yellow-400 scale-110" : "text-gray-300"
                }`}
                onClick={() => setRating(num)}
              >
                ★
              </motion.span>
            ))}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 py-3 w-full bg-[#0081FB] text-white text-lg font-medium rounded-xl shadow-md transition-all duration-300 hover:bg-[#0071E3] active:scale-95"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default App;
