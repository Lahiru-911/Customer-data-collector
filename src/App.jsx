import React, { useState } from "react";

const App = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen bg-[#f2f2f2]">
      <div className="bg-white p-5 rounded-2xl shadow-2xl w-full max-w-[500px] ">
        {/* Header Section */}
        {/* Header Section */}
        <div className="bg-[#0081FB] text-white p-4 rounded-xl text-start relative flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-normal">Welcome,</h2>
            <p className="text-md font-normal mt-1">You Are Royal to Us</p>
            <p className="text-sm mt-1 text-[#E5E7EB]">
              Please provide your details below
            </p>
          </div>
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Form Section */}
        <form className="mt-5 space-y-4">
          {[
            { label: "Name", placeholder: "Your Name", type: "text" },
            {
              label: "Phone Number",
              placeholder: "Mobile Number",
              type: "text",
            },
            {
              label: "Phone Number",
              placeholder: "Another Mobile Number",
              type: "text",
            },
            { label: "Birthday", placeholder: "", type: "date" },
            { label: "Email", placeholder: "example@mail.com", type: "email" },
            { label: "Address", placeholder: "Your Address", type: "text" },
          ].map(({ label, placeholder, type }, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <label className="text-gray-700 font-medium text-sm">
                {label}
              </label>
              <input
                required
                className="w-full h-10 bg-[#F2F2F2] text-sm placeholder-slate-400 border border-slate-300 rounded-xl outline-none px-3 focus:ring-1 focus:border-[#0081FB] focus:ring-indigo-400"
                placeholder={placeholder}
                type={type}
              />
            </div>
          ))}

          {/* Rating Section */}
          <div className="text-gray-600 text-start mt-3 font-medium">
            Rate Our Service:
          </div>
          <div className="flex justify-start space-x-2">
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
          <button className=" mt-4 py-2 w-full bg-transparent items-center justify-center flex border-2 border-[#0081FB] shadow-lg hover:bg-[#0081FB] text-[#0081FB] hover:text-white duration-300 cursor-pointer active:scale-[0.98] rounded-lg text-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;

// #f4eeff

// #b98bff
