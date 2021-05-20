import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Dropdown = () => {
  const Instructors = "Instructors";

  return (
    <div>
      <DropdownButton
        // key={studentDD}
        // id={dropdown - variants - Secondary}
        // variant={secondary}
        title={Instructors}
      >
        <Dropdown.Item>Nik</Dropdown.Item>
        <Dropdown.Item>Lance</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Dropdown;
