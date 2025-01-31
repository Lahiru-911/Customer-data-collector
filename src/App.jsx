import React, { useState } from "react";

const App = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-96">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-5 rounded-xl text-center relative">
          <h2 className="text-2xl font-bold">Welcome,</h2>
          <p className="text-lg font-medium mt-1">You Are Valuable to Us</p>
          <p className="text-sm mt-1 opacity-80">Please provide your details below</p>
          <div className="absolute top-5 right-5">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal Logo"
              className="w-10 h-10"
            />
          </div>
        </div>

        {/* Form Section */}
        <form className="mt-6 space-y-5">
          {[
            { label: "Name", placeholder: "Your Name", type: "text" },
            { label: "Phone Number", placeholder: "Mobile Number", type: "text" },
            { label: "Phone Number", placeholder: "Another Mobile Number", type: "text" },
            { label: "Birthday", placeholder: "", type: "date" },
            { label: "Email", placeholder: "example@mail.com", type: "email" },
            { label: "Address", placeholder: "Your Address", type: "text" },
          ].map(({ label, placeholder, type }, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <label className="text-gray-700 font-medium text-sm">{label}</label>
              <div className="relative w-full h-14 flex items-center shadow-md rounded-lg">
                <input
                  required
                  className="peer w-full h-full bg-white text-lg font-light placeholder-slate-400 border border-slate-200 rounded-lg outline-none px-3 focus:ring-1 focus:border-indigo-400 focus:ring-indigo-400 valid:ring-1 valid:border-indigo-400"
                  placeholder={placeholder}
                  type={type}
                />
                <div className="absolute right-3 w-5 opacity-20 peer-focus:opacity-70 peer-valid:opacity-70 peer-valid:fill-indigo-500" />
              </div>
            </div>
          ))}

          {/* Rating Section */}
          <div className="text-gray-600 text-center mt-4 font-medium">
            How would you rate our service?
          </div>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                className={`cursor-pointer text-3xl transition-all duration-200 ${
                  rating >= num ? "text-yellow-400 scale-110" : "text-gray-300"
                }`}
                onClick={() => setRating(num)}
              >
                ★
              </span>
            ))}
          </div>

          {/* Submit Button */}
          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-lg mt-5 text-lg font-semibold hover:opacity-90 transition-all">
            Submit <span className="text-lg">🚀</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
