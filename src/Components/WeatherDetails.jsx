// WeatherDetails.js
import React from "react";

const WeatherDetails = ({ data, onDelete, searchHighlight, updateDescription }) => {
  return (
    <div className="w-full p-6 bg-gray-100 rounded-lg shadow-lg h-[100%]">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-indigo-500 text-white">
            <th className="px-4 py-3">City</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Temperature</th>
            <th className="px-4 py-3">Pressure</th>
            <th className="px-4 py-3">Data Age (hrs)</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center text-gray-600 py-6">
                No Data Available
              </td>
            </tr>
          ) : (
            Object.keys(data).map((city) => (
              <tr
                key={city}
                className={`${
                  searchHighlight === city ? "bg-yellow-100" : "bg-gray-50"
                } transition-colors duration-300 hover:bg-indigo-100`}
              >
                <td className="px-4 py-3 border border-gray-200">{city}</td>
                <td className="px-4 py-3 border border-gray-200">
                  <input
                    type="text"
                    value={data[city].description}
                    onChange={(e) =>
                      updateDescription(city, e.target.value)
                    }
                    className="border border-gray-300 p-2 rounded bg-gray-50 focus:bg-white focus:border-indigo-300"
                  />
                </td>
                <td className="px-4 py-3 border border-gray-200">
                  {data[city].temp_in_celsius} 
                </td>
                <td className="px-4 py-3 border border-gray-200">
                  {data[city].pressure_in_hPa} 
                </td>
                <td className="px-4 py-3 border border-gray-200">
                  {data[city].data_age}
                </td>
                <td className="px-4 py-3 border border-gray-200">
                  <button
                    className="bg-red-400 text-white px-3 py-1 rounded-full shadow-md hover:bg-red-500 transition-transform transform hover:scale-105"
                    onClick={() => onDelete(city)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherDetails;
