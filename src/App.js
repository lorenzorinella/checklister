import "./App.css";
import { checlists } from "./components/data";
import { useState } from "react";
import ChecklistDisplay from "./components/ChecklistDisplay";

function App() {
  const [choice, setChoice] = useState(0);
  const checklistClick = (id) => {
    setChoice(id);
  };
  console.log("Hai premuto sull'elemento numero: ", choice);
  return (
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
  );
}
export default App;
