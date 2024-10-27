// CityList.js
import React from "react";

const CityList = ({ cities, onGetWeather, highlightedCity, fetchedCities }) => {
  return (
    <div className="w-1/5 bg-gray-50 p-6 flex flex-col items-center border-r border-gray-300 shadow-md rounded-l-lg">
      <button
        className="bg-green-500 text-white py-2 px-5 mb-6 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
        onClick={onGetWeather}
      >
        Get Weather
      </button>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="text-gray-700 font-semibold">City</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <tr
              key={city}
              className={`${
                highlightedCity === city
                  ? "bg-yellow-100 border-yellow-400 font-semibold"
                  : fetchedCities.includes(city)
                  ? "text-teal-600 font-semibold border-2 border-teal-300"
                  : ""
              } transition-all duration-200`}
            >
              <td className="py-3 px-2 border-b border-gray-200">{city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CityList;
