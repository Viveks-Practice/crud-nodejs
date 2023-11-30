import React, { useState } from "react";
import axios from "axios";

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
    <div>
      <h2>Add a Soil Type</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <div />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
        />

        <input type="submit" value="Add Soil Type" />
      </form>
      {submitStatus && <p>{submitStatus}</p>}
    </div>
  );
};

export default SoilTypeForm;
