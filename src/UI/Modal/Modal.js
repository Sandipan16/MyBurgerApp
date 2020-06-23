import React from "react";
import classes from "./Modal.module.css";
import Auxi from "../../hoc/Auxi";
import Backdrop from "../Backdrop/Backdrop";

export default props => {
  return (
    <Auxi>
      <Backdrop show={props.show} clicked={props.cancel} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-180vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Auxi>
  );
};
