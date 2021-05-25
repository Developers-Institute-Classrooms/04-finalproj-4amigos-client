import React from "react";
import "./review.css";

const ValidateForm = () => {
  return (
    <div className="main-block">
      <form action="/">
        <div>
          <label className="spacing">Name</label>
          <input
            className="form-row"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label className="spacing">Email</label>
          <input className="form-row" type="text" name="email" required />
        </div>
      </form>
    </div>
  );
};

export default ValidateForm;
