import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const burger = props => {
  let givenIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredients key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    });
  if (givenIngredients.length === 0) givenIngredients = <p>Add ingredients</p>;
  return (
    <div className={styles.Burger}>
      <BurgerIngredients type="bread-top" />
      {givenIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
