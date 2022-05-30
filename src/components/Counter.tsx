// import useState next to FunctionComponent
import React, {
  FunctionComponent,
  useState,
  useEffect,
  useContext
} from "react";
import { ThemeContext } from "../index";
// our components props accept a number for the initial value
const Counter: FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {
  // since we pass a number here, clicks is going to be a number.
  // setClicks is a function that accepts either a number or a function returning
  // a number
  const [clicks, setClicks] = useState(initial);
  const [name, setName] = useState("Roberto");
  const theme = useContext(ThemeContext);
  useEffect(() => {
    console.log(name, clicks, theme);
    document.title = `Hello ${name}`;
  });

  return (
    <>
      <h3> Counter functional component </h3>
      <h4> doc title: {document.title} </h4>
      <h6>the theme is {theme}</h6>
      <p>Clicks: {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>+</button>
      <button onClick={() => setClicks(clicks - 1)}>-</button>
      <button onClick={() => setName(`${name} ${clicks.toString()}`)}>
        chang doc title
      </button>
    </>
  );
};

export default Counter;
