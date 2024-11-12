
import "../css/Dialog.css";
import React, { useState } from "react";
//inputs.img != null ? URL.createObjectURL(inputs.img) : ""

const AddHousePlan = (props) => {
  return (
    <div id="add-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span id="dialog-close" className="w3-button w3-display-topright">
            &times;
          </span>
          <form id="add-property-form">
            <p>
              <label htmlFor="name ">Property Name:</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="size">Size:</label>
              <input type="number" id="size" name="size" required />
            </p>
            <p>
              <label htmlFor="bedrooms">Bedrooms:</label>
              <input type="number" id="bedrooms" name="bedrooms" required />
            </p>
            <p>
              <label htmlFor="bathrooms">Bathrooms:</label>
              <input type="number" id="bathrooms" name="bathrooms" required />
            </p>

            <section className="columns">
              <p id="img-prev-section">
                <img id="img-prev" alt="" />
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input type="file" id="img" name="img" accept="image/*" />
              </p>
            </section>
            <p>
              <button type="submit">Submit</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHousePlan;
