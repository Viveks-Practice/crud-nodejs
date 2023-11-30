// import React, { useState, useEffect } from "react";
// import axios from "axios";

const SoilTypeList = ({ soilTypes }) => {
  return (
    <div>
      <h2>Soil Types</h2>
      <ul>
        {soilTypes.map((soilType) => (
          <li key={soilType.id}>
            {soilType.name} - {soilType.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoilTypeList;
