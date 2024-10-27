import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
    setTimeout(() => setCity(""), 3000);
  };

  return (
    <div className=" w-full border"> 
      <div className="p-4 bg-white border-b border-blue-200  flex items-end shadow-md ">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border border-blue-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-inner"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-r-full hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
