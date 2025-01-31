import React, { useState } from "react";

const App = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen bg-[#f2f2f2]">
      <div className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-[400px] ">
        {/* Header Section */}
        <div className="bg-[#0081FB] text-white p-4 rounded-xl text-center relative">
          <h2 className="text-xl font-bold">Welcome,</h2>
          <p className="text-md font-medium mt-1">You Are Valuable to Us</p>
          <p className="text-sm mt-1 opacity-80">
            Please provide your details below
          </p>
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
                className="w-full h-10 bg-[#F2F2F2] text-sm placeholder-slate-400 border border-slate-300 rounded-md outline-none px-3 focus:ring-1 focus:border-indigo-400 focus:ring-indigo-400"
                placeholder={placeholder}
                type={type}
              />
            </div>
          ))}

          {/* Rating Section */}
          <div className="text-gray-600 text-center mt-3 font-medium">
            Rate Our Service:
          </div>
          <div className="flex justify-center space-x-1">
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                className={`cursor-pointer text-2xl transition-all duration-200 ${
                  rating >= num ? "text-yellow-400 scale-110" : "text-gray-300"
                }`}
                onClick={() => setRating(num)}
              >
                ★
              </span>
            ))}
          </div>

          {/* Submit Button */}
          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-md mt-4 text-md font-semibold hover:opacity-90 transition-all">
            Submit 🚀
          </button>
        
            <button className="px-5 py-2 w-full bg-transparent items-center justify-center flex border-2 border-sky-500 shadow-lg hover:bg-sky-500 text-sky-500 hover:text-white duration-300 cursor-pointer active:scale-[0.98]">
              <a className href>
              Submit
              </a>
            </button>
          
        </form>
      </div>



      
    </div>
  );
};

export default App;


// #f4eeff

// #b98bff
