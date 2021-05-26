import React from "react";
import { useState, useEffect } from "react";
import "./review.css";
import api from "../services/apiClient";

const Dropdown = () => {
  const [dropDownItems, setDropDownItems] = useState([]);

  const fetchData = async () => {
    try {
      const results = await api.instructors();
      setDropDownItems(results);
    } catch (err) {
      console.error(`Error ${err.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <form name="form1" id="form1" action="/action_page.php">
        <div>
          Instructor:{" "}
          <select name="instructor" id="instructor">
            {dropDownItems.map((dropDownItem, key) => (
              <option value={dropDownItem.person_name} key={key} required>
                {dropDownItem.person_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          Semester Term:{" "}
          <select name="chapter" id="chapter">
            {dropDownItems.map((dropDownItem, key) => (
              <option value={dropDownItem.term} key={key} required>
                {dropDownItem.term}
              </option>
            ))}
          </select>
        </div>
        <div>
          Semester Topic:{" "}
          <select name="topic" id="topic">
            {dropDownItems.map((dropDownItem, key) => (
              <option value={dropDownItem.class_name} key={key} required>
                {dropDownItem.class_name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Dropdown;
