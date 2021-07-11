import React, { useState } from "react";
import "./styles.css";
const locationData = require("./data");

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("forts");

  var categories = Object.keys(locationData);

  return (
    <div className="App">
      <header>
        <h1>Goa Travel Guide</h1>
        <nav>
          <ul className="list-non-bullet nav-pills">
            {categories.map((category, index) => {
              return selectedCategory === category ? (
                <li
                  key={index}
                  className="list-item-inline"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              ) : (
                <li
                  key={index}
                  className="list-item-inline"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <div className="container">
        {locationData[selectedCategory].map((locationDetails) => {
          return (
            <div className="location-card">
              <img src={locationDetails.thumbnailUrl} alt=""></img>
              <div className="location-info">
                <h3>{locationDetails.locationName}</h3>
                <p>Rating: {locationDetails.rating}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
