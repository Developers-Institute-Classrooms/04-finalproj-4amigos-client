import React from "react";
import "./review.css";

const NameAuth = () => {
  return (
    <div className="main-block">
      <form action="/">
        <div>
          <label className="spacing">Name</label>
          <input
            className="form-row"
            type="text"
            id="name"
            name="name"
            placeholder="Jane Doe"
            required
          />
        </div>

        <div>
          <label className="spacing">Email</label>
          <input
            className="form-row"
            type="text"
            id="email"
            name="email"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default NameAuth;
