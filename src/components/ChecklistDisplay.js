import { checlists } from "./data";
export default function ChecklistDisplay(props) {
  switch (props.listnumber) {
    case 0:
      return;
    case 1:
      return (
        <ul>
          {checlists.map((list) => {
            return <li>{list[1].elements}</li>;
          })}
        </ul>
      );
    case 2:
      return <h1>Lista 2</h1>;
    case 3:
      return <h1>Lista 3</h1>;
    default:
      return <p className="error">Error, checklist not found</p>;
  }
}
