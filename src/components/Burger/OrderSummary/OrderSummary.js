import React from "react";

export default props => {
  const order = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <div>
      <h1>Your Order</h1>
      <h3>Following ingredients of your delicious Burger</h3>
      <ul>{order}</ul>
      <p>Continue to checkout?</p>
    </div>
  );
};
