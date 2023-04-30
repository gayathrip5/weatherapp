import "./App.css";
import { useState } from "react";

const api = {
  key: "ae9f20111a8ea2716636e18fa12ba99a",
  base: "http://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER  */}
        <h1>Weather App</h1>

        {/* Search Box - Input + Button  */}
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location  */}
            <p>{weather.name}</p>

            {/* Temperature Celsius  */}
            <p>{weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;






//sample template
      //   { /* HEADER */}
      //   <h1>Weather App</h1>

      //   { /*  Search box */}
      //   <div>
      //     <input type='text'
      //       placeholder='enter your city or town'
      //       onChange={(e) => setSearch(e.target.value)} />
      //     <button onClick={searchPressed}>Search</button>
          
      //   </div>

      //   { /*  Loacation */}
      //  <p>New york city,usa</p>

      //   {/* temperature f/c */}
      //   <p> 32  F</p>

      //   { /* condition (Sunny) */}
      //   <p>sunny</p>

   