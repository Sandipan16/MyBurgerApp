import React from "react";
import BuildControl from "../BuildControl/BuildControl";
import classes from "./BuildControls.module.css";
import styles from "./OrderButton.module.css";

const controls = [
  { label: "Meat", type: "meat" },
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" }
];
export default props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        The current price : <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(ctr => {
        return (
          <BuildControl
            key={ctr.label}
            label={ctr.label}
            type={ctr.type}
            removed={() => props.onRemove(ctr.type)}
            added={() => props.onAdd(ctr.type)}
            disabled={props.disabled[ctr.type]}
          />
        );
      })}
      <button className={styles.OrderButton} disabled={!props.purchased}>
        ORDER NOW
      </button>
    </div>
  );
};
