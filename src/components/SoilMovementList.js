import React from "react";
import "./SoilMovementList.css"; // Import the CSS file

const SoilMovementList = ({ soilMovementList }) => {
  return (
    <div className="soil-movement-list-container">
      <h2 className="list-title">Soil Movements</h2>
      <ul className="soil-movement-list">
        {soilMovementList.map((soilMovement) => (
          <li key={soilMovement.id} className="soil-movement-item">
            <span className="soil-movement-type">{soilMovement.type}</span> |
            <span className="soil-movement-id">
              ID: {soilMovement.soilTypeId}
            </span>{" "}
            |
            <span className="soil-movement-quantity">
              {soilMovement.quantity}
            </span>{" "}
            |
            <span className="soil-movement-source">
              {soilMovement.sourceLocation}
            </span>{" "}
            |
            <span className="soil-movement-destination">
              {soilMovement.destinationLocation}
            </span>{" "}
            |<span className="soil-movement-date">{soilMovement.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoilMovementList;
