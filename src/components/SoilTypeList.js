import React from "react";
import "./SoilTypeList.css"; // Import the CSS file

const SoilTypeList = ({ soilTypes }) => {
  return (
    <div className="soil-type-list-container">
      <h2 className="list-title">Soil Types</h2>
      <ul className="soil-type-list">
        {soilTypes.map((soilType) => (
          <li key={soilType.id} className="soil-type-item">
            <span className="soil-type-name">{soilType.name}</span> -
            <span className="soil-type-description">
              {soilType.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoilTypeList;
