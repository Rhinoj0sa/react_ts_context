import * as React from "react";
interface Props {
  products: string[];
}

interface State {
  quantities: { [key: string]: number };
}

class ShoppingBasket extends React.Component<Props, State> {
  static defaultProps: Props = {
    products: []
  };

  state: Readonly<State> = {
    quantities: this.props.products.reduce((acc, product) => {
      acc[product] = 1;
      return acc;
    }, {})
  };

  render() {
    const { products } = this.props;
    const { quantities } = this.state;

    return (
      <div>
        <h3>Shopping Basket component:</h3>
        <ul>
          {products.map((product, key) => (
            <li key={key}>
              <h2>{product}</h2>
              <p>
                Quantity:
                <input type="number" value={quantities[product]} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ShoppingBasket;
