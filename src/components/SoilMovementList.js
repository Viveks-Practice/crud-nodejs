// import axios from "axios";
// import React, { useState, useEffect } from "react";

const SoilMovementList = ({ soilMovementList }) => {
  return (
    <div>
      <h2>Soil Movements</h2>
      <ul>
        {soilMovementList.map((soilMovement) => (
          <li key={soilMovement.id}>
            {soilMovement.type} - {soilMovement.soilTypeId} -
            {soilMovement.quantity} - {soilMovement.sourceLocation} -
            {soilMovement.destinationLocation} - {soilMovement.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoilMovementList;
