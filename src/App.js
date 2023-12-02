import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SoilTypeList from "./components/SoilTypeList";
import SoilMovementList from "./components/SoilMovementList";
import SoilTypeForm from "./components/SoilTypeForm";
import SoilMovementForm from "./components/SoilMovementForm";

function App() {
  const [soilTypes, setSoilTypes] = useState([]);
  const [soilMovementList, setSoilMovementList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/soil_movements")
      .then((response) => {
        setSoilMovementList(response.data);
      })
      .catch((error) => console.error("Error fetching soil movements:", error));
  });

  useEffect(() => {
    // Fetch soil types from the API when the component mounts
    axios
      .get("http://localhost:3001/soil_types")
      .then((response) => {
        setSoilTypes(response.data);
      })
      .catch((error) => console.error("Error fetching soil types:", error));
  }, []);

  const handleSoilTypeAdded = (soilType) => {
    setSoilTypes([...soilTypes, soilType]);
  };

  const handleSoilMovementAdded = (soilMovement) => {
    setSoilMovementList([...soilMovementList, soilMovement]);
  };

  return (
    <div>
      <SoilTypeForm onSoilTypeAdded={handleSoilTypeAdded} />
      <SoilTypeList soilTypes={soilTypes} />
      <SoilMovementForm
        soilTypes={soilTypes}
        onSoilMovementAdded={handleSoilMovementAdded}
      />
      <SoilMovementList soilMovementList={soilMovementList} />
    </div>
  );
}

export default App;
