import * as React from "react";
const ProductDisplay: React.FunctionComponent<{ title: string; key: any }> = (
  props
) => <h4> El titulo es: {props.title} </h4>;

export default ProductDisplay;
