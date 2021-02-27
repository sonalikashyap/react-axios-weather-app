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
            <input type="text"className="search"placeholder="Search..."
            value={query}onChange={(event) => setQuery(event.target.value)}onKeyPress={search}/>
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <h3>{weather.name} |  {weather.sys.country}</h3>
                    </h2>
                    <div className="city-temp">
                        {weather.main.temp}
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

