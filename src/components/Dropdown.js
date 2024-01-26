import React from "react";
import logo from "../assets/logo.jpg"

const Dropdown = ({ onSelect }) => {
    return (
      <>
      <select class ="role-drop" onChange={e => onSelect(e.target.value)}>
        <option class = "role" value="student">Student</option>
        <option class = "role" value="selfEmployed">Salaried</option>
        <option class = "role" value="business">Business</option>
      </select>
      </>
    );
};

export default Dropdown;