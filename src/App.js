import React, { useState } from 'react';

import { getWeather } from './weatherAPI/weatherAPI';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (event) => {
        if(event.key === 'Enter') {
            const data = await getWeather(query);

            setWeather(data);
            setQuery('');
        }
    }

    return (
      <div className = "app">
        <div className="main-container">
        <h1> WEATHER APP </h1>
            <input type="text" className="search" placeholder="Enter City Name"
            value={query}onChange={(event) => setQuery(event.target.value)}onKeyPress={search}/>
            {weather.main && (
                <div className="city">
                    <div className="city-name">
                        <h3>{weather.name} |  {weather.sys.country}</h3>
                    </div>
                    <div className="city-temp">max : <span/>
                        {weather.main.temp_max}
                        <sup>&deg;C</sup><br/>min : <span/>
                        {weather.main.temp_min}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}  />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
}

export default App;

