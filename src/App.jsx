// App.js
import React, { useState } from "react";
import CityList from "./Components/CityList";
import WeatherDetails from "./Components/WeatherDetails";
import Search from "./Components/Search";

const App = () => {
  const [cities] = useState(["Las Vegas", "London", "Los Angeles", "New York"]);
  const [weatherData, setWeatherData] = useState({});
  const [highlightedCity, setHighlightedCity] = useState("");
  const [fetchedCities, setFetchedCities] = useState([]);
  const [searchHighlight, setSearchHighlight] = useState(null);
  const [idx, setIdx] = useState(0);

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(
        `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city}`
      );
      const data = await response.json();
      const dataAge = (
        (new Date() - new Date(data.date_and_time)) /
        (1000 * 60 * 60) /
        3600
      ).toFixed();

      setWeatherData((prevData) => ({
        ...prevData,
        [city]: { ...data, data_age: dataAge },
      }));
      setFetchedCities((prev) => [...prev, city]);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleGetWeather = async () => {
    const city = cities[idx];
    setHighlightedCity(city);
    await fetchWeatherData(city);
    setIdx((prevIdx) => (prevIdx + 1) % cities.length);
  };

  const handleDelete = (city) => {
    const updatedData = { ...weatherData };
    delete updatedData[city];
    setWeatherData(updatedData);
    setFetchedCities((prev) => prev.filter((c) => c !== city));
  };

  const handleSearch = (city) => {
    if (weatherData[city]) {
      setSearchHighlight(city);
      setTimeout(() => setSearchHighlight(null), 3000);
    } else {
      alert("City not found in the Details table.");
    }
  };

  const updateDescription = (city, newDescription) => {
    setWeatherData((prevData) => ({
      ...prevData,
      [city]: { ...prevData[city], description: newDescription },
    }));
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-200 min-h-screen flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold text-blue-700 bg-white px-8 py-4 rounded-lg shadow-lg mb-3">
        Weather Application
      </h1>
      <div className="flex w-full max-w-6xl border border-blue-300 rounded-lg overflow-hidden mt-6 shadow-2xl">
        <CityList
          cities={cities}
          onGetWeather={handleGetWeather}
          highlightedCity={highlightedCity}
          fetchedCities={fetchedCities}
        />
        <div className="flex flex-col w-full h-[420px] ">
          <div className="flex justify-end ">
            <Search onSearch={handleSearch} />
          </div>
          <WeatherDetails
            data={weatherData}
            onDelete={handleDelete}
            searchHighlight={searchHighlight}
            updateDescription={updateDescription} // Pass the function here
          />
        </div>
      </div>
    </div>
  );
};

export default App;
