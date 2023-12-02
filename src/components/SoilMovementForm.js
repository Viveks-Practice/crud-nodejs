import React, { useState } from "react";
import axios from "axios";
import "./SoilMovementForm.css"; // Make sure to correctly link your CSS file

const SoilMovementForm = ({ soilTypes, onSoilMovementAdded }) => {
  const [formData, setFormData] = useState({
    soilTypeId: "",
    quantity: "",
    sourceLocation: "",
    destinationLocation: "",
    date: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Construct the full object including 'type' which is the name of the soil type
    const fullFormData = {
      ...formData,
      type: soilTypes.find((type) => type.id.toString() === formData.soilTypeId)
        ?.name,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/soil_movements",
        fullFormData
      );
      onSoilMovementAdded(response.data);
      setSubmitStatus("Soil movement added successfully!");
      setFormData({
        soilTypeId: "",
        quantity: "",
        sourceLocation: "",
        destinationLocation: "",
        date: "",
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus("Failed to add soil movement. Check console for errors.");
    }
  };

  return (
    <div className="soil-movement-form-container">
      <h2 className="form-title">Add a Soil Movement</h2>
      <form onSubmit={handleSubmit} className="soil-movement-form">
        <div className="form-group">
          <label htmlFor="soilTypeId" className="form-label">
            Soil Type
          </label>
          <select
            name="soilTypeId"
            value={formData.soilTypeId}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="">Select Soil Type</option>
            {soilTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="sourceLocation" className="form-label">
            Source Location
          </label>
          <input
            type="text"
            name="sourceLocation"
            value={formData.sourceLocation}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="destinationLocation" className="form-label">
            Destination Location
          </label>
          <input
            type="text"
            name="destinationLocation"
            value={formData.destinationLocation}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group submit-group">
          <input
            type="submit"
            value="Add Soil Movement"
            className="submit-button"
          />
        </div>
      </form>
      {submitStatus && <p className="submit-status">{submitStatus}</p>}
    </div>
  );
};

export default SoilMovementForm;
