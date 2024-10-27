# Weather Application

This Weather Application is a React-based project that fetches weather data for various cities and displays detailed information, including description, temperature, and pressure. Users can also search for specific cities, edit weather descriptions, and delete entries from the weather data.

## Features

- **Get Weather**: Fetches and displays weather data for pre-defined cities.
- **Edit Description**: Allows users to edit and update the weather description for each city.
- **Delete Data**: Users can delete specific city data from the displayed information.
- **Search City**: Searches for a city within the displayed weather details.
- **Highlighted Cities**: Highlights the most recently fetched city and search results for easy reference.

## Project Structure

```plaintext
.
├── src
│   ├── Components
│   │   ├── CityList.js       # Component for displaying the list of cities
│   │   ├── WeatherDetails.js # Component for displaying weather details
│   │   └── Search.js         # Component for searching cities in the data
│   ├── App.js                # Main app component
│   └── index.js              # Application entry point
├── public                    # Public assets folder
└── README.md                 # Documentation file

