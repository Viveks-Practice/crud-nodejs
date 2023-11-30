import React, { useState } from "react";
import axios from "axios";

const SoilMovementForm = ({ onSoilMovementAdded }) => {
  const [formData, setFormData] = useState({
    type: "",
    quantity: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  const { type, quantity } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/soil_movements",
        formData
      );

      onSoilMovementAdded(response.data);

      console.log(response.data);
      setSubmitStatus("Soil movement added successfully!");

      setFormData({
        type: "",
        quantity: "",
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus("Failed to add soil movement. Check console for errors.");
    }
  };

  return (
    <div>
      <h2>Add a Soil Movement</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">Type</label>
        <input type="text" name="type" value={type} onChange={handleChange} />
        <div />

        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          name="quantity"
          value={quantity}
          onChange={handleChange}
        />

        <input type="submit" value="Add Soil Movement" />
      </form>
      {submitStatus && <p>{submitStatus}</p>}
    </div>
  );
};

export default SoilMovementForm;
