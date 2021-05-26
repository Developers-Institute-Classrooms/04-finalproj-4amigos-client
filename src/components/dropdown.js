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
        const result = await api.getReviews(class_name, term, instructor);
        if (!result.ok) {
          throw new Error("API Error");
        }
        const classResults = await result.json();
        setClass_name(classResults.class_name);
        const termResults = await result.json();
        setTerm(termResults.term);
        const instructorResults = await result.json();
        setInstructor(instructorResults.instructor);
      } catch (err) {
        console.error(`Error ${err.message}`);
      }
    };
    fetchData();
  }, [class_name, term, instructor]);
  // need to keep instructors as the select
  // add validation to say "You must select  a tutor to review"
  // add a map over the names of the instructors returned from the API
  /*{instructors.map((instructor, key) => (

      **add component that would incorporate option 
      <option value="">${instructor.name}</option>
  
    
    ))} */

  return (
    <div>
      <form name="form1" id="form1" action="/action_page.php">
        <div>
          Instructor:{" "}
          <select name="instructor" id="instructor">
            <option value="">${instructor.map}</option>
            {/* <option value="" selected="selected">
              Lance
            </option>
            <option value="">Nik</option>
            <option value="">Mark</option> */}
          </select>
        </div>
        <div>
          Semester Term:{" "}
          <select name="chapter" id="chapter">
            <option value="">{term.map}</option>
            {/* <option value="" selected="selected">
              Please select your term
            </option>
            <option value="">Term One, 2021</option>
            <option value="">Term Two, 2021</option>
            <option value="">Term Three, 2021</option>
            <option value="">Term Four, 2021</option> */}
          </select>
        </div>
        <div>
          Semester Topic:{" "}
          <select name="topic" id="topic">
            <option value="">{class_name.map}</option>
            {/* <option value="" selected="selected">
              Please select your stack
            </option>
            <option value="">Client Side</option>
            <option value="">Server Side</option>
            <option value="">Full Stack</option>
            <option value="">Agile and DevOps</option> */}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Dropdown;
