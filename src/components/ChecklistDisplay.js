import { checlists } from "./data";
export default function ChecklistDisplay(props) {
  switch (props.listnumber) {
    case 0:
      return;
    case 1:
      return (
        <ul>
          {checlists[0].elements.map((element) => {
            return <li>{element}</li>;
          })}
        </ul>
      );
    case 2:
      return (
        <ul>
          {checlists[1].elements.map((element) => {
            return <li>{element}</li>;
          })}
        </ul>
      );
    case 3:
      return (
        <ul>
          {checlists[2].elements.map((element) => {
            return <li>{element}</li>;
          })}
        </ul>
      );
    default:
      return <p className="error">Error, checklist not found</p>;
  }
}
