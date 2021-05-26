import React from "react";
import { useState, useEffect } from "react";
import "./review.css";
import api from "../services/apiClient";

const Dropdown = () => {
  const [class_name, setClass_name] = useState([]);
  const [term, setTerm] = useState([]);
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.instructors(class_name, term, instructor);
        if (!result.ok) {
          throw new Error("API Error");
        }
        const classResults = await result.json();
        setClass_name(classResults.class_name);
        const termResults = await result.json();
        setTerm(termResults.term);
        const instructorResults = await result.json();
        if (instructorResults.person_type === instructor) {
          setInstructor(instructorResults.instructor);
        }
      } catch (err) {
        console.error(`Error ${err.message}`);
      }
    };
    fetchData();
  }, [class_name, term, instructor]);

  return (
    <div>
      <form name="form1" id="form1" action="/action_page.php">
        <div>
          Instructor:{" "}
          <select name="instructor" id="instructor">
            <option value="" required>
              {instructor.map}
            </option>
          </select>
        </div>
        <div>
          Semester Term:{" "}
          <select name="chapter" id="chapter">
            <option value="" required>
              {term.map}
            </option>
          </select>
        </div>
        <div>
          Semester Topic:{" "}
          <select name="topic" id="topic">
            <option value="" required>
              {class_name.map}
            </option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Dropdown;
