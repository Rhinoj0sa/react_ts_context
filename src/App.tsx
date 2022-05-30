import { createContext, useCallback, useContext, useDebugValue } from "react";
import "./styles.css";
import Counter from "./components/Counter";
import ShoppingBasket from "./components/SoppingBasket";

import { ThemeContext } from "./index";
import ProductDisplay from "./components/ProductDislpay";

export default function App() {
  const date = new Date();
  useDebugValue(date, (date) => date.toISOString());
  const theme = useContext(ThemeContext);
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h6> the theme is {theme}</h6>
        <Counter initial="932" />
        <ShoppingBasket
          products={["escoba", "trapeador", "balde", "solucion limpiadora"]}
        />
      </div>
    </>
  );
}
