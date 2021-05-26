import React from "react";
import "./review.css";

const Dropdown = () => {
  return (
    <div>
      <div name="form1" id="form1" action="/action_page.php">
        Instructor:{" "}
        <select name="instructor" id="instructor">
          <option value="DEFAULT">Lance</option>
          <option value="nik">Nik</option>
          <option value="mark">Mark</option>
        </select>
      </div>
      <div>
        Semester Term:{" "}
        <select name="chapter" id="chapter">
          <option value="DEFAULT">Please select your term</option>
          <option value="term one">Term One, 2021</option>
          <option value="term two">Term Two, 2021</option>
          <option value="term three">Term Three, 2021</option>
          <option value="term four">Term Four, 2021</option>
        </select>
      </div>
      <div>
        Semester Topic:{" "}
        <select name="topic" id="topic">
          <option value="DEFAULT">Please select your stack</option>
          <option value="client side">Client Side</option>
          <option value="server side">Server Side</option>
          <option value="full stack">Full Stack</option>
          <option value="agile and devops">Agile and DevOps</option>
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
