import React, { useState, useEffect } from "react";
import "./review.css";
import { instructors } from "../apiClient";

const Dropdown = () => {
  const [dropDownItems, setDropDownItems] = useState([]);

  const fetchData = async () => {
    try {
      const results = await instructors();
      setDropDownItems(results);
    } catch (err) {
      console.error(`Error ${err.message}`);
      setDropDownItems([]);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div id="form1" action="/action_page.php">
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
    </div>
  );
};

export default Dropdown;
