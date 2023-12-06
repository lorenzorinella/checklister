import { checlists } from "./data";
import React, { useContext } from "react";
import MyContext from "./Context.js";

export default function ChecklistDisplay(props) {
  const handleCheckboxChange = (event) => {
    const checkbox = event.target;
    const label = checkbox.nextSibling;
    if (checkbox.checked) {
      label.classList.add("barrato");
    } else {
      label.classList.remove("barrato");
    }
  };
  const value = useContext(MyContext);
  console.log(value);
  switch (props.listnumber) {
    case 0:
      return;
    case 1:
      return (
        <>
          <ul>
            {checlists[0].elements.map((element) => {
              return (
                <li>
                  <input type="checkbox" onChange={handleCheckboxChange} />
                  <label>{element}</label>
                </li>
              );
            })}
          </ul>
          <p>And this is my context value: {value}</p>
        </>
      );
    case 2:
      return (
        <ul>
          {checlists[1].elements.map((element) => {
            return (
              <li>
                {" "}
                <input type="checkbox" onChange={handleCheckboxChange} />
                <label>{element}</label>
              </li>
            );
          })}
        </ul>
      );
    case 3:
      return (
        <ul>
          {checlists[2].elements.map((element) => {
            return (
              <li>
                {" "}
                <input type="checkbox" onChange={handleCheckboxChange} />
                <label>{element}</label>
              </li>
            );
          })}
        </ul>
      );
    default:
      return <p className="error">Error, checklist not found</p>;
  }
}
