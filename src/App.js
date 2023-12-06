import "./App.css";
import { checlists } from "./components/data";
import { useState } from "react";
import ChecklistDisplay from "./components/ChecklistDisplay";
import React from "react";
import MyContext from "./components/Context";

function App() {
  const [choice, setChoice] = useState(0);
  const checklistClick = (id) => {
    setChoice(id);
  };
  const sharedData = "Ciccio";
  return (
    <MyContext.Provider value={sharedData}>
      <div className="App">
        <h3>Hey we have some checklists: </h3>
        <ul>
          {checlists.map((list) => {
            return (
              <li>
                <a key={list.id} onClick={() => checklistClick(list.id)}>
                  {list.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="itemListContainer">
          <ChecklistDisplay listnumber={choice} />
        </div>
      </div>
    </MyContext.Provider>
  );
}
export default App;
