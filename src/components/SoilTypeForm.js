import React, { useState } from "react";
import axios from "axios";
import "./SoilTypeForm.css"; // Import the CSS file

const SoilTypeForm = ({ onSoilTypeAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  const { name, description } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/soil_types",
        formData
      );

      onSoilTypeAdded(response.data);

      console.log(response.data);
      setSubmitStatus("Soil type added successfully!");

      setFormData({
        name: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus("Failed to add soil type. Check console for errors.");
    }
  };

  return (
    <div className="soil-type-form-container">
      <h2 className="form-title">Add a Soil Type</h2>
      <form onSubmit={handleSubmit} className="soil-type-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group submit-group">
          <input
            type="submit"
            value="Add Soil Type"
            className="submit-button"
          />
        </div>
      </form>
      {submitStatus && <p className="submit-status">{submitStatus}</p>}
    </div>
  );
};

export default SoilTypeForm;
