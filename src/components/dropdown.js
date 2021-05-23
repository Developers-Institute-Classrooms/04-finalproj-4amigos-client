import React from "react";
import "./review.css";

const Dropdown = () => {
  return (
    <div>
      <form name="form1" id="form1" action="/action_page.php">
        <div>
          Instructor:{" "}
          <select name="instructor" id="instructor">
            <option value="" selected="selected">
              Lance
            </option>
            <option value="">Nik</option>
            <option value="">Mark</option>
          </select>
        </div>
        <div>
          Semester Term:{" "}
          <select name="chapter" id="chapter">
            <option value="" selected="selected">
              Please select your term
            </option>
            <option value="">Term One, 2021</option>
            <option value="">Term Two, 2021</option>
            <option value="">Term Three, 2021</option>
            <option value="">Term Four, 2021</option>
          </select>
        </div>
        <div>
          Semester Topic:{" "}
          <select name="topic" id="topic">
            <option value="" selected="selected">
              Please select your stack
            </option>
            <option value="">Client Side</option>
            <option value="">Server Side</option>
            <option value="">Full Stack</option>
            <option value="">Agile and DevOps</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Dropdown;
